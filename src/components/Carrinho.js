import { Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import { finalizarAluguel, finalizarCompra, getInformacoesCarrinho, removerItemCarrinho } from './api';

const Carrinho = ({ cpf, jazigoId, ornamento, tipo }) => {
    const [cartItems, setCartItems] = useState([]);
    const [resp, setResp] = useState([]);

    //

    const handleAddToCart = async () => {
        var respAdd;
        if (!cartItems.some((item) => item.jazigoId === jazigoId)) {
            if (tipo == "compra") {
                respAdd = await finalizarCompra(cpf, jazigoId, ornamento);
            }
            else if (tipo == "aluguel") {
                respAdd = await finalizarAluguel(cpf, jazigoId, ornamento);
            }

            if (respAdd != null) respAdd = respAdd.split(';');
            else { console.log("Resposta do back = null"); return; }

            if (respAdd[0] == "OK") {
                console.log("Item adicionado ao carrinho com sucesso");
            }
            else {
                console.log("Erro desconhecido na conexao com o back");
            }
        }
        else console.log("Item ja adicionado ao carrinho");
    };

    const getInfoCarrinho = async () => {
        try {
            const data = await getInformacoesCarrinho(cpf);
            setCartItems(data);
            console.log(data);
        } catch (error) {
            console.log("Erro ao pegar info do carrinho: " + error);
        }
    };

    useEffect(() => {
        const handleLoadData = async () => {
            await handleAddToCart();
            getInfoCarrinho();
        };

        handleLoadData();
    }, []);

    //

    const removeServico = async (index) => {
        var resp = await removerItemCarrinho(cpf, cartItems[index].idServico);

        if (resp != null) resp = resp.split(';');
        else { console.log("Resposta do back = null"); return; }

        if (resp[0] == "OK") {
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
