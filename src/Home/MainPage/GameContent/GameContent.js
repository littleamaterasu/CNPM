import './GameContent.css'
import Download from './Download/Download'
import Post from './Post/Post'

function GameInfo({ gameSelected, handleSetListPost, listPost }) {
    const contentFilter = listPost.filter((post) => post.game === gameSelected.name)
    return (
        <div className="GameContent">
            <h4>{gameSelected.name}</h4>
            <Download game={gameSelected} />
            <Post handleSetListPost={handleSetListPost} gameSelected={gameSelected} />
            <h2>Submitted Posts</h2>
            <ul>
                {contentFilter.map((post, index) => (
                    <li key={index}>{post.post}</li>
                ))}
            </ul>
        </div>
    )
}

export default GameInfo