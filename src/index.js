import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
import QuemSomos from './Paginas/QuemSomos';
import EditarPerfil from './Paginas/EditarPerfil';
import AlterarPerfil from './Paginas/AlterarPerfil';
import Home from './Paginas/Home';
import PaginaInicial from './Paginas/PaginaInicial';
import ContratacaoPlanos from './Paginas/ContratacaoPlanos';
import InfoScreen from './Paginas/InfoScreen';
import Contato from './Paginas/Contato';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdquirirJazigo from './Paginas/AdquirirJazigo';
import VisualizarDespesas from './Paginas/VisualizarDespesas';
import AgendarLembrete from './Paginas/AgendarLembrete';
import AgendarReuniao from './Paginas/AgendarReuniao';
import RealizarDoacoes from './Paginas/RealizarDoacoes';
import DetalhesJazigo from './Paginas/DetalhesJazigo';
import AgendarExumacao from './Paginas/AgendarExumacao';
import PersonalizarJazigo from './Paginas/PersonalizarJazigo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
//TODO já criar o esqueleto de TODAS as paginas possiveis
//TODO ver se vale a pena criar componente para Titulo com Divider

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
  {
    path: "/QuemSomos",
    element: <QuemSomos />
  },
  {
    path: "/Home",
    element: <Home />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={paginas} />
  </React.StrictMode>
);

reportWebVitals();
