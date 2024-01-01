import './GameContent.css'
function GameInfo({gameSelected}){
    return (
        <div className="GameContent">
            <h4>{gameSelected.name}</h4>
        </div>
    )
}

export default GameInfo