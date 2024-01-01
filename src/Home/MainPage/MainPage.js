import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import './MainPage.css'

const defaultImageUrl = 'https://c4.wallpaperflare.com/wallpaper/825/375/685/dota-2-wallpaper-preview.jpg';

const gameInfos = [
  { game: 'Super Adventure', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Galactic Quest', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Mystic Legends', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Epic Conquest', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Pixel Rivals', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Inferno Dominion', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Neon Nexus', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Rogue Legacy', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Quantum Fusion', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  { game: 'Skyward Horizon', img: defaultImageUrl, img1: defaultImageUrl, img2: defaultImageUrl, img3: defaultImageUrl, img4: defaultImageUrl },
  // Add more games with the same default image for img, img1, img2, img3, and img4 as needed
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