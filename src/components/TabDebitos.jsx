import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddDebitoModal from './AddDebitoModal';

function TabDebitos() {
    const [data, setData] = useState([]);
    const [contribuintes, setContribuintes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveDebito = (newDebito) => {
    axios.post('http://localhost:8080/api/debito', newDebito)
        .then(() => {
            console.log('Débito adicionado com sucesso!');
            setIsModalOpen(false); // Fechar o modal após salvar
            fetchData(); // Atualizar a lista de débitos
        })
        .catch((error) => {
            console.error('Erro ao adicionar débito:', error);
        });
};

return (
    <div className="container mt-5">
        <button className="btn btn-primary mb-3" onClick={handleOpenModal}>
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
                    <th>Valor Total</th>
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
                        <td>R$ {debito.vlTotal}</td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(debito.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <AddDebitoModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveDebito}
            contribuintes={contribuintes}
        />
    </div>
);
};

export default TabDebitos;

