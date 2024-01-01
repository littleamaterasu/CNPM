import { useState } from 'react'
import './Content.css'

function Content({gameInfos = []}) {
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
            <h2>Top Newest Games</h2>
            <div className='DisplayGame'>
                <h4>{curIndex + 1}. {gameInfos[curIndex].game}</h4>
                <img src={gameInfos[curIndex].img} alt='IMG'></img>
                <br></br>
                <button onClick={prevGame}>Prev</button>
                <button onClick={nextGame}>Next</button>
            </div>
        </div>
    )
}

export default Content