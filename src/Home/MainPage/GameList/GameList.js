import './GameList.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GameList({ user, gameSelectedList, handleSetActive }) {

    console.log(gameSelectedList);

    const addToCart = async (gameId) => {
        
        if (!user || !user.id) {
            toast.error('You are not loggin in as a Player!');
            return;
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/cart/add/${user.id}`, {
                game_id: gameId
            });
            toast.success(`Game ${gameId} added to cart successfully.`);
        } catch (error) {
            toast.error('You have already had this game or do not have role to buy!');
        }
    };

    if (gameSelectedList.length === 0) {
        return (
            <div className="GameList">

            </div>
        );
    }

    return (
        <div className="GameList">
            <ul>
                {gameSelectedList.map((Data, Key) => (
                    <li key={Key}>
                        <h3 onClick={() => handleSetActive("GameInfo", Data)}>{Data.name} - {Data.genre}</h3>
                        <img src={Data.image.replace("http://127.0.0.1:8000/storage/", "")} alt='IMG'/>
                        <button onClick={() => addToCart(Data.game_id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <ToastContainer />
        </div>
    );
}

export default GameList;
