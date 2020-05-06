import React from 'react';

/* 
    usado para manipular as rotas

    browserRouter: engloba todas as rotas necessárias
    switch: permite uma única rota ser chamada
    route: define um componente como router
*/
import { Switch, BrowserRouter, Route } from 'react-router-dom';

/* 
    todas as páginas necessária para navegação
*/
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

/* 
    function exportada contendo a navegação 
*/
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidentes/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
};