

import { useState } from 'react'
import CreatePostForm from './CreatePostForm'
import Feed from './Feed';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from 'react';

function App(){ 
  const [posts, setPosts] = useState([]); // State to store posts

  // Function to add a new post to the posts state
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post at the beginning of the posts array
  };

  return(
    <div>
      <h1>Fakebook!</h1>
      
      <CreatePostForm addPost={addPost} />
      <Feed posts={posts} /> 
      
      
    
    </div>
  )
}
export default App