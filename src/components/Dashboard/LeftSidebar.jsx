import React from 'react';

function LeftSidebar() {
  return (
    <aside className="left-sidebar">
      <h3>Categorias</h3>
      <ul className="categories-list">
        <li>FPS</li>
        <li>RPG</li>
        <li>MOBA</li>
        <li>Indie</li>
        <li>Retro</li>
        <li>Esports</li>
      </ul>
      <button className="btn-create-post">+ Criar Post</button>
      <nav className="user-nav">
        <a href="#">Meus Posts</a>
        <a href="#">Moderados</a>
        <a href="#">Salvos</a>
      </nav>
    </aside>
  );
}

export default LeftSidebar;