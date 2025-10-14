// src/App.jsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// --- SUAS IMPORTAÇÕES EXISTENTES ---
import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage/loginpage';
import CadastroPage from './Pages/CadastroPage/cadastropage';

// --- ADICIONE ESTAS DUAS IMPORTAÇÕES ---
import DashboardPage from './Pages/DashboardPage/DashboardPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';


// Componente de Layout (sem alterações)
const AppLayout = () => (
  <div className="App">
    <Cabeçalho />
    <main className="container">
      <Outlet /> 
    </main>
    <Footer />
  </div>
);

// Componente de Conteúdo da Home (sem alterações)
const HomePageContent = () => (
  <>
    <Hero />
    <JogosPopulares />
    <PostsRecentes />
  </>
);

function App() {
  return (
    <Routes>
      {/* Rota "pai" que usa o Layout (sem alterações) */}
      <Route path="/" element={<AppLayout />}>
        
        {/* Rotas públicas que já existiam */}
        <Route index element={<HomePageContent />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cadastro" element={<CadastroPage />} />
        
        {/* --- ADICIONE ESTE BLOCO DE ROTAS PROTEGIDAS AQUI DENTRO --- */}
        <Route element={<ProtectedRoute />}>
          {/* O path aqui é relativo ao pai ("/"), então "dashboard" vira "/dashboard" */}
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        
      </Route>

      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
    </Routes>
  );
}

export default App;