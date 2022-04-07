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
client.on('messageCreate', (message) => {
    if (message.content === '대양아') {                
        const rand = Math.floor(Math.random() * reply_string.length);

        message.reply({
            content: reply_string[rand],
        })
    }
})

client.login(process.env.TOKEN)