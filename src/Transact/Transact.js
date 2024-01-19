import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './transact.css';

function Transact({ user }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cart/show/${user.id}`);
        setItems(response.data.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [user.id]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = items.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [items]);

  const handleUpdateTransaction = async () => {
    try {
      // Create an array of promises for each game in items
      const updatePromises = items.map(async (game) => {
        const game_id = game.game_id;
        await axios.put(`http://127.0.0.1:8000/api/cart/update/${user.id}`, {
          game_id,
          transaction_bank: "BIDV",
        });
        toast.success(`Game ${game.game} updated successfully.`);
      });

      // Wait for all promises to complete
      await Promise.all(updatePromises);

      // Clear the cart after updating
      setItems([]);

      toast.success('Transaction updated successfully.');
    } catch (error) {
      console.error('Error updating transaction:', error);
      toast.error('Error updating transaction.');
    }
  };

  const handleNavigateHome = () => {
    // You can navigate to the home page or any other route
    navigate('/');
  };

  return (
    <div className='transact'>
      <h2>Transaction Details</h2>
      <ul>
        {items.map((game, index) => (
          <li key={index}>
            {game.game} - {game.price}
          </li>
        ))}
      </ul>
      <div>
        <strong>Total Price: {totalPrice}</strong>
      </div>
      <button onClick={handleUpdateTransaction}>Process Transaction</button>
      <button onClick={handleNavigateHome}>Go to Home</button>
      <ToastContainer />
    </div>
  );
}

export default Transact;
