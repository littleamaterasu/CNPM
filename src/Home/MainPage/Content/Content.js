import { useState } from 'react'
import './Content.css'

function Content({ gameInfos = [] }) {
    const [curIndex, setCurIndex] = useState(0)

    const len = gameInfos.length

    // const choosePage = () => {
    //     setCurIndex()
    // }

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
                    <h4>{curIndex + 1}. {gameInfos[curIndex].game}</h4>
                    <img src={gameInfos[curIndex].img1} alt='IMG'></img>
                    <img src={gameInfos[curIndex].img2} alt='IMG'></img>
                    <br></br>
                    <img src={gameInfos[curIndex].img3} alt='IMG'></img>
                    <img src={gameInfos[curIndex].img4} alt='IMG'></img>
                </div>
                <div className='Shot'>
                    <img src={gameInfos[curIndex].img} alt='IMG'></img>
                </div>
            </div>
            <button onClick={prevGame}><i className='fa-solid fa-arrow-left'></i></button>
            <button onClick={nextGame}><i className='fa-solid fa-arrow-right'></i></button>
        </div>
    )
}

export default Content