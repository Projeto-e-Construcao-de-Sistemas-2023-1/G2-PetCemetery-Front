import React from 'react';
import '../Styles/pagina-inicial.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function PaginaInicial() {
  return (
    <div className="container">
      <h1>Pet Cemetery</h1>
      <img src={logo} alt="logo" className='logoImg'></img>
      <p>Faça login ou crie uma conta para começar a alugar jazigos para animais.</p>
      <div>
        <Link to="/Login">
            <button>Entrar</button>
        </Link>
        <button>Cadastrar</button>

        <button>Quem somos</button>

        <Link to="/ContratacaoPlanos">
          <button>Conheça nossos planos</button>
        </Link>

        <button>Contato</button>
      </div>
    </div>
  );
}

export default PaginaInicial;