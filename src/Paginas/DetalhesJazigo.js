import React from 'react';
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
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

const DetalhesJazigo = () => {
    const animal = {
        nome: 'Vasco',
        nascimento: '12/05/2010',
        especie: 'Cachorro',
        proprietario: 'Jorge Salgado',
        endereco: 'A11',
        ultimaVisita: '27/04/2023',
        dataEnterro: '20/04/2023',
        planoContratado: 'Gold',
        mensagemLapide: 'Foi um cachorro exemplar, ganhou do flamengo apenas nos seus sonhos e nunca deixou de ser o segundo ser mais amado na minha vida',
        imagemAnimal: imagemCachorro,
    };

    const navigate = useNavigate();
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <NavBar page={1} isLoggedIn={true} />
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card>
                    <Box p={2} textAlign="center">
                        <Typography variant="h5" component="h1" gutterBottom>
                            Detalhes do Jazigo
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Nome: {animal.nome}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Nascimento: {animal.nascimento}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Espécie: {animal.especie}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Proprietário: {animal.proprietario}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Endereço: {animal.endereco}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Última Visita: {animal.ultimaVisita}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Data de Enterro: {animal.dataEnterro}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Plano Contratado: {animal.planoContratado}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Mensagem na Lápide: {animal.mensagemLapide}
                        </Typography>
                        <img src={animal.imagemAnimal} alt="Imagem do Animal" width={200} />
                        <Box mt={2}>
                            <Button variant="contained" color="primary" onClick={() => { navigate('/AgendarExumacao') }}>
                                Agendar exumação
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => { navigate('/PersonalizarJazigo') }}>
                                Personalizar Jazigo
                            </Button>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default DetalhesJazigo;