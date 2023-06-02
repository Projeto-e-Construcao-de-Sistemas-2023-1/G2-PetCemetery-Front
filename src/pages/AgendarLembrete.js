import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalPadrao from '../components/ModalPadrao';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import '../weather-icons/css/weather-icons.min.css';
import axios from 'axios';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AgendarLembrete() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const cpf = searchParams.get('cpf');

  const apiKey = 'fa23f7952a0a6b8ec53d68cc173b3982';
  const lat = -22.954925987607037;
  const lon = -43.168870628095085;

  const url = `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  console.log(url);

  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [clima, setClima] = useState('Ensolarado');

  const handleClima = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      //setClima(response.data.main.temp);
    });
    console.log(response.data);

    //data.list.weather
  }

  const handleHome = () => {
    navigate(`/Home?cpf=${cpf}`);
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
            <DatePicker onChange={handleClima} />
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