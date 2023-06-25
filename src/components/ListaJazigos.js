import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMeusJazigos } from './api';
const mainTheme = createTheme({ palette: { mode: 'dark' } });

const ListaJazigos = () => {
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
    <React.Fragment>

      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {jazigos.map((jazigo, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
              <Typography variant="h6">Jazigo {jazigo.endereco}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">Nome do Pet: {jazigo.nomePet}</Typography>
              {jazigo.dataEnterro ? (
                <Typography variant="h6">Data de Enterro: {format(new Date(jazigo.dataEnterro), 'dd/MM/yyyy')}</Typography>
              ) : (
                <Typography variant="h6">Data de Enterro: </Typography>
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
      </Container>

    </React.Fragment>
  );
};

export default ListaJazigos;
