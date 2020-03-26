import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleInsertIncident(e) {
        e.preventDefault();

        const data = {title, description, value};

        try {
            const response = await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar novo caso, tente novamente.');
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamete para encontrar um herói que resolva o problema.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para a home
                    </Link>
                </section>

                <form onSubmit={handleInsertIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}