import React from 'react';
import TabDebitos from '../components/debito/TabDebitos.jsx';

const Debitos = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Débitos</h1>
                    <TabDebitos/>
                </div>
            </div>
        </div>
    );
};

export default Debitos;
