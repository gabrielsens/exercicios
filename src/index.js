import React from 'react';
import ReactDOM from 'react-dom';
import BomDia from './components/BomDia';
import Saudacao from './components/Saudacao';


import Primeiro from './components/Primeiro';
ReactDOM.render(
    <React.StrictMode >
        <h1>Teste</h1>
        <Saudacao tipo="1" nome="1" />
        <BomDia nome="Guilherme" />
        <BomDia nome="Gabriel" bemVindo="Seja muito bem vindo" />
        <Primeiro />
    </React.StrictMode>
    , document.getElementById('root')
)