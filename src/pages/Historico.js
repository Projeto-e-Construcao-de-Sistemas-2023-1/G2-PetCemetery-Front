import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import ItemHistorico from '../components/ItemHistorico';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { visualizarHistorico } from '../components/api';
import { getUrlParams } from '../utils/utils';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Historico() {
    const id = getUrlParams('id');
    const [dadosJazigos, setDadosJazigos] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                var data = await visualizarHistorico(id);
                console.log(data);

                if (data) setDadosJazigos(data);
                else console.log("Erro! Jazigo vazio");

            } catch (error) {
                console.error("Error fetching data: " + error);
            }
        };

        fetchData();
    }, []);

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <NavBar isAdmin={true} />
            <Titulo texto="Histórico" />
            <Container component="main" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {/*NA TEORIA loopa por todos os itens da resposta*/}
                {dadosJazigos.map((dadosJazigos, index) => (

                    <ItemHistorico dados={dadosJazigos[index]} />

                ))}

            </Container>
        </ThemeProvider>
    );
}

export default Historico;
