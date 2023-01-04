import axios from "axios";

const heroApi = axios.create({
    baseURL: 'http://localhost:3040'
})

export const getHeroTitle = async () => {
    const response = await heroApi.get('/api/podcast/ui/')
    return response.data
}

export  default getHeroTitle;