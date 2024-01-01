import { useState } from 'react'
import './Content.css'

function Content({ gameInfos = [] }) {
    const [curIndex, setCurIndex] = useState(0)

    const len = gameInfos.length

    const nextGame = () => {
        setCurIndex((preIndex) => (preIndex + 1) % len)
    }

    const prevGame = () => {
        setCurIndex((preIndex) => (preIndex - 1 + len) % len)
    }


    return (
        <div className="content">
            <h1>Top Newest Games</h1>
            <div className='DisplayGame'>
                <div className='Info'>
                    <h4>{curIndex + 1}. {gameInfos[curIndex].name}</h4>
                </div>
                <div className='Shot'>
                    <img src={gameInfos[curIndex].imageUrl} alt='IMG'></img>
                </div>
            </div>
            <button onClick={prevGame}><i className='fa-solid fa-arrow-left'></i></button>
            <button onClick={nextGame}><i className='fa-solid fa-arrow-right'></i></button>
        </div>
    )
}

export default Content