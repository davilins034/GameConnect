import React from 'react';
import PostItem from './PostItem'; // 1. Importe o novo componente

function MainFeed({ posts }) {
  return (
    <main className="main-feed">
      <div className="create-post-box">
        <textarea placeholder="No que você está pensando? Compartilhe com a comunidade..."></textarea>
        <button>Postar</button>
      </div>

      {/* 2. Agora o map renderiza o componente PostItem para cada post */}
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
      
      <button className="load-more-btn">Carregar mais</button>
    </main>
  );
}

export default MainFeed;