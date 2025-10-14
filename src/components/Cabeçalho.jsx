import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo-text">GAME CONNECT</h1>
        <nav className="header-nav">
          <button className="btn btn-secondary">ENTRAR</button>
          <button className="btn btn-primary">CADASTRAR</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
