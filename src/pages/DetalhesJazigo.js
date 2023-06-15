import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import imagemCachorro from '../images/cachorro-vasco.jpg';
import { getDetalhesJazigo } from '../components/api';

const mainTheme = createTheme({ palette: { mode: 'dark' } });

const DetalhesJazigo = () => {
  const cpf = sessionStorage.getItem('cpf');
  const { id } = useParams();
  const [jazigo, setJazigo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetalhesJazigo = async () => {
      try {
        const response = await getDetalhesJazigo(cpf, id);
        console.log("Response da API:", response); // Verifique a resposta da API aqui

        if (response === "OK;vazio") {
          setJazigo({ nomePet: "Vazio", endereco: id });
        } else {
          setJazigo(response);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchDetalhesJazigo();
  }, [cpf, id]);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card>
          <Box p={2} textAlign="center">
            <Typography variant="h5" component="h1" gutterBottom>Detalhes do Jazigo</Typography>
            <Stack direction="row" spacing={2} margin={2} justifyContent="center">
              <Typography variant="body1">Nome: {jazigo?.nomePet}</Typography>
              <Typography variant="body1">Endereço: {jazigo?.endereco}</Typography>
            </Stack>

            {jazigo && jazigo.nomePet !== "Vazio" && (
              <Stack direction="row" spacing={2} margin={2} justifyContent="center">
                <Typography variant="body1">Outro dado: {jazigo?.outroDado}</Typography>
                {/* Adicione mais informações do jazigo aqui */}
              </Stack>
            )}

            <img src={imagemCachorro} alt="Imagem do Animal" width={200} />

            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary" onClick={() => { navigate(`/AgendarExumacao`) }}>
                Agendar exumação
              </Button>
              <Button variant="contained" color="secondary" onClick={() => { navigate(`/PersonalizarJazigo`) }}>
                Personalizar Jazigo
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default DetalhesJazigo;