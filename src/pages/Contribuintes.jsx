import React from 'react';
import { Mcrud } from '../components/modalcrud';

const Contribuintes = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Contribuintes</h1>
                    <p>Aqui abaixo é necessário adicionar o CRUD para adicionar os contribuintes.</p>
                    <Mcrud/>
                </div>
            </div>
        </div>
    );
};

export default Contribuintes;
