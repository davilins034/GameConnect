

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx'; 

function ProtectedRoute() {
  const { isAuthenticated } = useAuth(); // Pega o estado de autenticação do contexto

  
  if (!isAuthenticated) {
    // Se o usuário NÃO estiver autenticado, redireciona para a página de login.
    // O 'replace' impede que o usuário use o botão "voltar" do navegador para acessar a página protegida.
    return <Navigate to="/login" replace />;
  }

  // Se o usuário ESTIVER autenticado, renderiza o componente da rota filha (no nosso caso, o DashboardPage).
  // O <Outlet /> é o marcador de posição para a rota aninhada.
  return <Outlet />;
}

export default ProtectedRoute;