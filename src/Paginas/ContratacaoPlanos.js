import React, { useState } from 'react';
import '../Styles/contratacao-planos.css';

function ContratacaoPlanos() {

  const [planoSelecionado, setPlanoSelecionado] = useState('');

  const handleSelecaoDePlano = (plano) => {
    setPlanoSelecionado(plano);
  }

  return (
    <div className="container">
      <h1>Conheça nossos planos de personalização</h1>
      <div className="planos">
        <div id="basic" className={`plano ${planoSelecionado === 'basic' ? 'selected' : ''}`} onClick={() => handleSelecaoDePlano('basic')}>
          <h2>Plano Basic</h2>
          <p>R$ 1,00</p>
          <ul>
            <li>Mensagem</li>
            <li>Foto</li>
          </ul>
        </div>
        <div id="silver" className={`plano ${planoSelecionado === 'silver' ? 'selected' : ''}`} onClick={() => handleSelecaoDePlano('silver')}>
          <h2>Plano Silver</h2>
          <p>R$ 50,00</p>
          <ul>
            <li>Mensagem</li>
            <li>Foto</li>
            <li>Flores</li>
          </ul>
        </div>
        <div id="gold" className={`plano ${planoSelecionado === 'gold' ? 'selected' : ''}`} onClick={() => handleSelecaoDePlano('gold')}>
          <h2>Plano Gold</h2>
          <p>R$ 80,00</p>
          <ul>
            <li>Mensagem</li>
            <li>Foto</li>
            <li>Flores</li>
            <li>Catavento</li>
          </ul>
        </div>
      </div>
      <div className="plano-selecionado">
        {planoSelecionado && <p>Plano selecionado: {planoSelecionado}</p>}
      </div>
    </div>
  );
}

export default ContratacaoPlanos;