import { useState } from 'react';
import './Content.css';

function Content({ gameInfos = [] }) {
  const [curIndex, setCurIndex] = useState(0);

  const len = gameInfos.length;

  const nextGame = () => {
    setCurIndex((preIndex) => (preIndex + 1) % len);
  };

  const prevGame = () => {
    setCurIndex((preIndex) => (preIndex - 1 + len) % len);
  };

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
            <img src={gameInfos[curIndex].imageUrl} alt='IMG'></img>
          </div>
        </div>
        <button className='arrow-button' onClick={nextGame}><i className='fa-solid fa-arrow-right'></i></button>
      </div>
    </div>
  );
}

export default Content;
