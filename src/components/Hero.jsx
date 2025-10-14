import React from 'react';
import logoGameConnect from '../assets/Logo GAME CONNECT.svg';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-logo">
        <img src={logoGameConnect} alt="Logo Game Connect" />
      </div>
      <div className="hero-content">
        <h2>A COMUNIDADE GAMER FEITA PARA VOCÊ</h2>
        <p>Compartilhe experiências, descubra novos jogos e conecte-se com outros players.</p>
        <button className="btn btn-primary">Explorar comunidade</button>
      </div>
    </section>
  );
}

export default Hero;
