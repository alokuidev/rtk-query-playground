import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export const fetchApi = () =>{
    return axiosApi.get('/posts');
}