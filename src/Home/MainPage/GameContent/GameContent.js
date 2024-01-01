import './GameContent.css'
import Download from './Download/Download'
function GameInfo({gameSelected}){
    return (
        <div className="GameContent">
            <h4>{gameSelected.name}</h4>
            <Download game={gameSelected}/>
        </div>
    )
}

export default GameInfo