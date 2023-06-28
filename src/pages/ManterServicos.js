import { Button, Divider, FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { alterarValorServico } from '../components/api';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AlterarValorPlanos() {
  const [servico, setServico] = useState('');
  const [valor, setValor] = useState('');

  const handleAlteraValor = async () => {
    console.log('Opcao selecionada:', servico);
    console.log('Valor:', valor);

    await alterarValorServico(servico, valor).then((response) => {
      console.log("Resposta:", response);
      alert("Valor alterado com sucesso!");
    })
    .catch((error) => {
      console.log("Erro:", error);
    });
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={1} isLoggedIn={true} />
      <Titulo texto="Alterar valor dos serviços" mW="md" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack spacing={2} direction='column' divider={<Divider orientation="horizontal" flexItem />}>
          <FormControl variant="outlined">
            <Select value={servico} onChange={(event) => setServico(event.target.value)} displayEmpty inputProps={{ 'aria-label': 'Selecione um plano' }}>
              <MenuItem value="" disabled>Selecione um serviço</MenuItem>
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

          <TextField label="Digite o novo valor" placeholder="Valor em R$" variant="outlined" value={valor} onChange={(event) => setValor(event.target.value)} />
          <Button variant="contained" onClick={handleAlteraValor}>Alterar valor do serviço</Button>

        </Stack>
      </Container>
    </ThemeProvider >
  );
}

export default AlterarValorPlanos;
