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

const Carrinho = () => {
    const [cartServicos, setCartServicos] = useState([]);
    var servicos = [];
    var valorTotal = 0;

    const addServico = (tipo, valor, enderecoJazigo) => {
        var item = new Servico(tipo, valor, enderecoJazigo);
        setCartServicos([...cartServicos, item]);
    };

    const removeServico = (index) => {
        const updatedServicos = [...cartServicos];
        updatedServicos.splice(index, 1);
        setCartServicos(updatedServicos);
    };

    const clearCart = () => {
        setCartServicos([]);
    };

    return (
        <React.Fragment>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4">Seu Carrinho</Typography>
                <Divider orientation="horizontal" flexItem sx={{ margin: 1 }} />
                {cartServicos.length == 0 ? (
                    <Typography variant="body1">O carrinho está vazio</Typography>
                ) : (
                    <List>
                        {cartServicos.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.name} secondary={`$${item.price}`} />
                                <Button variant="outlined" color="error" onClick={() => removeServico(index)}>Remover</Button>
                            </ListItem>
                        ))}
                    </List>
                )}
                <Button variant="outlined" disabled={cartServicos.length === 0} onClick={clearCart}>Limpar Carrinho</Button>
            </Container>
        </React.Fragment>
    );
};

export default Carrinho;