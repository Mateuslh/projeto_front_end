import React from 'react';
import Saudacao from '../components/saudacao';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <Saudacao />
                    <p>Bem-vindo à página inicial.</p>
                    <p>Falta adicionar os dashboards da pagina inicial, deixar por ultimo apos adicionar os CRUDS</p>
                </div>
            </div>
        </div>
    );
};

export default Home;

