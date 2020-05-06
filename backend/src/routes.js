/* 
    routes, aquivo criado para integrar as routas com
    cada controller da aplicação de forma simples e organizada
    exportando tudo em uma única variável routes

*/

const express = require("express");
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;