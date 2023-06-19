import { Button, Grid, Typography, TextField, FormControl, MenuItem, Select } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { AlterarValorServico } from '../components/api';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AlterarValorPlanos() {

  const [servico, setServico] = useState('');
  const [valor, setValor] = useState('');

  const handleAlteraValor = async () => {
    console.log('Opcao selecionada:', servico);
    console.log('Valor:', valor);

    await AlterarValorServico(servico, valor).catch((error) => {
      console.log("Erro:", error);
    });

    
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={1} isLoggedIn={true} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4, }}>
        <Typography variant="h2" align='center'>Painel do Administrador</Typography>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, md: 8 }} sx={{ margin: 2, textAlign: 'center' }}>
          <Grid item xs={6}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Grid container spacing={4} direction="column" alignItems="center">
                <Grid item>
                <FormControl variant="outlined">
                  <Select
                    value={servico}
                    onChange={(event) => setServico(event.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Selecione um plano' }}>
                    <MenuItem value="" disabled>
                      Selecione um serviço
                    </MenuItem>
                    <MenuItem value="BASIC">Basic</MenuItem>
                    <MenuItem value="SILVER">Silver</MenuItem>
                    <MenuItem value="GOLD">Gold</MenuItem>
                    <MenuItem value="Exumacao">Exumação</MenuItem>
                    <MenuItem value="Enterro">Enterro</MenuItem>
                    <MenuItem value="Manutencao">Manutencao</MenuItem>
                    <MenuItem value="Aluguel">Aluguel</MenuItem>
                    <MenuItem value="Compra">Compra</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    label="Digite o novo valor"
                    placeholder="Valor em R$"
                    variant="outlined"
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={ handleAlteraValor }>Alterar valor do serviço</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider >
  );
}

export default AlterarValorPlanos;
