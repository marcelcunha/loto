import axios from "axios";

const http = axios.create({
    baseURL: "https://loteriascaixa-api.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
});

export default http