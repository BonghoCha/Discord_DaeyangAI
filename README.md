# Discord 봇 👾대양이👾

![무제](https://user-images.githubusercontent.com/55919701/162552638-28072a5f-ae19-4be2-84b5-30632f793bbb.jpg)

모각공 중 지친 심신을 위로해줄 귀여운 Discord 봇 대양이입니다.

## Installation

>`npm` 환경이 모두 구축되어있다는 가정 하에 작성되었습니다. `npm` 설치가 필요하다면 링크를 참고해주세요.
>
>- [Installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


- 현재 Repository 를 Clone 합니다.
- 패키지 설치 및 업데이트를 위해 Terminal 상에서 `npm install` 명령어를 실행합니다.
- Typescript 환경이 구성되어있지 않다면 아래 절차를 진행해주세요.
	- Typescript 설치를 위해 `npm install -g typescript` 명령어를 실행합니다.
	- ts-node 설치를 위해 `npm install -g ts-node` 명령어를 실행합니다.
	- 자세한 사항은 [링크](https://www.npmjs.com/package/ts-node)를 참고해주세요.
- 프로젝트 루트에 `.env` 파일을 생성한 후 개발자에게 토큰을 받아 변수로 설정합니다.

![image](https://user-images.githubusercontent.com/55919701/162552110-a86070b9-df0c-4727-96c6-dbddd6b55ef2.png)

```
// .env 파일
TOKEN = YOUR_TOKEN_HERE
```

- 모든 설정이 완료된 후 Terminal 상에서 `ts-node index.ts` 명령어를 실행합니다.
- Console 에 `대양이 시동 완료!` 메세지가 출력된다면 성공!

## Contribution

프로젝트에 기여하고 싶으시다면 Repository 를 Fork 한 후 브랜치를 생성하여 진행해주세요!

### Branches

해당 프로젝트는 변형된 `Git Flow` 전략을 사용하고 있습니다.

기능개발 브랜치명은 `feature/기능명` 으로 설정해주세요. 

기타 이슈사항들을 위한 브랜치명은 `hotfix/이슈명` 으로 설정해주세요.

### Pull Request

현 시점에는 배포가 필요없기 때문에 `develop` 브랜치가 `main` 브랜치의 역할을 대신합니다.

자신의 `origin` 의 브랜치에서 해당 Repository 의 `develop` 으로 PR 을 생성해주세요.

PR 은 최대한 빠르게 검토 후 Merge 될 예정입니다!

## Features

> `대양아` 를 제외한 모든 커맨드는 시작 부분에 `!` 문자를 포함합니다.

### 2022.04.09 (토) 기준

- `대양아` 호출 시 랜덤 대답
- `!밥추천` 커맨드 입력 시 메뉴 추천
- `!solved userID` 커맨드 입력 시 백준 Tier, 해결한 문제 수, 랭킹 출력  