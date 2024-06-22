import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddDebitoModal from './AddDebitoModal';
import { API_BASE_URL } from '../services/apiConfig.js';

function TabDebitos() {
    const [data, setData] = useState([]);
    const [contribuintes, setContribuintes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDebito, setSelectedDebito] = useState(null);

    useEffect(() => {
        fetchData();
        fetchContribuintes();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/debito`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar débitos:', error);
            });
    };

    const fetchContribuintes = () => {
        axios.get(`${API_BASE_URL}/api/contribuinte`)
            .then((response) => {
                setContribuintes(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar contribuintes:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/debito/${id}`)
            .then(() => {
                console.log("Débito excluído com sucesso:", id);
                fetchData();
            })
            .catch((error) => {
                console.error('Erro ao excluir débito:', error);
            });
    };

    const handleSave = (debito) => {
        if (debito.id) {
            axios.put(`http://localhost:8080/api/debito/${debito.id}`, debito)
                .then(() => {
                    fetchData();
                    setIsModalOpen(false);
                    setSelectedDebito(null);
                })
                .catch((error) => {
                    console.error('Erro ao atualizar débito:', error);
                });
        } else {
            axios.post(`${API_BASE_URL}/api/debito`, debito)
                .then(() => {
                    fetchData();
                    setIsModalOpen(false);
                    setSelectedDebito(null);
                })
                .catch((error) => {
                    console.error('Erro ao adicionar débito:', error);
                });
        }
    };

    return (
        <div className="container mt-5">
            <button
                className="btn btn-primary mb-3"
                onClick={() => { setIsModalOpen(true); setSelectedDebito(null); }}
            >
                Adicionar Débito
            </button>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Crédito</th>
                        <th>Ano</th>
                        <th>Parcela</th>
                        <th>Situação</th>
                        <th>Contribuinte</th>
                        <th>Valor Total</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((debito) => (
                        <tr key={debito.id}>
                            <td>{debito.credito}</td>
                            <td>{debito.ano}</td>
                            <td>{debito.parcela}</td>
                            <td>{debito.situacao}</td>
                            <td>{debito.contribuinte.nome}</td>
                            <td>{debito.vlTotal}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => { setSelectedDebito(debito); setIsModalOpen(true); }}
                                >
                                    Atualizar
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(debito.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddDebitoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                debito={selectedDebito}
                contribuintes={contribuintes}
            />
        </div>
    );
}

export default TabDebitos;
