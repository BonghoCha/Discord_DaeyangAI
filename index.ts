import DiscordJS, { Intents, Message, TextChannel } from 'discord.js'
import REST from '@discordjs/rest'
import dotenv from 'dotenv'
import { recommend_meal, reply_string } from './src/data'
import { fetchSolvedInfo } from './src/model'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
        , Intents.FLAGS.GUILD_PRESENCES
    ]
})

client.on('ready', () => {
    console.log("대양이 시동 완료!");
})

client.on('messageCreate', async (message) => {
    // 대양이 불렀을때
    if (message.content === '대양아') {
        const rand = Math.floor(Math.random() * reply_string.length);

        message.reply({
            content: reply_string[rand],
        })
    } else {
        var firstL = message.content[0];

        if (firstL === "!") {
            // 식사 메뉴 추천
            if (message.content.includes('밥추천') || message.content.includes('메뉴추천')) {
                const randomIndex = Math.floor(Math.random() * recommend_meal.length);

                message.reply({
                    content: recommend_meal[randomIndex],
                })
            }
            // 백준 랭크
            else if (message.content.includes('solved')) {
                const userID = message.content.split(' ')[1];

                message.reply({
                    content: await fetchSolvedInfo(userID)
                })
            }
        }
    }
})

// 사용자 상태 업데이트 리스너
client.on('presenceUpdate', async (newMember, oldMember) => {
    const guild = oldMember.guild;

    const userID = oldMember.userId;
    const userStatus = oldMember.status.toString();

    var userName = "";
    var statusMessage = ""

    // 상태에 따른 메세지 분류
    switch (userStatus) {
        case "online":
            statusMessage = " 님, 만나서 반가워요! :)";
            break;
        case "offline":
            statusMessage = " 님, 다음에 또 만나요~";
            break;
        case "idle":
            statusMessage = " 님이 자리를 비웠어요.";
            break;
        case "dnd":
            statusMessage = " 님은 지금 다른 용무중이에요.";
            break;
        default:
            break;
    }

    // 사용자 이름 가져오기
    try {
        const response = await client.users.fetch(userID);
        userName = response.username;
    } catch (error) {
        console.log("사용자 이름 가져오는 중 에러 발생");
        return
    }

    // 테스트 서버와 모각공 모두 작동하게 설정
    if (guild?.name == "Bot Test서버" || guild?.name == "모각공/모각코") {
        const channelID = guild?.systemChannelId;

        const presenceMessage = userName + statusMessage;

        (client.channels.cache.get(channelID!) as TextChannel)
            .send(presenceMessage)
            .catch((error) => {
                console.log(error)
            })
    }
})

client.login(process.env.TOKEN)