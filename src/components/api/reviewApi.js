import axios from "axios";

const reviewApi = axios.create({
    baseURL: 'http://localhost:3040'
})

export const getReview = async () => {
    const response = await reviewApi.get('/api/podcast/ui/')
    return response.data
}

export default reviewApi;