import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(event) {
        event.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        } catch (error) {
            alert("Error ao cadastrar, tente novamente.");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be the Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        type="text"
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}

                    />
                    <textarea
                        placeholder="descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
