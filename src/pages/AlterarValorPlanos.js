import { Button, Grid, Typography, TextField, FormControl, MenuItem, Select } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AlterarValorPlanos() {

const [opcaoSelecionada, setOpcaoSelecionada] = React.useState('');

const handleOptionChange = (event) => {
  setOpcaoSelecionada(event.target.value);
};


  const navigate = useNavigate();
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
                    value={opcaoSelecionada}
                    onChange={handleOptionChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Selecione um plano' }}>
                    <MenuItem value="" disabled>
                      Selecione um plano
                    </MenuItem>
                    <MenuItem value="Bronze">Bronze</MenuItem>
                    <MenuItem value="Silver">Silver</MenuItem>
                    <MenuItem value="Gold">Gold</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid item>
                  <TextField label="Digite o novo valor" placeholder="Valor em R$" variant="outlined"/>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => { navigate(`/AlterarHorarioFuncionamento`) }}>Alterar Valor do plano</Button>
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
