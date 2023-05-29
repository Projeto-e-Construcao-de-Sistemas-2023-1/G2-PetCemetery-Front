import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/adquirir-jazigo.css';
import Mapa from '../components/Mapa';
import ModalPadrao from '../components/ModalPadrao';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { useLocation } from 'react-router-dom';
const mainTheme = createTheme({ palette: { mode: 'dark' } });

function AdquirirJazigo() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cpf = searchParams.get('cpf');

  const navigate = useNavigate();

  const [JazigoEscolhido, setJazigoEscolhido] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEscolha = (id) => {
    setJazigoEscolhido(id);
    setIsModalOpen(true);
    console.log("Jazigo escolhido: " + JazigoEscolhido);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setJazigoEscolhido(null);
  };

  const handleComprar = () => {
    navigate(`/CompraAlugaJazigo?cpf=${cpf}&id=${JazigoEscolhido}&tipo=compra`);
  };

  const handleAlugar = () => {
    navigate(`/CompraAlugaJazigo?cpf=${cpf}&id=${JazigoEscolhido}&tipo=aluguel`);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Escolha o jazigo no mapa" mW="md" />
      <Container component="main">
        <Mapa onJazigoSelect={handleEscolha} isModalOpen={isModalOpen} />
        <ModalPadrao title={"Jazigo " + (JazigoEscolhido + 1)} open={isModalOpen} onClose={handleModalClose} bt1Text="Comprar" bt1Href={handleComprar} bt2Text="Alugar" bt2Href={handleAlugar} />
      </Container>
    </ThemeProvider>
  );
}

export default AdquirirJazigo;
