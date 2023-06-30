import React, { useEffect, useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button, Checkbox, Container, CssBaseline, Divider, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import '../Styles/visualizar-despesas.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { visualizarDespesas } from '../components/api'; // Make sure the path is correct

const mainTheme = createTheme({ palette: { mode: 'dark' } });

function VisualizarDespesas() {
  const navigate = useNavigate();
  const cpf = sessionStorage.getItem('cpf');
  const [despesas, setDespesas] = useState([]);
  const [selectedDespesas, setSelectedDespesas] = useState([]);

  useEffect(() => {
    const fetchDespesas = async () => {
      const data = await visualizarDespesas(cpf);
      setDespesas(data || []);
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

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Suas despesas" mW="sm" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={1} style={{ textAlign: 'center', padding: 20 }}>
              <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4">Todas as despesas</Typography>
                <Divider orientation="horizontal" flexItem sx={{ margin: 1 }} />
                <List sx={{ width: '100%', maxWidth: '800px', bgcolor: 'background.paper', margin: 2 }}>
                  {despesas.map((despesa, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    const formattedLastPaymentDate = new Date(despesa.ultimoPagamento).toLocaleDateString();
                    const formattedDueDate = new Date(despesa.dataVencimento).toLocaleDateString();
                    return (
                      <ListItem key={index} role={undefined} dense button onClick={() => handleToggle(index)}>
                        <Checkbox
                          edge="start"
                          checked={selectedDespesas.indexOf(index) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                        <Grid container alignItems="center">
                          <Grid item xs={10}>
                            <ListItemText
                              primary={`Despesa ${index + 1}`}
                              secondary={`Valor: ${despesa.valor} | Servico: ${despesa.tipoServico} | Ultimo Pagamento: ${formattedLastPaymentDate} | Data Vencimento: ${formattedDueDate}`}
                              secondaryTypographyProps={{ noWrap: true }}
                            />
                          </Grid>
                          <Grid item xs={2} container justifyContent="flex-end">
                            <IconButton aria-label="Despesa"><AttachMoneyIcon /></IconButton>
                          </Grid>
                        </Grid>
                      </ListItem>
                    );
                  })}
                </List>
                <Button variant="contained" color="primary" onClick={() => {/* Handle pay action */}}>Pagar selecionados</Button>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default VisualizarDespesas;
