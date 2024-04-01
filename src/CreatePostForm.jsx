import React, { useState } from 'react';


let CreatePostForm =({addPost}) =>{

    //State the title and content of a new post
const [title, setTitle] = useState("");
const [content, setContent] = useState("");

//Handle submittions
let handleSubmit = (event)=>{
    event.preventDefault();

    if(title === "" || content === ""){
        alert("Please Enter The Title and Content of the Post");
    }
    else{
        addPost({title, content});
            setTitle("")
            setContent("")
    }
}
    return(
        <div>
           <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)} // Update title state on change
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(event) => setContent(event.target.value)} // Update content state on change
      ></textarea>
      <button type="submit">Post</button>
    </form>
  ;
        </div>

    )
}


export default CreatePostForm;