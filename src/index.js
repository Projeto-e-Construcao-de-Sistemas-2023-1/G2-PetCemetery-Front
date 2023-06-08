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
import InfoScreen from './pages/InfoScreen';
import Contato from './pages/Contato';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdquirirJazigo from './pages/AdquirirJazigo';
import VisualizarDespesas from './pages/VisualizarDespesas';
import AgendarLembrete from './pages/AgendarLembrete';
import AgendarReuniao from './pages/AgendarReuniao';
import RealizarDoacoes from './pages/RealizarDoacoes';
import DetalhesJazigo from './pages/DetalhesJazigo';
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
//TODO já criar o esqueleto de TODAS as paginas possiveis
//TODO ver se vale a pena criar componente para Titulo com Divider


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
    path: "/AgendarExumacao",
    element: <AgendarExumacao />
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
    path: "/DetalhesJazigo",
    element: <DetalhesJazigo />
  }
  , {
    path: "/ContratacaoPlanos",
    element: <ContratacaoPlanos />
  }
  , {
    path: "/Login",
    element: <Login />
  },
  , {
    path: "/Cadastro",
    element: <Cadastro />
  },
  , {
    path: "/EditarPerfil",
    element: <EditarPerfil />
  },
  , {
    path: "/AlterarPerfil",
    element: <AlterarPerfil />
  },
  , {
    path: "/DesativarConta",
    element: <DesativarConta />
  },
  , {
    path: "/AdquirirJazigo",
    element: <AdquirirJazigo />
  },
  , {
    path: "/VisualizarDespesas",
    element: <VisualizarDespesas />
  },
  , {
    path: "/AgendarLembrete",
    element: <AgendarLembrete />
  },
  , {
    path: "/AgendarReuniao",
    element: <AgendarReuniao />
  },
  , {
    path: "/RealizarDoacoes",
    element: <RealizarDoacoes />
  },
  , {
    path: "/InfoScreen",
    element: <InfoScreen />
  },
  , {
    path: "/ComprarOrnamento",
    element: <ComprarOrnamento />
  },
  , {
    path: "/CompraAlugaJazigo",
    element: <CompraAlugaJazigo />
  },
  {
    path: "/QuemSomos",
    element: <QuemSomos />
  },
  {
    path: "/ConfirmarCompra",
    element: <ConfirmarCompra />
  },
  {
    path: "/HomeAdmin",
    element: <HomeAdmin />
  },
  {
    path: "/Home",
    element: <Home />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={paginas} />
    </App>
  </React.StrictMode>
);

reportWebVitals();
