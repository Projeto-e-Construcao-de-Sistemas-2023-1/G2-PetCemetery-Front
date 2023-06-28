import React, { useEffect, useState } from 'react';

function ItemHistorico({ dados }) {
    const [dadosJazigo, setDadosJazigo] = useState(
        {
            id_jazigo: "",
            nomePet: "",
            dataNascimentoPet: "",
            especiePet: "",
            nomeProprietario: "",
            dataEnterro: "",
            dataExumacao: ""
        }
    );

    useEffect(() => {
        if (dados) {
            setDadosJazigo(dados);
            console.log("Dados do item do histórico: ");
            console.log(dados);
        }
        else { console.log("weird shit"); }
    }, [dados]);

    return (
        <React.Fragment>
            <Paper elevation={3} sx={{ padding: 2, margin: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6">Nome do pet: {dadosJazigo.nomePet} </Typography>
                    <Divider orientation="vertical" sx={{ width: '100%' }} />
                    <Typography variant="h6">ID jazigo: {dadosJazigo.id_jazigo} </Typography>
                    <Typography variant="h6">Data de nascimento do pet: {dadosJazigo.dataNascimentoPet} </Typography>
                    <Typography variant="h6">Espécie do pet: {dadosJazigo.especiePet} </Typography>
                    <Typography variant="h6">Nome do proprietário: {dadosJazigo.nomeProprietario} </Typography>
                    <Typography variant="h6">Data de enterro: {dadosJazigo.dataEnterro} </Typography>
                    <Typography variant="h6">Data de exumação: {dadosJazigo.dataExumacao} </Typography>
                </Box>
                <Typography variant="h6" color="secondary" align='center'>{errMsg}</Typography>
            </Paper>
        </React.Fragment>
    );
}

export default ItemHistorico;
