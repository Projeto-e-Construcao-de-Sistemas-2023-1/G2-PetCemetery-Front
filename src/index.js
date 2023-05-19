import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Paginas/Login';
import QuemSomos from './Paginas/QuemSomos';
import Home from './Paginas/Home';
import PaginaInicial from './Paginas/PaginaInicial';
import ContratacaoPlanos from './Paginas/ContratacaoPlanos';
import Contato from './Paginas/Contato';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, createBrowserRouter, RouterProvider } from 'react-router-dom';

const paginas = createBrowserRouter([

  {
    path:"/",
    element : <PaginaInicial/>
  }
  ,{
    path:"/PaginaInicial",
    element : <PaginaInicial/>
  }
  ,{
    path:"/Contato",
    element : <Contato/>
  }
  ,{
    path:"/ContratacaoPlanos",
    element : <ContratacaoPlanos/>
  }
  ,{
    path:"/Login",
    element : <Login/>
  },
  {
    path:"/QuemSomos",
    element : <QuemSomos/>
  },
  {
    path:"/Home",
    element : <Home/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={paginas} />
  </React.StrictMode>
);

reportWebVitals();
