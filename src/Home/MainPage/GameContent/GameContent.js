import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import './GameContent.css';
import Post from './Post/Post';
import { Link } from 'react-router-dom';

function GameInfo({ gameSelected, user }) {
  const [feedbackData, setFeedbackData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/game/feedback/${gameSelected.game_id}`);
        console.log(response)
        setFeedbackData(response.data.data); 
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    // Fetch data when the component mounts or when gameSelected.id changes
    fetchData();
  }, [gameSelected.game_id]);

  return (
    <div className="GameContent">
      <button>Back to List</button>
      <div className='GameInfo'>
        <div className='Info'>
          <h4>{gameSelected.name} - published by {gameSelected.seller}</h4>
        </div>
        <div className='Shot'>
          <img src={gameSelected.image.replace("http://127.0.0.1:8000/storage/", "")} alt='IMG' />
        </div>
      </div>
      <div className='post'>
        <Post gameSelected={gameSelected} user={user}/>
        <h2>{feedbackData ? 'Feedbacks for this game' : 'No feedback yet'}</h2>
        {(feedbackData && feedbackData.length > 0 &&
          <ul>
            {feedbackData.map((feedback) => (
              <li key={feedback.id} className='feedback-item'>
                <h3><FaUser /> {feedback.user}</h3>
                <p>{feedback.content}</p>
              </li>
            ))}
          </ul>)}

      </div>
    </div>
  )


}

export default GameInfo;
