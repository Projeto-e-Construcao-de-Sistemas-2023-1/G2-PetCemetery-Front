import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import { format } from "date-fns";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalOk from '../components/ModalOk';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { agendarExumacao } from '../components/api'; // Importando a função
import { getUrlParams } from '../utils/utils';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });
const id = getUrlParams('id');

function AgendarExumacao() {
  const navigate = useNavigate();
  const cpf = sessionStorage.getItem('cpf');
  

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleHome = () => {
    navigate(`/Home`);
  };

  const handleAgendar = async () => { 
    const exumacao = {
        data: selectedDate,
        horario: selectedTime
    };

    try {
        const response = await agendarExumacao(cpf, id, exumacao.data, exumacao.horario);
        console.log(response);
        if (response === "OK;") {
            setModalOpen(true);
        } else {
            console.error('Erro ao agendar exumação:', response);
        }
    } catch (error) {
        console.error('Erro ao agendar exumação:', error);
    }
  };

  const handleDateChange = (event) => { setSelectedDate(format(event.$d, "yyyy-MM-dd")); };
  const handleTimeChange = (event) => { setSelectedTime(event.target.value + ""); };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Agendar Exumação" mW="sm" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack spacing={2} direction="column" divider={<Divider orientation="horizontal" flexItem />}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Typography variant="h5" align='center'>Escolha a data da exumação</Typography>
            <DatePicker onChange={handleDateChange} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Typography variant="h5" align='center'>Escolha o horário da exumação</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Horário</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedTime}
                label="Horário"
                onChange={handleTimeChange}
              >
                <MenuItem value={'08:00'}>08:00</MenuItem>
                <MenuItem value={'10:00'}>10:00</MenuItem>
                <MenuItem value={'12:00'}>12:00</MenuItem>
                <MenuItem value={'14:00'}>14:00</MenuItem>
                <MenuItem value={'16:00'}>16:00</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button fullWidth variant="contained" color="primary" onClick={handleAgendar}>Agendar Exumação</Button>
        </Stack>
      </Container>
      <ModalOk title="Exumação realizada com sucesso" open={modalOpen} onClose={() => setModalOpen(true)} bt1Text="OK" bt1Href={handleHome}/>
    </ThemeProvider>
  );
}

export default AgendarExumacao;