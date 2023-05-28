import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css';
import NavBar from '../components/NavBar';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Home() {
  const cpf = 12321;
  //mandar requisicao pro back, mandar o cpf e o back vai retornar os dados relevantes à pagina

  //CPF: {cpf}, pagina: home

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={1} isLoggedIn={true} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Grid container rowSpacing={2} columnSpacing={2} sx={{ margin: 2 }}>
          <Grid item xs={6}>
            <Grid item>
              <Typography variant="h2" align='center'>Meus Jazigos</Typography>
            </Grid>
            <Grid container spacing={2} direction="column" alignItems="left">
              <Grid item>
                <Button variant="outlined" onClick={() => { navigate('/DetalhesJazigo') }}>Vasco      15/04/2023</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Jazigo Vazio</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid item sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
              <NotificationsActiveIcon />
            </Grid>
            <Grid container spacing={2} direction="column" alignItems="right">
              <Grid item>
                <Button variant="contained" onClick={() => { navigate('/AdquirirJazigo') }}>Adquirir Jazigo</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate('/VisualizarDespesas') }}>Visualizar Despesas</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate('/AgendarLembrete') }}>Agendar Lembrete de Visitas</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate('/AgendarReuniao') }}>Agendar Reunião</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate('/RealizarDoacoes') }}>Realizar Doações</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider >
  );
}

export default Home;