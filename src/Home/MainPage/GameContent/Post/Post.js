import React, { useState } from 'react';
import './Post.css'

const Post = ({handleSetListPost}) => {
    const [postContent, setPostContent] = useState('');

    const handleInputChange = (e) => {
      setPostContent(e.target.value);
    };

    const handleSubmit = () => {
      handleSetListPost(postContent)
      setPostContent('');
    };
  
    return (
      <div className='post'>
        <h2>Create a New Post</h2>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your post here..."
          value={postContent}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <button onClick={handleSubmit}>Submit Post</button>

      </div>
    );
  };
  
  export default Post;