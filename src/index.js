import React from 'react';
import ReactDOM from 'react-dom';
import BomDia from './components/BomDia';
import Saudacao from './components/Saudacao';

import Pai from './components/Pai';

import Pai2 from './Pai2';
import Filhos2 from './Filho2';

import Primeiro from './components/Primeiro';
ReactDOM.render(
    <React.StrictMode >
        <h1>Teste</h1>
        <Saudacao tipo="1" nome="1" />
        <hr />
        <BomDia nome="Guilherme" />
        <hr />
        <BomDia nome="Gabriel" bemVindo="Seja muito bem vindo" />
        <hr />
        <Primeiro />
        <hr />
        <Pai nome="Gabriel" sobrenome="Sens" />
        <hr />
        <Pai2 nome="Gabriel" sobrenome="Sens" >
            <Filhos2 nome="Pedro" sobrenome="sens" />
            <Filhos2 nome="Joao" sobrenome="Sens" />
        </Pai2>
    </React.StrictMode>
    , document.getElementById('root')
)