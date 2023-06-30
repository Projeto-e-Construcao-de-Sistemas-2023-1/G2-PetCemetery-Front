import React, { useEffect, useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button, Checkbox, Container, CssBaseline, Divider, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { visualizarDespesas } from '../components/api'; // Make sure the path is correct

const mainTheme = createTheme({ palette: { mode: 'dark' } });

function VisualizarDespesas() {
  const navigate = useNavigate();
  const cpf = sessionStorage.getItem('cpf');
  const [despesasPagas, setDespesasPagas] = useState([]);
  const [despesasNaoPagas, setDespesasNaoPagas] = useState([]);
  const [selectedDespesas, setSelectedDespesas] = useState([]);

  useEffect(() => {
    const fetchDespesas = async () => {
      const despesas = await visualizarDespesas(cpf);
      console.log(despesas);

      setDespesasPagas(despesas.filter((despesa) => despesa.ultimoPagamento !== null));
      setDespesasNaoPagas(despesas.filter((despesa) => despesa.ultimoPagamento === null));
    };

    fetchDespesas();
  }, [cpf]);

  const handleToggle = (index) => {
    const currentIndex = selectedDespesas.indexOf(index);
    const newSelectedDespesas = [...selectedDespesas];

    if (currentIndex === -1) {
      newSelectedDespesas.push(index);
    } else {
      newSelectedDespesas.splice(currentIndex, 1);
    }

    setSelectedDespesas(newSelectedDespesas);
  };

  const handleDataUltimoPagamento = (despesa) => {
    if (despesa.ultimoPagamento === null) {
      return '--/--/----';
    } else {
      const data = new Date(despesa.ultimoPagamento);
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();

      return `${dia}/${mes}/${ano}`;
    }
  }

  const handleDataVencimento = (despesa) => {
    if (despesa.dataVencimento === null) {
      return '--/--/----';
    } else {
      const data = new Date(despesa.ultimoPagamento);
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();

      return `${dia}/${mes}/${ano}`;
    }
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Suas despesas" mW="sm" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Despesas Pagas
              </Typography>
              <List sx={{ width: '100%', maxWidth: '800px', bgcolor: 'background.paper' }}>
                {despesasPagas.map((despesaPaga, indexPaga) => {
                  return (
                    <ListItem key={indexPaga} role={undefined}>
                      <ListItemText
                        primary={`Despesa ${indexPaga + 1}`}
                        secondary={`Valor: ${despesaPaga.valor} | Servico: ${despesaPaga.tipoServico} | Ultimo Pagamento: ${ handleDataUltimoPagamento(despesaPaga) } | Data Vencimento: ${ handleDataVencimento(despesaPaga) }`}
                        secondaryTypographyProps={{ noWrap: false }}
                      />  
                    </ListItem>
                  );
                })}
              </List>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Despesas Não Pagas
              </Typography>
              <List sx={{ width: '100%', maxWidth: '800px', bgcolor: 'background.paper' }}>
                {despesasNaoPagas.map((despesaNaoPaga, indexNaoPaga) => {
                  const labelId = `checkbox-list-label-${indexNaoPaga}`;
                  return (
                    <ListItem key={indexNaoPaga} role={undefined} dense button onClick={() => handleToggle(indexNaoPaga)}>
                      <Checkbox edge="start" checked={selectedDespesas.indexOf(indexNaoPaga) !== -1} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
                      <ListItemText
                        primary={`Despesa ${indexNaoPaga + 1}`}
                        secondary={`Valor: ${despesaNaoPaga.valor} | Servico: ${despesaNaoPaga.tipoServico} | Ultimo Pagamento: ${ handleDataUltimoPagamento(despesaNaoPaga) } | Data Vencimento: ${ handleDataVencimento(despesaNaoPaga) }`}
                        secondaryTypographyProps={{ noWrap: false }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Container>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={() => {/* Handle pay action */ }}>Pagar selecionados</Button>
      </Container>
    </ThemeProvider>
  );
}

export default VisualizarDespesas;
