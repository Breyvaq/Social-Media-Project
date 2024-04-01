import React, { useState } from 'react';
import Comment from './Comment';

function Post({ title, content }) { // Destructure title and content from props
  const [likes, setLikes] = useState(0);
  
  function handleLike() {
    setLikes(likes + 1);
  }
  
  return (
    <div>
      <h2>{title}</h2> {/* Display the title */}
      <h4>{content}</h4> {/* Display the content */}
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Comment content="This is a test comment!" />
    </div>
  );
}

export default Post;
