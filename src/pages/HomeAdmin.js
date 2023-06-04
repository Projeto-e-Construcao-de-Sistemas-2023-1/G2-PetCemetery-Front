import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getUrlParams } from '../utils/utils';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function HomeAdmin() {
  const cpf = getUrlParams('cpf');
  const navigate = useNavigate();
  
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={1} isLoggedIn={true} cpf={cpf} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Grid container rowSpacing={2} columnSpacing={2} sx={{ margin: 2 }}>
          <Grid item xs={6}>
            <Grid item>
              <Typography variant="h2" align='center'>Meus Jazigos admin</Typography>
            </Grid>
            <Grid container spacing={2} direction="column" alignItems="left">
              <Grid item>
                <Button variant="outlined" onClick={() => { navigate(`/DetalhesJazigo?cpf=${cpf}`) }}>Vasco 15/04/2023</Button>
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
                <Button variant="contained" onClick={() => { navigate(`/AdquirirJazigo?cpf=${cpf}`) }}>Adquirir Jazigo</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/VisualizarDespesas?cpf=${cpf}`) }}>Visualizar Despesas</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/AgendarLembrete?cpf=${cpf}`) }}>Agendar Lembrete de Visitas</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/AgendarReuniao?cpf=${cpf}`) }}>Agendar Reunião</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => { navigate(`/RealizarDoacoes?cpf=${cpf}`) }}>Realizar Doações</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider >
  );
}

export default HomeAdmin;