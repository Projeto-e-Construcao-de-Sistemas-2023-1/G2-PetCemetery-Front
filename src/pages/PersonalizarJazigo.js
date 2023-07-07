import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalOk from '../components/ModalOk';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { getInfoPersonalizacao, personalizarJazigo } from '../components/api';
import placeholder from '../placeholder.png';
import { getUrlParams } from '../utils/utils';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

const PersonalizarJazigo = () => {
  const cpf = sessionStorage.getItem('cpf');
  const id = getUrlParams('id');

  const [mensagem, setMensagem] = useState('');
  const [foto, setFoto] = useState();
  const [urlFoto, setUrlFoto] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textBoxDisabled, setTextBoxDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("URLFOTO: " + urlFoto);
    // Recuperar a URL da imagem do armazenamento local
    const cachedUrlFoto = localStorage.getItem('urlFoto');

    console.log("Cachedurlfoto: " + cachedUrlFoto);

    if (cachedUrlFoto) {
      setUrlFoto(cachedUrlFoto);
    }
  }, [urlFoto]);

  const fetchInfoPersonalizacao = async () => {
    try {
      var resp = await getInfoPersonalizacao(cpf, id);
      console.log(resp);

      if (resp != null) resp = resp.split(';');
      else { console.log("Resposta do back = null"); setErrMsg("Erro na conexão com o servidor. Verifique sua rede"); return; }

      if (resp[1] === '""') resp[1] = "null";

      if (resp[1] !== "null") {
        console.log("Mensagem:" + resp[1] + ".");
        setTextBoxDisabled(true);
        setMensagem(resp[1].replace(/"/g, ""));
      }
      else {
        setMensagem("");
        setTextBoxDisabled(false);
      }
    } catch (error) {
      console.log(error);
      alert("Erro na conexão com o back");
    }
  };

  useEffect(() => {
    fetchInfoPersonalizacao();
  }, [cpf]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await personalizarJazigo(cpf, id, mensagem, urlFoto);

      // Armazenar a URL da imagem selecionada no armazenamento local
      localStorage.setItem('urlFoto', urlFoto);

      if (response === 'OK;Mensagem_editada') {
        setIsModalOpen(true);
      } else {
        setErrMsg('Erro ao editar a mensagem do jazigo');
      }
    } catch (error) {
      setErrMsg('Erro ao editar a mensagem do jazigo');
    }
  };

  const handleChooseImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      console.log("Imagem escolhida: " + file.name);
      const url = URL.createObjectURL(file);
      console.log("URL OBJECT CRIADO: " + url);

      // Armazenar a URL da imagem selecionada no estado e no armazenamento local
      setFoto(url);
      setUrlFoto(url);
      localStorage.setItem('urlFoto', url);
    };
    input.click();
  };

  const handleHome = () => { navigate('/Home'); };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Detalhes do Jazigo" mW="md" />
      <Box display="flex" flexDirection="column" alignItems="center">

        <Box display="flex" marginTop={2}>
          <Box flexBasis="50%" sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            {foto ? (
              <img src={foto} alt="Imagem do Jazigo" width="40%" />
            ) : (
              <img src={placeholder} alt="Imagem do Jazigo placeholder" width="40%" />
            )}
            <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} onClick={handleChooseImage}> Escolher Imagem </Button>
          </Box>

          <Divider orientation="vertical" sx={{ marginLeft: 3, marginRight: 3 }} flexItem />

          <Box flexBasis="50%" pl={2}>
            <Typography variant="h5">Mensagem na lápide</Typography>
            <TextField multiline rows={4} disabled={textBoxDisabled} fullWidth placeholder="Digite a mensagem da lápide" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            <Typography variant="caption" color="textSecondary"> Limite de 80 caracteres </Typography>
          </Box>

        </Box>
        <Box display="flex" justifyContent="center" marginTop={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Alterar</Button>
        </Box>
      </Box>
      <Typography variant="h5" color="error" align='center'>{errMsg}</Typography>
      <ModalOk title={"Informações alteradas com sucesso"} open={isModalOpen} bt1Text="Voltar" bt1Href={handleHome} />
    </ThemeProvider>
  );
};

export default PersonalizarJazigo;
