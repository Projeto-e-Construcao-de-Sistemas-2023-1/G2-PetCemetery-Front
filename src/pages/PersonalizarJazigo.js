import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ModalOk from '../components/ModalOk';
import NavBar from '../components/NavBar';
import { personalizarJazigo } from '../components/api';
import { useNavigate } from 'react-router-dom';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

const PersonalizarJazigo = () => {
  const cpf = sessionStorage.getItem('cpf');
  const query = new URLSearchParams(useLocation().search);
  const id = Number(query.get('id'));
  const [mensagem, setMensagem] = useState('');
  const [foto, setFoto] = useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [resultado, setResultado] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await personalizarJazigo(cpf, id, mensagem, urlFoto);

      // Armazenar a URL da imagem selecionada no armazenamento local
      localStorage.setItem('urlFoto', urlFoto);

      if (response === 'OK;Mensagem_editada') {
        setIsModalOpen(true);
      } else {
        setResultado('Erro ao editar a mensagem do jazigo.');
      }
    } catch (error) {
      setResultado('Erro ao editar a mensagem do jazigo.');
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

  const handleHome = () => { navigate('/DetalhesJazigo'); };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h1" align="center"> Detalhes do Jazigo </Typography>
            <Box display="flex" alignItems="center" marginTop={2}>
              <Box flexGrow={1}>
                <Typography variant="subtitle1">Imagem</Typography>
              </Box>
            </Box>
            <Box display="flex" marginTop={2}>
              <Box flexBasis="50%">
                {foto ? (
                  <img src={foto} alt="Imagem do Jazigo" width="40%" />
                ) : (
                  <img src={urlFoto || '../images/nome-da-imagem-padrao.jpg'} alt="Imagem do Jazigo" width="40%" />
                )}
                <Button variant="contained" color="primary" onClick={handleChooseImage}> Escolher Imagem </Button>
              </Box>
              <Box flexBasis="50%" pl={2}>
                <Typography variant="subtitle1">Mensagem na lápide</Typography>
                <TextField multiline rows={4} fullWidth placeholder="Digite a mensagem da lápide" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                <Typography variant="caption" color="textSecondary"> Limite de 80 caracteres </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Confirmar</Button>
            </Box>
            {resultado && <Typography variant="subtitle1">{resultado}</Typography>}
          </CardContent>
        </Card>
      </Box>
      <ModalOk title={"Mensagem editada com sucesso"} open={isModalOpen} bt1Text="Voltar" bt1Href={handleHome} />
    </ThemeProvider>
  );
};

export default PersonalizarJazigo;
