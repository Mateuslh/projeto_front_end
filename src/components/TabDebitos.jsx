import { useState, useEffect } from "react";
import { api } from "../lib/axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export function TabDebitos() {
    const [debitos, setDebitos] = useState([]);

    useEffect(() => {
        api.get('/debitos')
            .then((resp) => {
                setDebitos(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID Contribuinte</th>
                        <th>Ano</th>
                        <th>Número de Parcela</th>
                        <th>Situação</th>
                        <th>Valor Lançado</th>
                        <th>Valor de Correção</th>
                        <th>Valor de Juros</th>
                        <th>Valor de Multa</th>
                        <th>Valor de Desconto</th>
                        <th>Valor de Benefício</th>
                    </tr>
                </thead>
                <tbody>
                    {debitos.map((debito) => (
                        <tr key={debito.id}>
                            <td>{debito.contribuinte_id}</td>
                            <td>{debito.ano}</td>
                            <td>{debito.numero_parcela}</td>
                            <td>{debito.situacao}</td>
                            <td>{debito.valor_lancado}</td>
                            <td>{debito.valor_correcao}</td>
                            <td>{debito.valor_juros}</td>
                            <td>{debito.valor_multa}</td>
                            <td>{debito.valor_desconto}</td>
                            <td>{debito.valor_beneficio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
