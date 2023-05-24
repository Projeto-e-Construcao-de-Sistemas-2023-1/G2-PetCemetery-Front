import React from 'react';
import '../Styles/detalhes-jazigo.css';
import imagemCachorro from '../Imagens/cachorro-vasco.jpg';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Box, Typography, Button, Card, CardContent, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

const PersonalizarJazigo = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <NavBar isLoggedIn={true} />
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h1" align="center">
                            Detalhes do Jazigo
                        </Typography>
                        <Typography variant="h6" component="h2" align="center">
                            Plano: Gold
                        </Typography>
                        <Box display="flex" alignItems="center" marginTop={2}>
                            <Box flexGrow={1}>
                                <Typography variant="subtitle1">Imagem</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" marginTop={2}>
                            <Box flexBasis="50%">
                                <img src={imagemCachorro} alt="Imagem do Jazigo" width="40%" />
                                <Button variant="outlined">
                                    Fazer upload da foto
                                </Button>
                            </Box>
                            <Box flexBasis="50%" pl={2}>
                                <Typography variant="subtitle1">Mensagem na lápide</Typography>
                                <TextField
                                    multiline
                                    rows={4}
                                    fullWidth
                                    placeholder="Digite a mensagem da lápide"
                                />
                                <Typography variant="caption" color="textSecondary">
                                    Limite de 80 caracteres
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center" marginTop={2}>
                            <Button variant="contained" color="primary">
                                Confirmar
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default PersonalizarJazigo;
