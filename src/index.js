import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import QuemSomos from './pages/QuemSomos';
import EditarPerfil from './pages/EditarPerfil';
import AlterarPerfil from './pages/AlterarPerfil';
import Home from './pages/Home';
import PaginaInicial from './pages/PaginaInicial';
import ContratacaoPlanos from './pages/ContratacaoPlanos';
import AlterarHorarioFuncionamento from './pages/AlterarHorarioFuncionamento';
import Contato from './pages/Contato';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdquirirJazigo from './pages/AdquirirJazigo';
import VisualizarDespesas from './pages/VisualizarDespesas';
import AgendarLembrete from './pages/AgendarLembrete';
import AgendarReuniao from './pages/AgendarReuniao';
import RealizarDoacoes from './pages/RealizarDoacoes';
import AgendarExumacao from './pages/AgendarExumacao';
import PersonalizarJazigo from './pages/PersonalizarJazigo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/pt-br';
import ComprarOrnamento from './pages/ComprarOrnamento';
import DesativarConta from './pages/DesativarConta';
import CompraAlugaJazigo from './pages/CompraAlugaJazigo';
import HomeAdmin from './pages/HomeAdmin';
import ConfirmarCompra from './pages/ConfirmarCompra';
import VisualizarReuniao from './pages/VisualizarReuniao';
import ManterServicos from './pages/ManterServicos';
import RelatorioInadimplente from './pages/RelatorioInadimplente';
import RelatorioSelecao from './pages/RelatorioSelecao';
import AgendarEnterro from './pages/AgendarEnterro';
import VisualizarExumacoes from './pages/VisualizarExumacoes';
import VisualizarEnterros from './pages/VisualizarEnterros';
import VisualizarJazigos from './pages/VisualizarJazigos';
import VerMapaJazigos from './pages/VerMapaJazigos';

//TODO já criar o esqueleto de TODAS as paginas possiveis

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      {children}
    </LocalizationProvider>
  );
}

const paginas = createBrowserRouter([

  {
    path: "/",
    element: <PaginaInicial />
  }
  , {
    path: "/PaginaInicial",
    element: <PaginaInicial />
  }
  , {
    path: "/ManterServicos",
    element: <ManterServicos />
  }
  , {
    path: "/AgendarExumacao",
    element: <AgendarExumacao />
  }
  , {
    path: "/AgendarEnterro",
    element: <AgendarEnterro />
  }
  , {
    path: "/VisualizarEnterros",
    element: <VisualizarEnterros />
  }
  , {
    path: "/VisualizarExumacoes",
    element: <VisualizarExumacoes />
  }
  , {
    path: "/VisualizarJazigos",
    element: <VisualizarJazigos />
  }
  , {
    path: "/VerMapaJazigos",
    element: <VerMapaJazigos />
  }
  , {
    path: "/PersonalizarJazigo",
    element: <PersonalizarJazigo />
  }
  , {
    path: "/Contato",
    element: <Contato />
  }
  , {
    path: "/ContratacaoPlanos",
    element: <ContratacaoPlanos />
  }
  , {
    path: "/Login",
    element: <Login />
  }
  , {
    path: "/Cadastro",
    element: <Cadastro />
  }
  , {
    path: "/EditarPerfil",
    element: <EditarPerfil />
  }
  , {
    path: "/AlterarPerfil",
    element: <AlterarPerfil />
  }
  , {
    path: "/DesativarConta",
    element: <DesativarConta />
  }
  , {
    path: "/AdquirirJazigo",
    element: <AdquirirJazigo />
  }
  , {
    path: "/VisualizarDespesas",
    element: <VisualizarDespesas />
  }
  , {
    path: "/AlterarHorarioFuncionamento",
    element: <AlterarHorarioFuncionamento />
  }
  , {
    path: "/AgendarLembrete",
    element: <AgendarLembrete />
  }
  , {
    path: "/AgendarReuniao",
    element: <AgendarReuniao />
  }
  , {
    path: "/RealizarDoacoes",
    element: <RealizarDoacoes />
  }
  , {
    path: "/ComprarOrnamento",
    element: <ComprarOrnamento />
  }
  , {
    path: "/VisualizarReuniao",
    element: <VisualizarReuniao />
  }
  , {
    path: "/CompraAlugaJazigo",
    element: <CompraAlugaJazigo />
  }
  , {
    path: "/QuemSomos",
    element: <QuemSomos />
  }
  , {
    path: "/ConfirmarCompra",
    element: <ConfirmarCompra />
  }
  , {
    path: "/HomeAdmin",
    element: <HomeAdmin />
  }
  , {
    path: "/Home",
    element: <Home />
  }
  , {
    path: "/RelatorioInadimplente",
    element: <RelatorioInadimplente />
  }
  , {
    path: "/RelatorioSelecao",
    element: <RelatorioSelecao />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App>
    <RouterProvider router={paginas} />
  </App>

);

reportWebVitals();
