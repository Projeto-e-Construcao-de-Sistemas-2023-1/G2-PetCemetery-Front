import { Divider, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

class Servico {
    constructor(tipo, idJazigo, valor, enderecoJazigo) {
        this.tipo = tipo;
        this.idJazigo = idJazigo;
        this.valor = valor;
        this.enderecoJazigo = enderecoJazigo;
    }
}

const Carrinho = ({ cartServicos }) => {
    const [cartItems, setCartItems] = useState(cartServicos);

    const addServico = (tipo, valor, enderecoJazigo) => {
        var item = new Servico(tipo, valor, enderecoJazigo);
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
                                <ListItemText primary={item.name} secondary={`$${item.price}`} />
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
