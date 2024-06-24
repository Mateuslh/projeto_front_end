import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/cabecalho-rodape/navbar.jsx';
import Home from './pages/Home';
import Contribuintes from './pages/Contribuintes';
import Debitos from './pages/Debitos';
import Login from './pages/Login';
import { UserProvider } from './components/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuscarDebitos from "./components/contribuinte/tabDebitosContrib.jsx";
import './App.css';
import Footer from './components/cabecalho-rodape/footer.jsx';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <div className="d-flex flex-column min-vh-100">
                    <Navbar />
                    <div className="flex-grow-1">
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/contribuintes" element={<Contribuintes />} />
                            <Route path="/debitos" element={<Debitos />} />
                            <Route path="/contribuinte/:id/getDebitos" element={<BuscarDebitos />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;
