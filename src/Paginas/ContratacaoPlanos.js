import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import '../Styles/contratacao-planos.css';
import NavBar from '../components/NavBar';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function ContratacaoPlanos() {

  const [planoSelecionado, setPlanoSelecionado] = useState('');

  const handleSelecaoDePlano = (plano) => {
    setPlanoSelecionado(plano);
  }

  const checkboxStyle = {
    color: 'black',
    '&$disabled': {
      color: 'black',
    },
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={3} />
      <Container component="main">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h2" align='center'>Conheça nossos planos de personalização</Typography>
            <Divider orientation="horizontal" flexItem />
          </Box>

          <div className="planos">
            <div id="basic" className={`plano ${planoSelecionado === 'basic' ? 'selected' : ''}`} onClick={() => handleSelecaoDePlano('basic')}>
              <Typography variant="h2">Basic</Typography>
              <Typography variant="h6" color='black'>R$ 1,00</Typography>
              <Box>
                <FormControlLabel class="fcl" label="Mensagem" disabled control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Foto" disabled control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Flores" disabled control={<Checkbox style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Catavento" disabled control={<Checkbox style={checkboxStyle} />} />
              </Box>
            </div>
            <div id="silver" className={`plano ${planoSelecionado === 'silver' ? 'selected' : ''}`} onClick={() => handleSelecaoDePlano('silver')}>
              <Typography variant="h2">Silver</Typography>
              <Typography variant="h6" color='black'>R$ 50,00</Typography>
              <Box>
                <FormControlLabel class="fcl" label="Mensagem" disabled control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Foto" disabled control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Flores" disabled control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Catavento" disabled control={<Checkbox style={checkboxStyle} />} />
              </Box>
            </div>
            <div id="gold" className={`plano ${planoSelecionado === 'gold' ? 'selected' : ''}`} onClick={() => handleSelecaoDePlano('gold')}>
              <Typography variant="h2">Gold</Typography>
              <Typography variant="h6" color='black'>R$ 80,00</Typography>
              <Box>
                <FormControlLabel class="fcl" label="Mensagem" disabled color="primary" control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Foto" disabled control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Flores" disabled control={<Checkbox checked style={checkboxStyle} />} />
                <FormControlLabel class="fcl" label="Catavento" disabled control={<Checkbox checked style={checkboxStyle} />} />
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ContratacaoPlanos;