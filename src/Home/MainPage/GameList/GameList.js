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
                    <li onClick={() => handleSetActive("GameInfo", Data)} key={Key}>
                        {Data.name} (ID: {Data.id})
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default GameList