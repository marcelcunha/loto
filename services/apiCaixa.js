import http from "./api"

export const megasena = async () => {
    return await (await http.get('/mega-sena')).data
}