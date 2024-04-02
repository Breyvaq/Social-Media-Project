import React, { useState } from 'react';
import Comment from './Comment';

function Post({ title, content }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]); // State to store comments
  const [commentInput, setCommentInput] = useState(''); // State to store the current input of the comment field

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    if (!commentInput.trim()) return; // Prevent adding empty comments
    setComments([...comments, commentInput]);
    setCommentInput(''); // Reset input field after submitting
  }

  return (
    <div className="post-container">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <div className="likes-section">
        <span className="likes-count">Likes: {likes}</span>
        <button onClick={handleLike} className="like-button">Like</button>
      </div>
      {/* Comments form */}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentInput}
          onChange={(event) => setCommentInput(event.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Comment</button>
      </form>
      {/* Comments display */}
      {comments.map((comment, index) => (
        <Comment key={index} content={comment} />
      ))}
    </div>
  );
}

export default Post;
