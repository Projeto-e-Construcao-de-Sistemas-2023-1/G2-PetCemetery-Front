import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import { format } from "date-fns";
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/agendar-reuniao.css';
import ModalPadrao from '../components/ModalPadrao';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AgendarReuniao() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const cpf = searchParams.get('cpf');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAssunto, setSelectedAssunto] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const handleHome = () => {
    navigate(`/Home?cpf=${cpf}`);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleAgendar = () => {
    setModalOpen(true);
  };

  const handleDateChange = (event) => { setSelectedDate(format(event.$d, "yyyy-MM-dd")); console.log(selectedDate); };
  const handleTimeChange = (event) => { setSelectedTime(event.target.value); };
  const handleAssuntoChange = (event) => { setSelectedAssunto(event.target.value); };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Agendar Reunião" mW="sm" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack spacing={2} direction="column" divider={<Divider orientation="horizontal" flexItem />}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Typography variant="h5" align='center'>Escolha a data da reunião</Typography>
            <DatePicker onChange={handleDateChange} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Typography variant="h5" align='center'>Lista de horários disponíveis</Typography>
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={selectedTime} onChange={handleTimeChange}>
                <MenuItem value="7">7:00</MenuItem>
                <MenuItem value="8">8:00</MenuItem>
                <MenuItem value="9">9:00</MenuItem>
                <MenuItem value="10">10:00</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Typography variant="h5" align='center'>Assuntos</Typography>
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select value={selectedAssunto} onChange={handleAssuntoChange}>
                <MenuItem value="limpeza">Limpeza</MenuItem>
                <MenuItem value="iluminacao">Iluminação</MenuItem>
                <MenuItem value="seguranca">Segurança</MenuItem>
                <MenuItem value="dividas">Dívidas</MenuItem>
                <MenuItem value="outros">Outros</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" color='secondary' onClick={() => { handleAgendar(); }}>Agendar</Button>
        </Stack>
        <ModalPadrao title="Agendamento realizado com sucesso" open={modalOpen} onClose={() => setModalOpen(true)} bt1Text="Home" bt1Href={handleHome} bt2Text="Logout" bt2Href={handleLogout} />
      </Container>

    </ThemeProvider >
  );
}

export default AgendarReuniao;