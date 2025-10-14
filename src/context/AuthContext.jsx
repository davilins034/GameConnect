// src/context/AuthContext.jsx

import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const AuthContext = createContext(null);

// 2. Cria o Provedor do Contexto
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para simular o login
  const login = () => {
    console.log("Usuário logado com sucesso!");
    setIsAuthenticated(true);
  };

  // Função para fazer o logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Cria um Hook customizado para facilitar o uso do contexto
export function useAuth() {
  return useContext(AuthContext);
}