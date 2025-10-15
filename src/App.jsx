

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';


import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage/loginpage';
import CadastroPage from './Pages/CadastroPage/cadastropage';


import DashboardPage from './Pages/DashboardPage/DashboardPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';



const AppLayout = () => (
  <div className="App">
    <Cabeçalho />
    <main className="container">
      <Outlet /> 
    </main>
    <Footer />
  </div>
);


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
      
      <Route path="/" element={<AppLayout />}>
        
        
        <Route index element={<HomePageContent />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cadastro" element={<CadastroPage />} />
        
        
        <Route element={<ProtectedRoute />}>
          
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        
      </Route>

      
      <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
    </Routes>
  );
}

export default App;