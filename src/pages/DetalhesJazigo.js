import React, { useEffect, useState } from 'react';
import { Box, Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getMeusJazigos } from '../components/api';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { format } from 'date-fns';

const mainTheme = createTheme({ palette: { mode: 'dark' } });

const DetalhesJazigo = () => {
  const cpf = sessionStorage.getItem('cpf');
  const [jazigos, setJazigos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJazigos = async () => {
      try {
        const response = await getMeusJazigos(cpf);
        console.log("Response da API:", response);
        setJazigos(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJazigos();
  }, [cpf]);

  console.log("Estado de Jazigos:", jazigos);

  const handleDetalhesJazigo = (idJazigo) => {
    navigate(`/DetalhesJazigo/${idJazigo}`);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box p={2} textAlign="center">
          <Typography variant="h5" component="h1" gutterBottom>Detalhes do Jazigo</Typography>
          <Typography variant="body1">CPF: {cpf}</Typography>
          {jazigos.map((jazigo, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
                <Typography variant="h6">Jazigo {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">Detalhes do Jazigo {jazigo.idJazigo}</Typography>
                <Typography variant="body1">Nome do Pet: {jazigo.nomePet}</Typography>
                {jazigo.dataEnterro ? (
                  <Typography variant="body1">Data de Enterrado: {format(new Date(jazigo.dataEnterro), 'dd/MM/yyyy')}</Typography>
                ) : (
                  <Typography variant="body1">Data de Enterrado: </Typography>
                )}
                <Typography variant="body1">Endereço: {jazigo.endereco}</Typography>
                <Typography variant="body1">ID do Jazigo: {jazigo.idJazigo}</Typography>
                {jazigo.dataNascimento ? (
                  <Typography variant="body1">Data de Nascimento: {format(new Date(jazigo.dataNascimento), 'dd/MM/yyyy')}</Typography>
                ) : (
                  <Typography variant="body1">Data de Nascimento: </Typography>
                )}
                <Typography variant="body1">Espécie: {jazigo.especie}</Typography>
                {jazigo.mensagem && (
                <Typography variant="body1">Mensagem {(jazigo.mensagem)}</Typography>
              )}
                {/* Adicione mais informações do jazigo aqui */}
                {jazigo.nomePet !== 'Vazio' && (
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/AgendarExumacao?id=${jazigo.idJazigo}`}
                    >
                      Agendar exumação
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      component={Link}
                      to={`/PersonalizarJazigo?id=${jazigo.idJazigo}`}
                    >
                      Personalizar Jazigo
                    </Button>
                  </div>
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
