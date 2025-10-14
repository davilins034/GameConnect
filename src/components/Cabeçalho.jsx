// src/components/Cabecalho.jsx

import React from 'react';
// Passo 1: Importe o componente Link
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo-text">GAME CONNECT</h1>
        <nav className="header-nav">
          {/* Passo 2: Envolva cada botão com o componente Link */}
          
          {/* O 'to' define para qual rota o link levará. */}
          <Link to="/login">
            <button className="btn btn-secondary">ENTRAR</button>
          </Link>

          <Link to="/cadastro">
            <button className="btn btn-primary">CADASTRAR</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;