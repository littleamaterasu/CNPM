import { useState, useEffect } from "react";
import { getUserById } from "../../../../service/getUserById";

function Download({ game }) {
    const [gameData, setGameData] = useState(null);
    const url = 'https://jsonplaceholder.typicode.com/photos';

    console.log(game.id)

    useEffect(() => {
        const getGame = async () => {
            try {
                const gameData = await getUserById(url, game.id);
                setGameData(gameData);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        };
        getGame();
    }, [game]);

    return <button>
        <a>Download</a>
    </button>;
}

export default Download;
