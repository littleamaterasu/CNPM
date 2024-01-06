import './GameContent.css'
import Download from './Download/Download'
import Post from './Post/Post'
import { useState } from 'react'
function GameInfo({ gameSelected }) {
    const [listPost, setListPost] = useState([])

    const handleSetListPost = (e) => {
        setListPost([...listPost, e])
    }

    return (
        <div className="GameContent">
            <h4>{gameSelected.name}</h4>
            <Download game={gameSelected} />
            <Post handleSetListPost={handleSetListPost} />
            <h2>Submitted Posts</h2>
            <ul>
                {listPost.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    )
}

export default GameInfo