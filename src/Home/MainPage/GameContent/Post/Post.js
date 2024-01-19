import React, { useState } from 'react';
import './Post.css';

const Post = ({ gameSelected, user }) => {
  console.log(gameSelected.game_id)
  const [postContent, setPostContent] = useState('');
  const [errorNotification, setErrorNotification] = useState('');

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
    setErrorNotification('');
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/feedback/create/${user.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          game_id: gameSelected.game_id,
          content: postContent
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          setErrorNotification("You need to buy this game before posting feedback.");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } else {
        setPostContent('');
        setErrorNotification('');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
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
      {errorNotification && <p className="error-notification">{errorNotification}</p>}
      <button onClick={handleSubmit}>Submit Post</button>
    </div>
  );
};

export default Post;
