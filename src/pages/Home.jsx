import React from 'react';
import Saudacao from '../components/saudacao';
import Dashboard from '../components/dashboard.jsx';


const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <Saudacao />
                    <p>Bem-vindo à página inicial.</p>
                    <Dashboard/>
                </div>
            </div>
        </div>
    );
};

export default Home;

