// src/App.jsx

import React from 'react';
// 1. Importe também o Outlet
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// Componentes
import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage/loginpage';
import CadastroPage from './Pages/CadastroPage/cadastropage';

// 2. Crie um componente de Layout que será compartilhado
const AppLayout = () => (
  <div className="App">
    <Cabeçalho />
    <main className="container">
      {/* O Outlet renderizará o componente da rota filha aqui */}
      <Outlet /> 
    </main>
    <Footer />
  </div>
);

// 3. Crie um componente SÓ com o conteúdo da Home
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
      {/* 4. Defina a rota "pai" que usa o Layout */}
      <Route path="/" element={<AppLayout />}>
        
        {/* 5. Defina as rotas "filhas" que serão renderizadas DENTRO do Outlet */}
        <Route index element={<HomePageContent />} /> {/* 'index' significa que é a rota padrão para "/" */}
        <Route path="login" element={<LoginPage />} />
        <Route path="cadastro" element={<CadastroPage />} />
        
      </Route>

      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
    </Routes>
  );
}

export default App;