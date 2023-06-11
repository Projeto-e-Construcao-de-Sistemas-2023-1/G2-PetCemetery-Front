import { Box, Button, Card, Stack, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/detalhes-jazigo.css';
import NavBar from '../components/NavBar';
import imagemCachorro from '../images/cachorro-vasco.jpg';
import { getUrlParams } from '../utils/utils';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

const DetalhesJazigo = () => {
    const cpf = sessionStorage.getItem('cpf');

    const animal = { //TODO: puxar do backend os dados do animal
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
            <NavBar isLoggedIn={true} cpf={cpf} />
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card>
                    <Box p={2} textAlign="center">
                        <Typography variant="h5" component="h1" gutterBottom>Detalhes do Jazigo</Typography>
                        <Stack direction="row" spacing={2} margin={2} justifyContent="center" divider={<Divider orientation="vertical" flexItem />}>
                            <Typography variant="body1">Nome: {animal.nome}</Typography>
                            <Typography variant="body1">Nascimento: {animal.nascimento}</Typography>
                            <Typography variant="body1">Espécie: {animal.especie}</Typography>
                            <Typography variant="body1">Proprietário: {animal.proprietario}</Typography>
                            <Typography variant="body1">Endereço: {animal.endereco}</Typography>
                            <Typography variant="body1">Última Visita: {animal.ultimaVisita}</Typography>
                            <Typography variant="body1">Data de Enterro: {animal.dataEnterro}</Typography>
                            <Typography variant="body1">Plano Contratado: {animal.planoContratado}</Typography>
                            <Typography variant="body1">Mensagem na Lápide: {animal.mensagemLapide}</Typography>
                        </Stack>

                        <img src={animal.imagemAnimal} alt="Imagem do Animal" width={200} />
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary" onClick={() => { navigate(`/AgendarExumacao`) }}>
                                Agendar exumação
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => { navigate(`/PersonalizarJazigo`) }}>
                                Personalizar Jazigo
                            </Button>
                        </Stack>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default DetalhesJazigo;