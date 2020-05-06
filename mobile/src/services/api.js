
/* 
    baseURL: caminho onde a api está sendo executada
    no mobile usar o endereço ip do expo para que a aplicação consiga encontrar a porta do backend

    Ip local anexado a porta do backend em execução na máquina
    http://192.168.11.7:3333

*/

import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.11.7:3333"
});

export default api;