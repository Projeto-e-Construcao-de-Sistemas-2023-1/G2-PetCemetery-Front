import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import ListaJazigos from '../components/ListaJazigos';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { getUrlParams } from '../utils/utils';
import { visualizarHistorico } from '../components/api';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Historico() {
    const id = getUrlParams('id');
    const [dadosJazigo, setDadosJazigo] = useState(
        {
            id_jazigo: "",
            nomePet: "",
            dataNascimentoPet: "",
            especiePet: "",
            nomeProprietario: "",
            dataEnterro: "",
            dataExumacao: ""
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                var data = await visualizarHistorico(id);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <NavBar isAdmin={true} />
            <Titulo texto="Histórico" />
            <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            </Container>
        </ThemeProvider>
    );
}

export default Historico;
