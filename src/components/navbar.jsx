import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navbar = () => {
    const location = useLocation();

    if (location.pathname === '/login') {
        return null;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Meu App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contribuintes">Contribuintes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/debitos">Débitos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
