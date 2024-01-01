import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import './MainPage.css'

const defaultImageUrl = 'https://c4.wallpaperflare.com/wallpaper/825/375/685/dota-2-wallpaper-preview.jpg';

const gameInfos = [
  { game: 'Super Adventure', img: defaultImageUrl },
  { game: 'Galactic Quest', img: defaultImageUrl },
  { game: 'Mystic Legends', img: defaultImageUrl },
  { game: 'Epic Conquest', img: defaultImageUrl },
  { game: 'Pixel Rivals', img: defaultImageUrl },
  { game: 'Inferno Dominion', img: defaultImageUrl },
  { game: 'Neon Nexus', img: defaultImageUrl },
  { game: 'Rogue Legacy', img: defaultImageUrl },
  { game: 'Quantum Fusion', img: defaultImageUrl },
  { game: 'Skyward Horizon', img: defaultImageUrl },
]
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
  ]

function MainPage() {
    return (
        <div className="MainPage">
            <SideBar categories={categories} />
            <Content gameInfos={gameInfos}/>
        </div>
    );
}

export default MainPage