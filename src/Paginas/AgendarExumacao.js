import React, { useState } from 'react';
import '../Styles/detalhes-jazigo.css';
import imagemCachorro from '../Imagens/cachorro-vasco.jpg';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Stack, Button, Typography, Grid, Card, Box } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/lab';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

const AgendarExumacao = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const precoExumacao = 400.00;

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleContinuarPagamento = () => {
        // Lógica para continuar para o pagamento
        console.log('Continuar para o pagamento');
    };

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <NavBar page={1} isLoggedIn={true} />
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card>
                    <Box p={2} textAlign="center">
                        <Typography variant="h5" component="h1" gutterBottom>
                            Agendar Exumação
                        </Typography>
                        <DatePicker
                            label="Selecione a data"
                            value={selectedDate}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <Typography variant="body1" gutterBottom>
                            Preço: R$ {precoExumacao.toFixed(2)}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handleContinuarPagamento}>
                            Continuar para o pagamento
                        </Button>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default AgendarExumacao;