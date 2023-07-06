import { Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import { getInformacoesCarrinho, removerItemCarrinho } from './api';

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
    }, [cpf]);

    const removeServico = async (index) => {
        if (cartItems[index].tipoServico !== "COMPRA" && cartItems[index].tipoServico !== "ALUGUEL") return;

        var resp = await removerItemCarrinho(cpf, cartItems[index].idJazigo);

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
                                {item.tipoServico === "COMPRA" || item.tipoServico === "ALUGUEL" ? (
                                <Button variant="outlined" color="error" onClick={() => removeServico(index)}>Remover</Button>
                                ) : null}
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
