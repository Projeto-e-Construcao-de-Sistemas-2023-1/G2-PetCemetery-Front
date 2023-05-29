import { Grid, IconButton } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGravesOccupationStatus } from '../components/api';
import jverde from '../jverde.png';
import jvermelho from '../jvermelho.png';
import jazul from '../jazul.png';

const Mapa = ({ onJazigoSelect, isModalOpen }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const clickedGrave = (index) => {
        onJazigoSelect(index);
        setSelectedButton(index);
    };

    const mapArray = getGravesOccupationStatus();

    const gridItems = Array.from({ length: 72 }, (_, index) => (
        <Grid item key={index} xs={3} sm={2} md={1} lg={1} xl={1}>
            <IconButton id={index} onClick={() => clickedGrave(index)}>
                <img src={selectedButton === index && isModalOpen ? jazul : mapArray[index] ? jvermelho : jverde} alt="icone" />
            </IconButton>
        </Grid>
    ));

    return (
        <React.Fragment>
            <Container>
                <Grid container rowSpacing={2} columnSpacing={2}>{gridItems}</Grid>
            </Container>
        </React.Fragment>
    );
};

export default Mapa;