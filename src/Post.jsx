import React, { useState } from 'react';
import Comment from './Comment';

function Post({ title, content }) { // Destructure title and content from props
  const [likes, setLikes] = useState(0);
  
  function handleLike() {
    setLikes(likes + 1);
  }
  
  return (
    <div className="post-container">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <div className="likes-section">
        <span className="likes-count">Likes: {likes}</span>
        <button onClick={handleLike} className="like-button">Like</button>
      </div>
    </div>
  );
}

export default Post;
