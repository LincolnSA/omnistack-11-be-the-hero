import axios from 'axios';

/*
    ponto de partida da api, para a comunicação
*/

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;