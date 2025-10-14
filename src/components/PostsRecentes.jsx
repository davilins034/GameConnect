import React from 'react';

function RecentPosts() {
  const posts = [
    { id: 1, title: 'Qual a melhor mira para o Counter Strike da nova atualização?', author: 'Lucas034' },
    { id: 2, title: 'Procurando time para o campeonato amador de CS', author: 'CheiraBala103' },
    { id: 3, title: 'Dicas de formação para o Ultimate Team no FC26', author: 'ReiDoControle' },
    { id: 4, title: 'Melhores operadores para defesa em R6 Siege atualmente', author: 'Capitao_BR' },
    { id: 5, title: '5 jogos indie que você provavelmente não jogou e deveria!', author: 'ExploradordeJogos034' }
  ];

  return (
    <section className="recent-posts">
      <h3>Posts Recentes</h3>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <p>[{post.title}] - por {post.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentPosts;
