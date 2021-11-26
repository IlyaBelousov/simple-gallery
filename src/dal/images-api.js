import axios from "axios";

const instance = axios.create({
    baseURL: 'https://picsum.photos/v2/'
})
export const imagesAPI = {
    getImages(page, limit) {
        return instance.get(`list?page=${page}&limit=${limit}`)
    }
}