import React from 'react';
import '../Styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao cemitério de animais</h1>
      <p>Encontre o jazigo perfeito para o seu amigo peludo</p>
      <div>
        <Link to="/PaginaInicial">
            <button onClick={() => console.log('Encerrar sessão')}>Encerrar sessão</button>
        </Link>
        <Link to="/SobreNos">
          <button>Sobre nós</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;