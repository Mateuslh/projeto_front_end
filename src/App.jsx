import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Home from './pages/Home';
import Contribuintes from './pages/Contribuintes';
import Debitos from './pages/Debitos';
import Login from './pages/Login';
import { UserProvider } from './components/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <div>
                    <Navbar /> 
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} /> 
                        <Route path="/contribuintes" element={<Contribuintes />} /> 
                        <Route path="/debitos" element={<Debitos />} /> 
                        <Route path="*" element={<Navigate to="/login" />} /> 
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;
