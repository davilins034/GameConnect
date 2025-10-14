import React from 'react';
import './App.css';

// imports dos componentes
import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Montando a página com os componentes */}
      <Cabeçalho />
      <main className="container">
        <Hero />
        <JogosPopulares />
        <PostsRecentes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
