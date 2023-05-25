import { Button, Grid, Box, IconButton } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import jverde from '../jverde.png';
import jvermelho from '../jvermelho.png';
import { getGravesOccupationStatus } from '../components/api';

const Mapa = () => {

    function clickedGrave(index) {
        console.log("clicked " + index);
    }

    var mapArray = getGravesOccupationStatus();
    function getCurrOcc(i) {
        return mapArray[i];
    }

    const gridItems = Array.from({ length: 72 }, (_, index) => (
        <Grid item key={index} xs={3} sm={2} md={1} lg={1} xl={1}>
            {<IconButton id={index} onClick={() => {clickedGrave(index)}} > <img src={getCurrOcc(index) ? jverde : jvermelho} alt="icone" /></IconButton>}
        </Grid>
    ));

    return (
        <React.Fragment>
            <Container>
                <Grid container rowSpacing={2} columnSpacing={2}>{gridItems}</Grid>
            </Container>
        </React.Fragment>
    );
}

export default Mapa;