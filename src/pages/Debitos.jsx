import React from 'react';
import { TabDebitos } from '../components/TabDebitos';

const Debitos = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Débitos</h1>
                    <p>Aqui abaixo precisa do CRUD para adicionar os Débitos.</p>
                    <TabDebitos/>
                </div>
            </div>
        </div>
    );
};

export default Debitos;
