import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getMeusJazigos } from '../components/api';

const mainTheme = createTheme({ palette: { mode: 'dark' } });

function Home() {
  const cpf = sessionStorage.getItem('cpf');
  const [jazigos, setJazigos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJazigos = async () => {
      try {
        const response = await getMeusJazigos(cpf);
        console.log("Response da API:", response); // Verifique a resposta da API aqui
        setJazigos(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJazigos();
  }, [cpf]);

  console.log("Estado de Jazigos:", jazigos); // Verifique o estado atualizado aqui

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={1} isLoggedIn={true} cpf={cpf} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container rowSpacing={2} columnSpacing={2} sx={{ margin: 2 }}>
          <Grid item xs={6}>
            <Grid item>
              <Typography variant="h2" align="center">Meus Jazigos</Typography>
            </Grid>
            <Grid container spacing={2} direction="column" alignItems="left">
              {jazigos.map((jazigo, index) => (
                <Grid item key={index}>
                  <Button
                    variant="outlined"
                    onClick={() => { navigate(`/DetalhesJazigo/${jazigo.id}`) }}
                  >
                    {jazigo.nomePet === "Vazio" ? `Jazigo ${jazigo.endereco}` : `${jazigo.nomePet} ${jazigo.dataEnterro}`}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid item sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Ícone ou conteúdo do lado direito */}
            </Grid>
            <Grid container spacing={2} direction="column" alignItems="right">
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/AdquirirJazigo`) }}>
                  Adquirir Jazigo
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/VisualizarDespesas`) }}>
                  Visualizar Despesas
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/AgendarLembrete`) }}>
                  Agendar Lembrete de Visitas
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/AgendarReuniao`) }}>
                  Agendar Reunião
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/RealizarDoacoes`) }}>
                  Realizar Doações
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Home;