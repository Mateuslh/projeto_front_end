import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContribuinteModal from "./AddContribuinteModal";

export function TabContribuintes() {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContribuinte, setSelectedContribuinte] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8080/api/contribuinte', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error('Erro ao buscar contribuintes:', error);
        });
    };

    const handleUpdate = (contribuinte) => {
        setSelectedContribuinte(contribuinte);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        console.log("Tentando excluir contribuinte com id:", id);
        axios.delete(`http://localhost:8080/api/contribuinte/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            console.log("Contribuinte excluído com sucesso:", id);
            fetchData();
        })
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                alert("Não é possível excluir o contribuinte. O contribuinte possui débitos ativos.");
            } else {
                alert("Erro ao excluir contribuinte.");
            }
            console.error('Erro ao excluir contribuinte:', error);
        });
    };

    const handleSave = (newContribuinte) => {
        axios.post('http://localhost:8080/api/contribuinte', newContribuinte, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            fetchData();
            setIsModalOpen(false);
            setSelectedContribuinte(null); 
        })
        .catch((error) => {
            console.error('Erro ao adicionar contribuinte:', error);
        });
    };

    return (
        <div className="container mt-5">
            <button className="btn btn-primary mb-3" onClick={() => { setIsModalOpen(true); setSelectedContribuinte(null); }}>
                Adicionar Contribuinte
            </button>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>CODIGO</th>
                        <th>NOME</th>
                        <th>TIPO</th>
                        <th>CPF/CNPJ</th>
                        <th>SITUAÇÃO</th>
                        <th>OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((contribuinte) => (
                        <tr key={contribuinte.id}>
                            <td>{contribuinte.codigo}</td>
                            <td>{contribuinte.nome}</td>
                            <td>{contribuinte.tipoContribuinte === 'PESSOA_FISICA' ? 'Pessoa Física' : 'Pessoa Jurídica'}</td>
                            <td>{contribuinte.cpfCnpj}</td>
                            <td>{contribuinte.situacao}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdate(contribuinte)}>Atualizar</button>
                                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(contribuinte.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddContribuinteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                contribuinte={selectedContribuinte} 
            />
        </div>
    );
}