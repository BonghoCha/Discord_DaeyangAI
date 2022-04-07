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

#### Git ignore 정책
NodeModule 포함을 시키지 않기위해 아래의 정책을 추가함.
https://github.com/github/gitignore/blob/main/Node.gitignore


#### 대양이 토큰 사용법
1. .env 파일 생성
2. TOKEN 변수 생성
3. 공유드린 token을 할당

![image](https://user-images.githubusercontent.com/37327313/162112579-71cf8da5-0cc9-45af-8e55-1a361ed16950.png)

# 참조 

# 2022 04 07
#### 대양이 실행 방법
```ts
ts-node index.ts
```

##### discord.js
https://discord.js.org/#/docs/discord.js/stable/general/welcome

##### youtube
https://www.youtube.com/watch?v=JMmUW4d3Noc
