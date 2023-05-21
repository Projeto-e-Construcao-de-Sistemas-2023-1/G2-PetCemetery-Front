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
//TODO já criar o esqueleto de TODAS as paginas possiveis
//TODO ver se vale a pena criar componente para Titulo com Divider
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
