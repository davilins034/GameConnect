import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo-text">GAME CONNECT</h1>
        <nav className="header-nav">

          {/* Navegação rápida */}
          <Link to="/login" className="btn btn-secondary">
            ENTRAR
          </Link>

          <Link to="/register" className="btn btn-primary">
            CADASTRAR
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;