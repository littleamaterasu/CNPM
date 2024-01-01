import { useState } from 'react'
import Header from './Header/Header'
import SideBar from './MainPage/SideBar/SideBar'
import Content from './MainPage/DefaultContent/Content'
import ThongKeContent from './MainPage/ThongKeContent/ThongKeContent'
import GameInfo from './MainPage/GameContent/GameContent'
import GameList from './MainPage/GameList/GameList'
import ChangeInfo from './MainPage/ChangeInfo/ChangeInfo'

const categories = [
    'Adventure',
    'Strategy',
    'Simulation',
    'Role-Playing',
    'Puzzle',
    'Action',
    'Sports',
    'Horror',
    'Educational',
    'Casual'
];

const games = [
    {
        id: 1,
        name: 'Epic Quest Chronicles',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 2,
        name: 'Galactic Odyssey',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 3,
        name: 'Mystic Legends: Awakening',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 4,
        name: 'Shadowbane Legacy',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 5,
        name: 'Chrono Rift: Resurgence',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 6,
        name: 'Inferno Saga',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 7,
        name: 'Aetherial Conquest',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 8,
        name: 'Dragonheart Legacy',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 9,
        name: 'Nebula Frontier: Exodus',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
    {
        id: 10,
        name: 'Legends of Valoria',
        imageUrl: 'https://www.godisageek.com/wp-content/uploads/Back-to-Bed-review.jpg',
    },
];

function Home() {
    const [active, setActive] = useState("default")
    const [gameSelected, setGameSelected] = useState(null)
    const [gameSelectedList, setGameSelectedList] = useState([])

    const handleSetGameSelectedList = (e) => {
        setGameSelectedList(e)
    }

    const handleSetActive = (name, game = null) => {
        console.log(name)
        setActive(name)
        setGameSelected(game)
    }
    return (
        <div>
            <Header handleSetActive={handleSetActive} handleSetGameSelectedList={handleSetGameSelectedList} />
            <SideBar categories={categories} />
            {
                (active === "default" && <Content gameInfos={games} />)
                || (active === "Thongke" && <ThongKeContent />)
                || (active === "GameInfo" && <GameInfo gameSelected={gameSelected} />)
                || (active === "gameSelectedList" && <GameList gameSelectedList={gameSelectedList} handleSetActive={handleSetActive} />)
                || (active === "ChangeInfo" && <ChangeInfo />)
                || <h3>Error</h3>
            }
        </div>
    )
}

export default Home