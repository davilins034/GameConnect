import React from 'react';

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="widget">
        <h4>Top Usuários</h4>
        <ol>
          <li>ProGamer</li>
          <li>IndieFan</li>
          <li>User123</li>
        </ol>
      </div>
      <div className="widget">
        <h4>Em Alta</h4>
        <div className="trending-item">
          <p>Cyberpunk 2077</p>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;