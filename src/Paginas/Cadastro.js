import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/cadastro.css';
import NavBar from '../components/NavBar';
import { cadastroPost } from '../components/api';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Cadastro() {
  const navigate = useNavigate();
  var emailInput, senhaInput, nomeInput, cpfInput, telefoneInput, ruaInput, numeroInput, complementoInput, cepInput, repitaSenhaInput;

  const [errMsg, setErrMsg] = useState("");

  const handleEmail = (e) => {
    emailInput = e.target.value;
    console.log(emailInput);
  }

  const handleNome = (e) => {
    nomeInput = e.target.value;
    console.log(nomeInput);
  }

  const handleCpf = (e) => {
    cpfInput = e.target.value;
    console.log(cpfInput);
  }

  const handleTelefone = (e) => {
    telefoneInput = e.target.value;
    console.log(telefoneInput);
  }

  const handleRua = (e) => {
    ruaInput = e.target.value;
    console.log(ruaInput);
  }

  const handleNumero = (e) => {
    numeroInput = e.target.value;
    console.log(numeroInput);
  }

  const handleComplemento = (e) => {
    complementoInput = e.target.value;
    console.log(complementoInput);
  }

  const handleCep = (e) => {
    cepInput = e.target.value;
    console.log(cepInput);
  }

  const handleSenha = (e) => {
    senhaInput = e.target.value;
    console.log(senhaInput);
  }

  const handleRepitaSenha = (e) => {
    repitaSenhaInput = e.target.value;
    console.log(repitaSenhaInput);
  }

  const handleCadastro = async (e) => {
    let resp = await cadastroPost(emailInput, senhaInput, repitaSenhaInput, nomeInput, cpfInput, telefoneInput, ruaInput, numeroInput, complementoInput, cepInput);
    console.log(resp);

    resp = resp.split(';');

    if (resp[0] == "OK") {
      console.log("cpf do cliente: " + resp[1])
      navigate('/Home');
    }
    else if (resp[0] == "ERR") {
      console.log("ERRO! motivo: " + resp[1]);
      if (resp[1] == "senhas_diferentes") { setErrMsg("As senhas digitadas não são iguais"); }
      else if (resp[1] == "email_invalido") { setErrMsg("O email digitado não é válido"); }
      else if (resp[1] == "email_ja_cadastrado") { setErrMsg("O email digitado já está cadastrado"); }
      else if (resp[1] == "campo_vazio") { setErrMsg("Preencha todos os campos"); }
      else { setErrMsg("Erro desconhecido"); }
    }
    else {
      console.log("Erro na formatacao de resposta do servidor");
      setErrMsg("Erro na formatação de resposta do servidor");
    }
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Box sx={{ margin: 2 }}>
          <Typography variant="h2" align='center'>Cadastro</Typography>
          <Divider orientation="horizontal" flexItem />
        </Box>
      </Container>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid item >
            <TextField margin="normal" required fullWidth id="nome" label="Nome" name="nome" onChange={handleNome} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="email" label="Email" type="email" id="email" onChange={handleEmail} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="cpf" label="CPF" id="cpf" onChange={handleCpf} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="telefone" label="Telefone" id="telefone" onChange={handleTelefone} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="senha" type="password" label="Senha" id="senha" onChange={handleSenha} />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item>
            <TextField margin="normal" required fullWidth name="rua" label="Rua" id="rua" onChange={handleRua} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="numero" label="Numero" id="numero" onChange={handleNumero} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="complemento" label="Complemento" id="complemento" onChange={handleComplemento} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="cep" label="CEP" id="cep" onChange={handleCep} />
          </Grid>
          <Grid item>
            <TextField margin="normal" required fullWidth name="senharepeat" type="password" label="Repita a senha" id="senharepeat" onChange={handleRepitaSenha} />
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => { handleCadastro(); }}>Cadastro</Button>
      </Box>

      <Typography variant="h6" color="error" align='center'>{errMsg}</Typography>

    </ThemeProvider>
  );
}

export default Cadastro;