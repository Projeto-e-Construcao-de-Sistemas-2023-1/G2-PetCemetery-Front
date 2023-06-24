import { Box, Button, Divider, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { format } from "date-fns";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/agendar-reuniao.css';
import ModalOk from '../components/ModalOk';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { alterarHorarios, getHorarios } from '../components/api';
import DiaFuncionamento from '../components/DiaFuncionamento';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AlterarHorarioFuncionamento() {
  const navigate = useNavigate();
  const cpf = sessionStorage.getItem('cpf');

  const [horarioFuncionamento, setHorarioFuncionamento] = useState({
    segunda: {
      abertura: '',
      fechamento: '',
      fechado: false
    },
    terca: {
      abertura: '',
      fechamento: '',
      fechado: false
    },
    quarta: {
      abertura: '',
      fechamento: '',
      fechado: false
    },
    quinta: {
      abertura: '',
      fechamento: '',
      fechado: false
    },
    sexta: {
      abertura: '',
      fechamento: '',
      fechado: true
    },
    sabado: {
      abertura: '',
      fechamento: '',
      fechado: false
    },
    domingo: {
      abertura: '',
      fechamento: '',
      fechado: true
    },
    feriado: {
      abertura: '',
      fechamento: '',
      fechado: true
    }
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleHome = () => {
    navigate(`/HomeAdmin`);
  };

  const handleSalvar = async () => {
    setModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHorarios();
        const horarioFuncionamentoData = {};

        response.forEach(item => {
          horarioFuncionamentoData[item.diaSemana] = {
            abertura: item.abertura,
            fechamento: item.fechamento,
            fechado: item.fechado
          };
        });

        setHorarioFuncionamento(horarioFuncionamentoData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Alterar horário de funcionamento" mW="lg" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack spacing={2} direction="column" divider={<Divider orientation="horizontal" flexItem />}>
          <Box spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
            <DiaFuncionamento dia="segunda" horarioFuncionamento={horarioFuncionamento.segunda} />
            <DiaFuncionamento dia="terca" horarioFuncionamento={horarioFuncionamento.terca} />
            <DiaFuncionamento dia="quarta" horarioFuncionamento={horarioFuncionamento.quarta} />
            <DiaFuncionamento dia="quinta" horarioFuncionamento={horarioFuncionamento.quinta} />
            <DiaFuncionamento dia="sexta" horarioFuncionamento={horarioFuncionamento.sexta} />
            <DiaFuncionamento dia="sabado" horarioFuncionamento={horarioFuncionamento.sabado} />
            <DiaFuncionamento dia="domingo" horarioFuncionamento={horarioFuncionamento.domingo} />
            <DiaFuncionamento dia="feriado" horarioFuncionamento={horarioFuncionamento.feriado} />
          </Box>

          <Button variant="contained" color='secondary' onClick={handleSalvar}>Salvar e notificar clientes</Button>
        </Stack>
        <ModalOk title="Agendamento realizado com sucesso" open={modalOpen} onClose={() => setModalOpen(true)} bt1Text="OK" bt1Href={handleHome} />
      </Container>
    </ThemeProvider >
  );
}

export default AlterarHorarioFuncionamento;
