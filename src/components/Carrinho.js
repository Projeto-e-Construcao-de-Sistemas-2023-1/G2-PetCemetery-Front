import { Divider, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

export class Servico {
    constructor(valor, tipoServico, enderecoJazigo, plano, idServico) {
        this.valor = valor;
        this.tipoServico = tipoServico;
        this.enderecoJazigo = enderecoJazigo;
        this.plano = plano;
        this.idServico = idServico;
    }
}

const Carrinho = ({ cartServicos }) => {
    const [cartItems, setCartItems] = useState(cartServicos);
    
    console.log("CART SERVICOS - " + cartServicos);
    console.log("PRIMEIRO OBJETO DO CART SERVICOS - " + cartServicos[0])
    console.log("CART SERVICOS É UM ARRAY? " + Array.isArray(cartServicos))
    console.log("CART SERVICOS TA VAZIO? " + cartServicos.length)

    const addServico = (valor, tipoServico, enderecoJazigo, plano, idServico) => {
        var item = new Servico(valor, tipoServico, enderecoJazigo, plano, idServico);
        setCartItems([...cartItems, item]);
    };

    const removeServico = (index) => {
        const updatedItems = [...cartItems];
        updatedItems.splice(index, 1);
        setCartItems(updatedItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <React.Fragment>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4">Seu Carrinho</Typography>
                <Divider orientation="horizontal" flexItem sx={{ margin: 1 }} />
                {cartItems.length === 0 ? (
                    <Typography variant="body1">O carrinho está vazio</Typography>
                ) : (
                    <List>
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.tipoServico} secondary={`$${item.valor}`} />
                                <Button variant="outlined" color="error" onClick={() => removeServico(index)}>
                                    Remover
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                )}
                <Button variant="outlined" disabled={cartItems.length === 0} onClick={clearCart}>
                    Limpar Carrinho
                </Button>
            </Container>
        </React.Fragment>
    );
};

export default Carrinho;
