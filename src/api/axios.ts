import axios from "axios";

export const Api = axios.create({
    baseURL : "https://tiao.supliu.com.br/api",
    timeout : 5000
})
