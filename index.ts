import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("대양이 시동 완료!");
})


var reply_string = ['왜불러', '왜', '응?', '나를 찾느냐', '와이']

// 식사 메뉴 추천 리스트
var recommend_meal = ['치킨', '피자', '닭강정', '안 먹는건 어때?']

client.on('messageCreate', (message) => {
    if (message.content === '대양아') {
        const rand = Math.floor(Math.random() * 5);

        message.reply({
            content: reply_string[rand],
        })
    }

    else if (
        message.content.includes('밥 추천')
        || message.content.includes('점심 추천')
        || message.content.includes('저녁 추천')
        || message.content.includes('메뉴 추천')
        || message.content.includes('뭐먹지')
    ) {
        const randomIndex = Math.floor(Math.random() * recommend_meal.length)

        message.reply({
            content: recommend_meal[randomIndex]
        })
    }
})

client.login(process.env.TOKEN)