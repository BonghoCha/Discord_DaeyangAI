clone 이후 > **npm init** 필요

# 2022 04 06 
#### 임시로 추가한 랜덤 reply 기능
```ts
var reply_string = ['왜불러', '왜', '응?', '나를 찾느냐', '와이']
client.on('messageCreate', (message) => {
    if (message.content === '대양아') {        
        const rand = Math.floor(Math.random() * 5);

        message.reply({
            content: reply_string[rand],
        })
    }
})
```





# 참조 

##### discord.js
https://discord.js.org/#/docs/discord.js/stable/general/welcome

##### youtube
https://www.youtube.com/watch?v=JMmUW4d3Noc
