import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const navbar = () => {
    const location = useLocation();

    if (location.pathname === '/login') {
        return null;
    }

    return (
        <nav className="navbar navbar-expand-lg collapse.navbar-collapse">
            <div className="container-fluid">
                <Link className="navbar-brand btTrib" to="/home">Tributos</Link>
                <div className="" >
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
