import React from 'react';
import { Box, Button, Container, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { useNavigate } from 'react-router-dom';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function RelatorioSelecao() {
    const navigate = useNavigate();

    const handleRelatorioInadimplente = () => {
        navigate('/RelatorioInadimplente');
    };

    const handleRelatorioJazigos = () => {
        navigate('/VisualizarJazigos');
    };

    const handleVisualizarEnterros = () => {
        navigate('/VisualizarEnterros');
    };

    const handleVisualizarExumacoes = () => {
        navigate('/VisualizarExumacoes');
    };

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <NavBar isLoggedIn={true} />
            <Titulo texto="Selecione um Relatório" mW="md" />
            <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" component="h2" gutterBottom> Por favor, escolha o relatório que deseja visualizar: </Typography>
                    <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" color="primary" onClick={handleRelatorioInadimplente} sx={{ marginRight: 2 }}> Relatório de Inadimplentes </Button>
                        <Button variant="contained" color="primary" onClick={handleRelatorioJazigos} sx={{ marginRight: 2 }}> Relatório de Jazigos </Button>
                        <Button variant="contained" color="primary" onClick={handleVisualizarEnterros} sx={{ marginRight: 2 }}> Relatório de Enterros </Button>
                        <Button variant="contained" color="primary" onClick={handleVisualizarExumacoes}> Relatório de Exumações </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default RelatorioSelecao;