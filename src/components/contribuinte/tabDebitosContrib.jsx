import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../services/apiConfig.js';

const BuscarDebitos = () => {
    const { id } = useParams();
    const [debitos, setDebitos] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/contribuinte/${id}/getDebitos`)
            .then(response => response.json())
            .then(data => setDebitos(data))
            .catch(error => console.error('Erro ao carregar débitos:', error));
    }, [id]);

    return (
        <div className="container mt-5">
            <h1>Débitos do Contribuinte</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Valor</th>
                    <th>Data de Pagamento</th>
                    <th>Situação</th>
                </tr>
                </thead>
                <tbody>
                {debitos.map((debito) => (
                    <tr key={debito.id}>
                        <td>{debito.id}</td>
                        <td>{debito.valor}</td>
                        <td>{debito.data_pagamento}</td>
                        <td>{debito.situacao}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuscarDebitos;
