import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import {recommend_meal, reply_string} from './src/data'

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

client.on('messageCreate', (message) => {
    // 대양이 불렀을때
    if (message.content === '대양아') {                
        const rand = Math.floor(Math.random() * reply_string.length);

        message.reply({
            content: reply_string[rand],
        })
    }
    // 식사 메뉴 추천
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