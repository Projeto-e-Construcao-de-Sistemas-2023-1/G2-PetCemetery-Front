import { Divider, Grid, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ServicoDisplay from '../components/ServicoDisplay';
import Titulo from '../components/Titulo';
import { exibirServicos } from '../components/api';
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
        console.log(response);

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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
              <ServicoDisplay nomeServico="Compra" precoServico={servicos.precoCompra} />
              <ServicoDisplay nomeServico="Aluguel" precoServico={servicos.precoAluguel} />
              <ServicoDisplay nomeServico="Enterro" precoServico={servicos.precoEnterro} />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
              <ServicoDisplay nomeServico="BASIC" precoServico={servicos.precoBasic} />
              <ServicoDisplay nomeServico="SILVER" precoServico={servicos.precoSilver} />
              <ServicoDisplay nomeServico="GOLD" precoServico={servicos.precoGold} />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
              <ServicoDisplay nomeServico="Manutencao" precoServico={servicos.precoManutencao} />
              <ServicoDisplay nomeServico="Exumacao" precoServico={servicos.precoExumacao} />
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="h6" color="error" align='center'>{errMsg}</Typography>
      </Container>
    </ThemeProvider >
  );
}

export default AlterarValorPlanos;
