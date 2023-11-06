import axios from "axios";

const api = axios.create({
    baseURL: "https://parseapi.back4app.com/parse/classes/"
})

export default api;