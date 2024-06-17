import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddDebitoModal from './AddDebitoModal';

function TabDebitos() {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDebito, setSelectedDebito] = useState(null);
    const [contribuintes, setContribuintes] = useState([]);

    useEffect(() => {
        fetchData();
        fetchContribuintes();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8080/api/debito')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar débitos:', error);
            });
    };

    const fetchContribuintes = () => {
        axios.get('http://localhost:8080/api/contribuinte')
            .then((response) => {
                setContribuintes(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar contribuintes:', error);
            });
    };

    const handleUpdate = (debito) => {
        setSelectedDebito(debito);
        setIsModalOpen(true);
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

    const handleSave = (newDebito) => {
        if (newDebito.id) {
            axios.put(`http://localhost:8080/api/debito/${newDebito.id}`, newDebito)
                .then(() => {
                    console.log("Débito atualizado com sucesso:", newDebito);
                    fetchData();
                    setIsModalOpen(false);
                    setSelectedDebito(null);
                })
                .catch((error) => {
                    console.error('Erro ao atualizar débito:', error);
                });
        } else {
            axios.post('http://localhost:8080/api/debito', newDebito)
                .then(() => {
                    console.log("Débito adicionado com sucesso:", newDebito);
                    fetchData();
                    setIsModalOpen(false);
                })
                .catch((error) => {
                    console.error('Erro ao adicionar débito:', error);
                });
        }
    };

    return (
        <div className="container mt-5">
            <button className="btn btn-primary mb-3" onClick={() => {
                setSelectedDebito(null);
                setIsModalOpen(true);
            }}>
                Adicionar Débito
            </button>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Crédito</th>
                        <th>Ano</th>
                        <th>Parcela</th>
                        <th>Situação</th>
                        <th>Nome do Contribuinte</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((debito) => (
                        <tr key={debito.id}>
                            <td>{debito.id}</td>
                            <td>{debito.credito}</td>
                            <td>{debito.ano}</td>
                            <td>{debito.parcela}</td>
                            <td>{debito.situacao}</td>
                            <td>{debito.contribuinte.nome}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdate(debito)}>Atualizar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(debito.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddDebitoModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedDebito(null);
                }}
                onSave={handleSave}
                debito={selectedDebito}
                contribuintes={contribuintes}
            />
        </div>
    );
}

export default TabDebitos;
