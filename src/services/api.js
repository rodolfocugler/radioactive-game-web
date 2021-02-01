import axios from "axios";
import {getToken} from "./auth";
import SockJS from "sockjs-client";

export const api = axios.create({
    baseURL: "https://radioactive-game.herokuapp.com"
    //baseURL: "https://3db75071c1592c7d4c6.ddns.net:443"
})

export const wsClient = () => {
    return new SockJS("https://radioactive-game.herokuapp.com/gs-websocket",
        null,
        {transports: ['xhr-streaming'], headers: {'Authorization': `Bearer ${getToken()}`}});
}

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;