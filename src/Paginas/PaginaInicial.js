import React from 'react';
import '../Styles/pagina-inicial.css';
import { Link } from 'react-router-dom';

function PaginaInicial() {
  return (
    <div className="container">
      <h1>Bem-vindo ao nosso aplicativo!</h1>
      <p>Faça login ou crie uma conta para começar a alugar jazigos para animais.</p>
      <div>
        <Link to="/Login">
            <button>Entrar</button>
        </Link>
        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default PaginaInicial;