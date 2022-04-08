import axios from "axios"

// solved.ac 티어
export const generateTier = (tier: number) => {

    if (tier === 0) {
        return "Unranked"
    } else if (tier == 31) {
        return "Master"
    }

    const num = Math.floor((tier - 1) / 5)
    const mod = Math.floor(tier % 5)

    var result = ""

    // num 값에 따라 표현할 수 있는 티어 리스트
    var resultList = ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Ruby"];
    
    result = resultList[num] + " ";
    result += mod === 0 ? `${1}` : `${5 - mod + 1}`

    return result
}

// api 가져오기
export const fetchSolvedInfo = async (userID: String) => {
    const url = "https://solved.ac/api/v3/user/show?handle="

    try {
        const response = await axios.get(url + userID)

        if (response.status == 200) {
            const data = response.data

            return `${userID} 님의 BOJ 정보입니다 :)\nTier - ${generateTier(data.tier)}\nSolved - ${data.solvedCount}\nRanking - ${data.rank}`
        }
    } catch (error) {
        return "잘못된 정보가 입력되었습니다."
    }
}