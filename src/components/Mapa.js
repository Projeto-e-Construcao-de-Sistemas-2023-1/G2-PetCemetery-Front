import { Grid, IconButton } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useState, useEffect } from 'react';
import { getGravesOccupationStatus } from '../components/api';
import jazul from '../jazul.png';
import jverde from '../jverde.png';
import jvermelho from '../jvermelho.png';

const Mapa = ({ onJazigoSelect, isModalOpen }) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [mapArray, setMapArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                var data = await getGravesOccupationStatus();
                if (data != null) data = data.split(';').map((value) => value === 'true'); 
                else { console.log("Resposta do back = null"); console.log("Erro na conexão com o servidor. Verifique sua rede"); return; }

                setMapArray(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log("\nmapArray=" + mapArray + "\n");

    const clickedGrave = (index) => {
        const selectedID = index + 1;
        onJazigoSelect(selectedID);
        setSelectedButton(selectedID);
    };

    const gridItems = mapArray.map((value, index) => {
        const graveID = index + 1;
        console.log();

        return (
            <Grid item key={graveID} xs={3} sm={2} md={1} lg={1} xl={1}>
                <IconButton id={graveID} onClick={() => clickedGrave(index)}>
                    <img src={selectedButton === graveID && isModalOpen ? jazul : value ? jverde : jvermelho} alt="icone" />
                </IconButton>
            </Grid>
        );
    });

    return (
        <React.Fragment>
            <Container>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {gridItems}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Mapa;