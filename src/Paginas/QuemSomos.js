import React from 'react';
import '../Styles/quem-somos.css';
import { AppBar, Button, Toolbar, Typography, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import NavBar from '../components/NavBar';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function QuemSomos() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar/>

      <Container component="main">
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h2">Quem Somos</Typography>
            <Divider orientation="horizontal" flexItem />
          </Box>
          <Typography variant="h6">Aqui no nosso cemitério de animais, nós entendemos que os animais são membros da família e merecem ser tratados com o mesmo respeito e dignidade que qualquer outro ente querido. É por isso que criamos este espaço dedicado a homenagear e lembrar aqueles que partem.
            Nossa empresa foi fundada em 2023 por um grupo de universitários que compartilhavam um amor profundo por animais(e ramones) e um desejo de criar um lugar onde os donos pudessem honrar a memória de seus animais de estimação. A partir daí, nosso cemitério cresceu e evoluiu para atender às necessidades de nossos clientes, oferecendo serviços de sepultamento, memorialização e muito mais.
            Estamos comprometidos em fornecer um ambiente tranquilo e sereno para homenagear a vida de seus pets. Nossa equipe de funcionários é apaixonada por ajudar nossos clientes a encontrar o caminho certo para lembrar e honrar seus pets, e estamos sempre disponíveis para ajudar em qualquer necessidade que possam ter.
            Se você está procurando um lugar para homenagear a vida do seu pet, esperamos que você considere nossa empresa. Estamos honrados em poder cuidar de você e seu pets em um dos momentos mais difíceis da vida.
          </Typography>
          <Button variant="contained" href="/ContratacaoPlanos">Conheça nossos planos</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default QuemSomos;