// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. Importe também o Routes e o Route
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

// 2. Importe os componentes das suas páginas
import App from './App.jsx'
import LoginPage from './Pages/LoginPage/loginpage.jsx'
import CadastroPage from './Pages/CadastroPage/cadastropage.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 3. Substitua o <App /> pelo container <Routes> */}
      <Routes>
        {/* Esta é a rota "pai" ou de layout. Ela renderiza o App.jsx */}
        <Route path="/" element={<App />}>
        
          {/* Estas são as rotas "filhas". Elas serão mostradas onde você colocar o <Outlet /> */}
          {/* A URL será seusite.com/login */}
          <Route path="login" element={<LoginPage />} />
          
          {/* A URL será seusite.com/cadastro */}
          <Route path="cadastro" element={<CadastroPage />} />
          
          {/* Você pode adicionar outras páginas aqui no futuro */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)