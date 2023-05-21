import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import './navbar.css';

const NavBar = ({ page, isLoggedIn }) => {
    var color1, color2, color3, color4;

    switch (page) {
        case 1:
            color1 = "primary";
            color2 = "inherit";
            color3 = "inherit";
            color4 = "inherit";
            break;
        case 2:
            color1 = "inherit";
            color2 = "primary";
            color3 = "inherit";
            color4 = "inherit";
            break;
        case 3:
            color1 = "inherit";
            color2 = "inherit";
            color3 = "primary";
            color4 = "inherit";
            break;
        case 4:
            color1 = "inherit";
            color2 = "inherit";
            color3 = "inherit";
            color4 = "primary";
            break;
        default:
            color1 = "inherit";
            color2 = "inherit";
            color3 = "inherit";
            color4 = "inherit";
            break;
    }

    return (
        <React.Fragment>
            <AppBar position='static' sx={{ top: 0, left: 0, right: 0, position: 'fixed', width: '100%' }}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >

                    <Box style={{ paddingTop: 10, paddingLeft: 15, top: 0, left: 0, position: 'fixed' }}>
                        <Logo />
                    </Box>

                    <Stack direction='row' spacing={2}>
                        <Button color={color1} variant="contained" href={isLoggedIn ? '/Home' : '/'}>Home</Button>
                        <Button color={color2} variant="contained" href='/QuemSomos'>Quem Somos</Button>
                        <Button color={color3} variant="contained" href='/ContratacaoPlanos'>Planos</Button>
                        <Button color={color4} variant="contained" href='/Contato'>Contato</Button>
                    </Stack>

                    <Box sx={{ position: "fixed", top: 0, right: 0, zIndex: 2000, padding: 2 }}>
                        {!isLoggedIn &&
                            <Stack spacing={2} direction='row'>
                                <Button variant="contained" href="/Login">Login</Button>
                                <Button variant="contained" color="secondary" href="/Cadastro">Cadastro</Button>
                            </Stack>
                        }
                        {isLoggedIn &&
                            <Stack spacing={2} direction='row'>
                                <Button variant="contained" color="primary" href="/EditarPerfil">Meu Perfil</Button>
                                <Button variant="contained" color="error" href="/PaginaInicial">Logout</Button>
                            </Stack>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default NavBar;