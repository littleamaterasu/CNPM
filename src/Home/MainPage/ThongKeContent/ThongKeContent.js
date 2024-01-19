import { useEffect, useState } from "react"
import { getUserById } from "../../../service/getUserById"
import './ThongKeContent.css'

function ThongKeContent({user}) {
    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        var url
        if(user.role === "player") url = `http://127.0.0.1:8000/api/cart/index`
        else if(user.role === "game_publisher") url = `http://127.0.0.1:8000/api/game/show`
        const getUser = async () => {
            const userr = await getUserById(url, user.id)
            if(userr) {
                console.log(userr)
                setUserData(userr.data)
            }
        }
        getUser()
    },[user.id])
    if (user.role === "game_publisher") return (
        <div className="TK">
            <h1>Uploaded games</h1>
            {
                (userData.length > 0 && (
                    <ul>
                        {userData.map((gameSelected, key) => (
                            <li key={key}>
                                <div className='GameInfo'>
                                    <div className='Info'>
                                        <h4>{gameSelected.name} - {gameSelected.seller}</h4>
                                        <img src={gameSelected.image.replace("http://127.0.0.1:8000/storage/", "")} alt='IMG'></img>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )) || <h4>0 game uploaded</h4>
            }
        </div>

    )
    return (
        <div className="TK">
            <h1>Purchased games</h1>
            {
                (userData.length > 0 && (
                    <ul>
                        {userData.map((gameSelected, key) => (
                            <li key={key}>
                                <div className='GameInfo'>
                                    <div className='Info'>
                                        <h4>{gameSelected.game} - {gameSelected.publisher}</h4>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )) || <h4>0 game purchased</h4>
            }
        </div>
    )
}

export default ThongKeContent