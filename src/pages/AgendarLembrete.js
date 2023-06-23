import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { format } from "date-fns";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalOk from '../components/ModalOk';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { calcDiff } from '../utils/utils';
//import '../weather-icons/css/weather-icons.min.css';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AgendarLembrete() {
  const navigate = useNavigate();
  const cpf = sessionStorage.getItem('cpf');

  //TODO URGENTE CARALHO FAZ ESSA PORRA
  const apiKey = '54774bb84681436793d142324230806';
  const city = 'Rio de Janeiro';
  const days = 3;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no&lang=pt`;
  console.log(url);

  const [selectedDate, setSelectedDate] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [clima, setClima] = useState("");
  const [valorData, setValorData] = useState();
  const [icone, setIcone] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleClima = async () => {
    var clima;

    await axios.get(url).then((response) => {
      clima = response.data.forecast;
      
    });

    const diff = calcDiff(selectedDate);

    if (diff < 0) {
      setErrMsg("Selecione uma data futura");
    }
    else if (diff > 3) {
      setErrMsg("Previsão do tempo indisponível para a data selecionada");
    }
    else {
      setClima(clima.forecastday[diff].day.condition.text);
      setIcone(clima.forecastday[diff].day.condition.icon);
    }
  }

  const handleHome = () => {
    navigate(`/Home`);
  };

  const handleDateChange = (event) => {
    var dataSelecionada = format(event.$d, "yyyy-MM-dd");

    const diff = calcDiff(dataSelecionada);

    if (diff >= 0) {
      setSelectedDate(dataSelecionada);
      setValorData(event.$d);

      console.log(selectedDate);
      handleClima();
    }
    else {
      setErrMsg("Selecione uma data futura");
    }
  };

  const handleAgendar = () => {
    if (selectedDate != {}) {
      setModalOpen(true);
    }
    else {
      setErrMsg("Selecione uma data válida")
    }
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Agendar lembrete de visita" mW="md" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack spacing={2} direction="column" divider={<Divider orientation="horizontal" flexItem />}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Typography variant="h5" align='center'>Escolha a data da sua visita</Typography>
            <DatePicker value={valorData} onChange={handleDateChange} />
            <Box> <img src={icone} /> </Box>
            <Typography variant="h4" align='center'>{clima}</Typography>
          </Box>
          <Button variant="contained" color='secondary' onClick={() => { handleAgendar(); }}>Agendar</Button>
        </Stack>
        <ModalOk title="Agendamento realizado com sucesso" open={modalOpen} onClose={() => setModalOpen(true)} bt1Text="OK" bt1Href={handleHome} />
        <Typography variant="h6" color="error" align='center'>{errMsg}</Typography>
      </Container>
    </ThemeProvider >
  );
}

export default AgendarLembrete;