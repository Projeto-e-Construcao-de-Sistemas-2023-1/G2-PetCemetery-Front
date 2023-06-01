import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css';
import NavBar from '../components/NavBar';
import { getUrlParams } from '../utils/utils';
import Carrinho from '../components/Carrinho';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function ConfirmarCompra() {
  const cpf = getUrlParams('cpf');
  const id = getUrlParams('id');

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={1} isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Confirmar Compra" mW="sm" />

      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Paper elevation={1} style={{ height: '100%', textAlign: 'center', padding: 20 }}>
              <Carrinho />
            </Paper>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Divider orientation="vertical" style={{ height: '100%' }} />
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={1} style={{ height: '100%', textAlign: 'center', padding: 20 }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4">Métodos de pagamento</Typography>
              <Divider orientation="horizontal" flexItem sx={{ margin: 1 }} />

              <Stack spacing={2} direction='column' divider={<Divider orientation="horizontal" flexItem />}>
                <Button variant="contained" color="success" href=''>Cartão de Crédito</Button>
                <Button variant="contained" color="success" href=''>Cartão de Débito</Button>
                <Button variant="contained" color="success" href=''>Paypal</Button>
              </Stack>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider >
  );
}

export default ConfirmarCompra;