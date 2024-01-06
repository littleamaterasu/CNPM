import './GameList.css'

function GameList({ gameSelectedList, handleSetActive }) {

    if (gameSelectedList.length === 0) return (
        <div className="GameList">
            <h3>No result</h3>
        </div>)

    return (
        <div className="GameList">
            {<ul>
                {gameSelectedList.map((Data, Key) => (
                    <li key={Key}>
                        <h3 onClick={() => handleSetActive("GameInfo", Data)}>{Data.name} (ID: {Data.id})</h3>
                        {/* <input type='checkbox' onChange={}/> */}
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default GameList