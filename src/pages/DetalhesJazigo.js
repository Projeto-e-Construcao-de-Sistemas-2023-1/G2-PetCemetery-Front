import React, { useEffect, useState } from 'react';
import { Box, Button, Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getMeusJazigos } from '../components/api';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { format } from 'date-fns';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark' } });

const DetalhesJazigo = () => {
  const cpf = sessionStorage.getItem('cpf');
  const [jazigos, setJazigos] = useState([]);
  const navigate = useNavigate();

  const fetchJazigos = async () => {
    try {
      const response = await getMeusJazigos(cpf);
      console.log("Response da API:", response);
      setJazigos(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJazigos();
  }, [cpf]);

  const handleAgendarEnterro = (idJazigo) => {
    navigate(`/AgendarEnterro?id=${idJazigo}`);
  };

  const handleAgendarExumacao = (idJazigo) => {
    navigate(`/AgendarExumacao?id=${idJazigo}`);
  };

  const handlePersonalizarJazigo = (idJazigo) => {
    navigate(`/PersonalizarJazigo?id=${idJazigo}`);
  };

  const handleDetalhesJazigo = (idJazigo) => {
    navigate(`/DetalhesJazigo/${idJazigo}`);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box p={2} textAlign="center">
          <Box sx={{ margin: 2 }} >
            <Titulo texto="Detalhes do Jazigo" mW="md" />
            <Typography variant="h5">Seu CPF: {cpf}</Typography>
          </Box>
          {jazigos.map((jazigo, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
                <Typography variant="h6">Jazigo {jazigo.endereco}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">Detalhes do Jazigo {jazigo.idJazigo}</Typography>
                <Typography variant="h6">Nome do Pet: {jazigo.nomePet}</Typography>
                {jazigo.dataEnterro ? (
                  <Typography variant="h6">Data de Enterrado: {format(new Date(jazigo.dataEnterro), 'dd/MM/yyyy')}</Typography>
                ) : (
                  <Typography variant="h6">Data de Enterrado: </Typography>
                )}
                <Typography variant="h6">Endereço: {jazigo.endereco}</Typography>
                <Typography variant="h6">ID do Jazigo: {jazigo.idJazigo}</Typography>
                <Typography variant="h6">Plano: {jazigo.plano}</Typography>
                {jazigo.dataNascimento ? (
                  <Typography variant="h6">Data de Nascimento: {format(new Date(jazigo.dataNascimento), 'dd/MM/yyyy')}</Typography>
                ) : (
                  <Typography variant="h6">Data de Nascimento: </Typography>
                )}
                <Typography variant="h6">Espécie: {jazigo.especie}</Typography>
                {jazigo.mensagem && (
                  <Typography variant="h6">Mensagem {(jazigo.mensagem)}</Typography>
                )}
                {jazigo.nomePet ? (
                  <Stack spacing={2} direction='row' sx={{ margin: 2 }}>
                    <Button variant="contained" color="primary" onClick={() => handleAgendarEnterro(jazigo.idJazigo)}> Agendar enterro </Button>
                    <Button variant="contained" color="secondary" onClick={() => handlePersonalizarJazigo(jazigo.idJazigo)}> Personalizar Jazigo </Button>
                  </Stack>
                ) : (
                  <Stack spacing={2} direction='row' sx={{ margin: 2 }}>
                    <Button variant="contained" color="primary" onClick={() => handleAgendarExumacao(jazigo.idJazigo)}> Agendar exumação </Button>
                    <Button variant="contained" color="secondary" onClick={() => handlePersonalizarJazigo(jazigo.idJazigo)}> Personalizar Jazigo </Button>
                  </Stack>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default DetalhesJazigo;
