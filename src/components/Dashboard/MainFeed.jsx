import React from 'react';
import PostItem from './PostItem'; 

function MainFeed({ posts }) {
  return (
    <main className="main-feed">
      <div className="create-post-box">
        <textarea placeholder="No que você está pensando? Compartilhe com a comunidade..."></textarea>
        <button>Postar</button>
      </div>

      
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
      
      <button className="load-more-btn">Carregar mais</button>
    </main>
  );
}

export default MainFeed;