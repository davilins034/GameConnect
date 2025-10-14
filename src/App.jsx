import React from 'react';

// Importando os estilos
import './App.css';

// Importando as imagens da pasta assets, conforme sua estrutura
import logoGameConnect from './assets/Logo GAME CONNECT.svg';
import logoCounterStrike from './assets/Logo Counter Strike.jpg';
import logoFifa from './assets/Logo Fifa 26.JPG';
import logoRainbowSix from './assets/Logo Raimbow Six Siege X.jpg';

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <div className="container header-container">
          <h1 className="logo-text">GAMERCONECT</h1>
          <nav className="header-nav">
            <button className="btn btn-secondary">ENTRAR</button>
            <button className="btn btn-primary">CADASTRAR</button>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-logo">
            <img src={logoGameConnect} alt="Logo GamerConnect" />
          </div>
          <div className="hero-content">
            <h2>A COMUNIDADE GAMER FEITA PARA VOCÊ</h2>
            <p>Compartilhe experiências, descubra novos jogos e conecte-se com outros players.</p>
            <button className="btn btn-primary">Explorar comunidade</button>
          </div>
        </section>

        {/* JOGOS POPULARES */}
        <section className="popular-games">
          <h3>Jogos <span className="text-highlight">Populares</span></h3>
          <div className="games-grid">
            <div className="game-card">
              <img src={logoCounterStrike} alt="Counter Strike" />
            </div>
            <div className="game-card">
              <img src={logoFifa} alt="FC 26" />
            </div>
            <div className="game-card">
              <img src={logoRainbowSix} alt="Rainbow Six Siege X" />
            </div>
          </div>
        </section>

        {/* POSTS RECENTES */}
<section className="recent-posts">
  <h3>Posts <span className="text-highlight">Recentes</span></h3>
  <div className="posts-list">
    {
      [
        { id: 1, title: 'Qual a melhor mira para o Counter Strike da nova atualização?', author: 'Lucas034' },
        { id: 2, title: 'Procurando time para o campeonato amador de CS', author: 'CheiraBala103' },
        { id: 3, title: 'Dicas de formação para o Ultimate Team no FC26', author: 'ReiDoControle' },
        { id: 4, title: 'Melhores operadores para defesa em R6 Siege atualmente', author: 'Capitao_BR' },
        { id: 5, title: '5 jogos indie que você provavelmente não jogou e deveria!', author: 'ExploradordeJogos034' }
      ].map(post => (
        <div key={post.id} className="post-item">
          <p>[{post.title}] - por {post.author}</p>
        </div>
      ))
    }
  </div>
</section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 GAMERCONECT</p>
      </footer>
    </div>
  );
}

export default App;