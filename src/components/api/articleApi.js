import axios from "axios";

const articleApi = axios.create({
    baseURL: 'http://localhost:3040'
})

export const getArticle = async () => {
    const response = await articleApi.get('/api/podcast/ui/')
    return response.data
}

export  default articleApi;