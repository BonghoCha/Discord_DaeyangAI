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

    if (num == 0) {
        result += "Bronze "
    } else if (num == 1) {
        result += "Silver "
    } else if (num == 2) {
        result += "Gold "
    } else if (num == 3) {
        result += "Platinum "
    } else if (num == 4) {
        result += "Diamond "
    } else if (num === 5) {
        result += "Ruby "
    }

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