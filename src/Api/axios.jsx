import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
})

export const fetchApi = () =>{
    return axiosApi.get('/posts');
}