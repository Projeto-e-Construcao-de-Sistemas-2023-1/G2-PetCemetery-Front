import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { format } from "date-fns";
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalPadrao from '../components/ModalPadrao';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import '../weather-icons/css/weather-icons.min.css';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AgendarLembrete() {
  const navigate = useNavigate();
  const cpf = sessionStorage.getItem('cpf');

  const apiKey = '54774bb84681436793d142324230806';
  const city = 'Rio de Janeiro';
  const days = 10;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`;
  console.log(url);

  const [selectedDate, setSelectedDate] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [clima, setClima] = useState('Ensolarado');

  const handleClima = () => {
    axios.get(url).then((response) => {
      setClima(response.data.forecast.forecastday[0].day.condition.text);
      console.log(clima);
    });

    //const weatherCondition = data.list[0].weather[0].main;
    //TODO finalizar clima
  }

  const handleHome = () => {
    navigate(`/Home`);
  };

  const handleDateChange = (event) => {
    setSelectedDate(format(event.$d, "yyyy-MM-dd"));
    console.log(selectedDate);
    handleClima();
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleAgendar = () => {
    setModalOpen(true);
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
            <DatePicker onChange={handleDateChange} />
            <Typography variant="h4" align='center'>{"Clima " + clima}</Typography>
            <Box> <i className="wi wi-day-sunny" /> </Box>
          </Box>
          <Button variant="contained" color='secondary' onClick={() => { handleAgendar(); }}>Agendar</Button>
        </Stack>
        <ModalPadrao title="Agendamento realizado com sucesso" open={modalOpen} onClose={() => setModalOpen(true)} bt1Text="Home" bt1Href={handleHome} bt2Text="Logout" bt2Href={handleLogout} />
      </Container>

    </ThemeProvider >
  );
}

export default AgendarLembrete;