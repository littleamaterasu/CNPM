import { useState, useEffect } from 'react';
import './Content.css';

function Content({handleSetActive}) {
  const [gameInfos, setGameInfos] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/game/index');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGameInfos(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the component mounts

  const len = gameInfos.length;

  const nextGame = () => {
    setCurIndex((preIndex) => (preIndex + 1) % len);
  };

  const prevGame = () => {
    setCurIndex((preIndex) => (preIndex - 1 + len) % len);
  };

  if (gameInfos.length === 0) {
    return <p style={{ color: 'white', fontSize: '40px', paddingLeft: '200px' }}>Loading...</p>;
  }

  return (
    <div className="content">
      <h1>Top Newest Games</h1>
      <div className='DisplayGame'>
        <button className='arrow-button' onClick={prevGame}><i className='fa-solid fa-arrow-left'></i></button>
        <div className='GameInfo'>
          <div className='Info'>
            <h4>{curIndex + 1}. {gameInfos[curIndex].name}</h4>
          </div>
          <div className='Shot'>
            <img src={gameInfos[curIndex].image.replace("http://127.0.0.1:8000/storage/", "")} alt='IMG'></img>
          </div>
        </div>
        <button className='arrow-button' onClick={nextGame}><i className='fa-solid fa-arrow-right'></i></button>
      </div>
    </div>
  );
}

export default Content;
