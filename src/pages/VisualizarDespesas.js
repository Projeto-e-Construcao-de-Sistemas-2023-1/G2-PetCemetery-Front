import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button, Divider, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/visualizar-despesas.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function VisualizarDespesas() {
  const navigate = useNavigate();
  const cpf = sessionStorage.getItem('cpf');

  const handleButtonClick = () => {
    navigate(`/ConfirmarCompra?tipocompra=despesas`);
    //TODO na confirmar compra puxar as despesas por cpf qd receber despesas como tipocompra
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Suas despesas" mW="sm" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={1} style={{ height: '100%', textAlign: 'center', padding: 20 }}>
              <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4">Todas as despesas</Typography>
                <Divider orientation="horizontal" flexItem sx={{ margin: 1 }} />
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 2 }}>
                  {[1, 2, 3].map((value) => (
                    <ListItem key={value} secondaryAction={<IconButton aria-label="comment"><AttachMoneyIcon /></IconButton>}>
                      <ListItemText primary={`Despesa ${value}`} />
                    </ListItem>
                  ))}
                </List>
              </Container>
            </Paper>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Divider orientation="vertical" style={{ height: '100%' }} />
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1} style={{ height: '100%', textAlign: 'center', padding: 20 }}>
              <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4">Despesas atuais</Typography>
                <Divider orientation="horizontal" flexItem sx={{ margin: 1 }} />

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 2 }}>
                  {[1, 2, 3].map((value) => (
                    <ListItem key={value} secondaryAction={<IconButton aria-label="comment"><AttachMoneyIcon /></IconButton>}>
                      <ListItemText primary={`Despesa ${value}`} />
                    </ListItem>
                  ))}
                </List>

                <Button variant="contained" color="success" onClick={handleButtonClick}>Escolher método de pagamento</Button>

              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </ThemeProvider >
  );
}

export default VisualizarDespesas;