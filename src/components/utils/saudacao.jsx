import React, { useContext } from 'react';
import { UserContext } from '../UserContext.jsx';

const saudacao = () => {
    const { username } = useContext(UserContext);
    const horas = new Date().getHours();
    let saudacao;

    if (horas < 12) {
        saudacao = 'Bom dia';
    } else if (horas < 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    return (
        <h2>{saudacao}, {username}!</h2>
    );
};

export default saudacao;
