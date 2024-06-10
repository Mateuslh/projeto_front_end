import React, { useState, useEffect } from "react";
import { api } from "../lib/axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export function TabContribuintes({ data }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/posts')
            .then((resp) => {
                setPosts(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleUpdate = (id) => {
        // Lógica para atualizar o contribuinte com o id especificado
        console.log("Atualizar contribuinte com id:", id);
    };

    const handleDelete = (id) => {
        // Lógica para excluir o contribuinte com o id especificado
        console.log("Excluir contribuinte com id:", id);
    };

    return (
        <div className="container mt-5">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>NOME</th>
                        <th>TIPO</th>
                        <th>CPF/CNPJ</th>
                        <th>SITUAÇÃO</th>
                        <th>OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.nome}</td>
                            <td>{post.tipo}</td>
                            <td>{post.cpfCnpj}</td>
                            <td>{post.situacao}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdate(post.id)}>Atualizar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(post.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                    {data.map((contribuinte, index) => (
                        <tr key={index}>
                            <td>{contribuinte.nome}</td>
                            <td>{contribuinte.tipo}</td>
                            <td>{contribuinte.cpfCnpj}</td>
                            <td>{contribuinte.situacao}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdate(contribuinte.id)}>Atualizar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(contribuinte.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
