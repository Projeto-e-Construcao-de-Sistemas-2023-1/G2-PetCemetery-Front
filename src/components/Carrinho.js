import { Divider, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

class Item {
    constructor(nome, tipo, preco, enderecoJazigo) {
        this.nome = nome;
        this.tipo = tipo;
        this.preco = preco;
        this.enderecoJazigo = enderecoJazigo;
    }
  }  

const Carrinho = () => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (nome, tipo, preco, enderecoJazigo) => {
        var item = new Item(nome, tipo, preco, enderecoJazigo);
        setCartItems([...cartItems, item]);
    };

    const removeItem = (index) => {
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
                {cartItems.length == 0 ? (
                    <Typography variant="body1">O carrinho está vazio</Typography>
                ) : (
                    <List>
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.name} secondary={`$${item.price}`} />
                                <Button variant="outlined" color="error" onClick={() => removeItem(index)}>Remover</Button>
                            </ListItem>
                        ))}
                    </List>
                )}
                <Button variant="outlined" disabled={cartItems.length === 0} onClick={clearCart}>Limpar Carrinho</Button>
            </Container>
        </React.Fragment>
    );
};

export default Carrinho;