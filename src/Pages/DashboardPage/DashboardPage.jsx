import React, { useState } from 'react';
import './DashboardPage.styles.css';

// 1. Importe os componentes que acabamos de criar
import LeftSidebar from '../../components/Dashboard/LeftSidebar';
import MainFeed from '../../components/Dashboard/MainFeed';
import RightSidebar from '../../components/Dashboard/RightSidebar';

// Os dados falsos podem continuar aqui por enquanto
const initialPosts = [
  {
    id: 1,
    author: 'User123',
    timestamp: '2 horas atrás',
    category: '#FPS',
    title: 'Bug no matchmaking do CS',
    content: 'Alguém mais enfrentando problemas de fila no matchmaking desde a atualização?',
    votes: 12,
  },
  {
    id: 2,
    author: 'IndieFan',
    timestamp: '5 horas atrás',
    category: '#Indie',
    title: 'Qual RPG indie devo jogar?',
    content: 'Procuro algo com narrativa forte e poucas horas de jogo.',
    votes: 5,
  },
  {
    id: 3,
    author: 'OrgAdmin',
    timestamp: '1 dia atrás',
    category: '#Esports',
    title: 'Torneio semanal – inscrição aberta',
    content: 'Inscrições abertas para o torneio 5v5 deste fim de semana. Vagas limitadas!',
    votes: 9,
  }
];

function DashboardPage() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    // 2. O JSX agora é muito mais limpo!
    <div className="dashboard-container">
      <LeftSidebar />
      <MainFeed posts={posts} />
      <RightSidebar />
    </div>
  );
}

export default DashboardPage;