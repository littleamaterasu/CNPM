import { useState } from 'react'
import Header from './Header/Header'
import SideBar from './MainPage/SideBar/SideBar'
import Content from './MainPage/DefaultContent/Content'
import ThongKeContent from './MainPage/ThongKeContent/ThongKeContent'
import GameInfo from './MainPage/GameContent/GameContent'
import GameList from './MainPage/GameList/GameList'
import ChangeInfo from './MainPage/ChangeInfo/ChangeInfo'
import Cart from './MainPage/Cart/Cart'
import './Home.css'

const categories = [
    'RPG',
    'FPS',
    'Puzzle',
    'Action',
    'Sport',
];

function Home({ user, handleSetUser, handleSetItem }) {

    const [active, setActive] = useState("default")
    const [gameSelected, setGameSelected] = useState(null)
    const [gameSelectedList, setGameSelectedList] = useState([])

    const handleSetGameSelectedList = (e) => {
        setGameSelectedList(e)
    }



    const handleSetActive = (name, game = null) => {
        setActive(name)
        setGameSelected(game)
    }
    return (
        <div>
            <Header user={user} handleSetUser={handleSetUser} handleSetActive={handleSetActive} handleSetGameSelectedList={handleSetGameSelectedList} />
            <div className='mainpage'>
                <SideBar categories={categories} handleSetGameSelectedList={handleSetGameSelectedList} handleSetActive={handleSetActive} />
                <div className='cnt'>
                    {
                        (active === "default" && <Content user={user} handleSetActive={handleSetActive} />)
                        || (active === "Thongke" && <ThongKeContent user={user} />)
                        || (active === "GameInfo" && <GameInfo user={user} gameSelected={gameSelected} />)
                        || (active === "gameSelectedList" && <GameList user={user} gameSelectedList={gameSelectedList} handleSetActive={handleSetActive} />)
                        || (active === "ChangeInfo" && <ChangeInfo user={user} handleSetUser={handleSetUser} />)
                        || (active === "Cart" && <Cart handleSetItem={handleSetItem} user={user} />)
                        || <h3>Error</h3>
                    }
                </div>
            </div>

        </div>
    )
}

export default Home