import { Button, Divider, FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { alterarValorServico, exibirServicos } from '../components/api';
import Titulo from '../components/Titulo';
import ServicoDisplay from '../components/ServicoDisplay';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AlterarValorPlanos() {
  const [errMsg, setErrMsg] = useState("");
  const [servicos, setServicos] = useState(
    {
      precoCompra: '',
      precoAluguel: '',
      precoBasic: '',
      precoSilver: '',
      precoGold: '',
      precoEnterro: '',
      precoManutencao: '',
      precoExumacao: ''
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await exibirServicos();

        const servicoResponse = {
          precoCompra: response.precoCompra,
          precoAluguel: response.precoAluguel,
          precoBasic: response.precoBasic,
          precoSilver: response.precoSilver,
          precoGold: response.precoGold,
          precoEnterro: response.precoEnterro,
          precoManutencao: response.precoManutencao,
          precoExumacao: response.precoExumacao
        }

        setServicos(servicoResponse);
      } catch (error) {
        setErrMsg("Erro ao requisitar o valor serviços");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isAdmin={true} />
      <Titulo texto="Alterar valor dos serviços" mW="md" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack spacing={2} direction='column' divider={<Divider orientation="horizontal" flexItem />}>

          <ServicoDisplay nomeServico="Compra" precoServico={servicos.precoCompra} />
          <ServicoDisplay nomeServico="Aluguel" precoServico={servicos.precoAluguel} />
          <ServicoDisplay nomeServico="BASIC" precoServico={servicos.precoBasic} />
          <ServicoDisplay nomeServico="SILVER" precoServico={servicos.precoSilver} />
          <ServicoDisplay nomeServico="GOLD" precoServico={servicos.precoGold} />
          <ServicoDisplay nomeServico="Enterro" precoServico={servicos.precoEnterro} />
          <ServicoDisplay nomeServico="Manutencao" precoServico={servicos.precoManutencao} />
          <ServicoDisplay nomeServico="Exumacao" precoServico={servicos.precoExumacao} />

          <Button variant="contained" onClick={handleAlteraValor}>Alterar valor do serviço</Button>
          <Typography variant="h6" color="error" align='center'>{errMsg}</Typography>

        </Stack>
      </Container>
    </ThemeProvider >
  );
}

export default AlterarValorPlanos;
