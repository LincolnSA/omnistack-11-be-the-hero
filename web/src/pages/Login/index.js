import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Login() {

    const [id, setId] = useState('');
    const history = useHistory(); //redireciona a página

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            //utilizando o local storage para guardar informações do user
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push("/profile"); //redireciona a página

        } catch (error) {
            alert("Falha no login, tente novamente.");
            setId('');
        }
    };

    return (
        <div className="login-container">

            <section className="form">

                <img src={logo} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}