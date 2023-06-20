import { Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import { finalizarCompraCarrinho, getInformacoesCarrinho, removerItemCarrinho } from './api';

const Carrinho = ({ cpf }) => {
    const [cartItems, setCartItems] = useState([]);

    const getInfoCarrinho = async () => {
        try {
            console.log("getInfoCarrinho");
            const data = await getInformacoesCarrinho(cpf);
            setCartItems(data);
            console.log(data);
        } catch (error) {
            console.log("Erro ao pegar info do carrinho: " + error);
        }
    };

    useEffect(() => {
        console.log("useEffect");
        getInfoCarrinho();
    }, []);

    //

    const removeServico = async (index) => {
        var resp = await removerItemCarrinho(cpf, cartItems[index].idServico);

        if (resp != null) resp = resp.split(';');
        else { console.log("Resposta do back = null"); return; }

        if (resp[0] === "OK") {
            console.log("Servico removido com sucesso: " + index);
            getInfoCarrinho();
        }
        else {
            console.log("Erro: servico nao encontrado");
        }
    };

    const clearCart = async () => {
        for (let i = 0; i < cartItems.length; i++) {
            await removeServico(i);
        }
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
                                <Button variant="outlined" color="error" onClick={() => removeServico(index)}>Remover</Button>
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
