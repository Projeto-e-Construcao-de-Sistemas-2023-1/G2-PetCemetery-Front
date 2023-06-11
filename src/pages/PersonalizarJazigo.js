import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import '../Styles/detalhes-jazigo.css';
import NavBar from '../components/NavBar';
import imagemCachorro from '../images/cachorro-vasco.jpg';
import { getUrlParams } from '../utils/utils';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

const PersonalizarJazigo = () => {
    const cpf = getsessionStorage.getItem('cpf');
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <NavBar isLoggedIn={true} cpf={cpf} />
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
