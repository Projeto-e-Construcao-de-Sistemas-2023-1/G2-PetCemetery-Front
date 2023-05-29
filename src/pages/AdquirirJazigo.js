import { Modal, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import '../Styles/adquirir-jazigo.css';
import Mapa from '../components/Mapa';
import NavBar from '../components/NavBar';
import ModalPadrao from '../components/ModalPadrao';
import { useNavigate } from 'react-router-dom';
const mainTheme = createTheme({ palette: { mode: 'dark' } });

function AdquirirJazigo() {
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
    navigate(`/CompraJazigo?id=${JazigoEscolhido}`);
  };

  const handleAlugar = () => {
    navigate(`/AlugaJazigo?id=${JazigoEscolhido}`);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />
      <Container component="main">
        <Box sx={{ margin: 2 }}>
          <Typography variant="h2" align="center">
            Escolha o Jazigo no Mapa
          </Typography>
          <Divider orientation="horizontal" flexItem />
        </Box>

        <Mapa onJazigoSelect={handleEscolha} isModalOpen={isModalOpen} />
        <ModalPadrao title={"Jazigo " + (JazigoEscolhido + 1)} open={isModalOpen} onClose={handleModalClose} bt1Text="Comprar" bt1Href={handleComprar} bt2Text="Alugar" bt2Href={handleAlugar} />
      </Container>
    </ThemeProvider>
  );
}

export default AdquirirJazigo;
