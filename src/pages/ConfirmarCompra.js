import { Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css';
import Carrinho, { Servico } from '../components/Carrinho';
import ModalPadrao from '../components/ModalPadrao';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { getInformacoesCarrinho, finalizarCompra, finalizarAluguel } from '../components/api';
import { getUrlParams, isJSON } from '../utils/utils';
const mainTheme = createTheme({ palette: { mode: 'dark' } });

function ConfirmarCompra() {
  const cpf = sessionStorage.getItem('cpf');
  const jazigoId = getUrlParams('id');
  const tipo = getUrlParams('tipo');
  const ornamento = getUrlParams('ornamento');

  const [modalOpen, setModalOpen] = useState(false);
  const [resp, setResp] = useState([]);

  const handleHome = () => { navigate('/Home'); };

  const handleLogout = () => { navigate('/'); };

  const navigate = useNavigate();

  const handleButtonClick = () => { setModalOpen(true); };


  const handleAddToCart = async (e) => {
    var resp;
    if (tipo == "compra") {
      resp = await finalizarCompra(cpf, jazigoId, ornamento);
    }
    else if (tipo == "aluguel") {
      resp = await finalizarAluguel(cpf, jazigoId, ornamento);
    }
    console.log(resp);

    //getInfoCarrinho();
  };

  useEffect(() => {
    const getInfoCarrinho = async () => {
      try {
        const data = await getInformacoesCarrinho(cpf);
        setResp(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getInfoCarrinho();
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Confirmar Compra" mW="sm" />

      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Paper elevation={1} style={{ height: '100%', textAlign: 'center', padding: 20 }}>
              <Carrinho cartServicos={resp} />
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
                <Stack spacing={2} direction="column" divider={<Divider orientation="horizontal" flexItem />}>
                  <Button variant="contained" color="success" onClick={handleButtonClick}>Cartão de Crédito</Button>
                  <Button variant="contained" color="success" onClick={handleButtonClick}>Cartão de Débito</Button>
                  <Button variant="contained" color="success" onClick={handleButtonClick}>Paypal</Button>
                </Stack>
              </Container>
            </Paper>
          </Grid>
        </Grid>
        <ModalPadrao title="Pagamento realizado com sucesso" open={modalOpen} onClose={() => setModalOpen(true)} bt1Text="Home" bt1Href={handleHome} bt2Text="Logout" bt2Href={handleLogout} />
      </Container>
    </ThemeProvider>
  );
}

export default ConfirmarCompra;
