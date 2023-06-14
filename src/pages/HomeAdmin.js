import { Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css';
import NavBar from '../components/NavBar';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function HomeAdmin() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={1} isLoggedIn={true} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4, }}>
        <Typography variant="h2" align='center'>Painel do Administrador</Typography>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, md: 8 }} sx={{ margin: 2, textAlign: 'center' }}>
          <Grid item xs={6}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
              <Grid container spacing={4} direction="column" alignItems="center">
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/AlterarHorarioFuncionamento`) }}>Alterar Horário de Funcionamento</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/Relatorios`) }}>Relatórios</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/DetalharJazigo`) }}>Detalhar Jazigo</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/VisualizarReunioes`) }}>Visualizar Reuniões</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
              <Grid container spacing={4} direction="column" alignItems="center">
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/ClientesInadimplentes`) }}>Clientes Inadimplentes</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/ManterServicos`) }}>Manter Serviços</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/AdquirirJazigo`) }}>Visualizar Mapa de Jazigos</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider >
  );
}

export default HomeAdmin;
