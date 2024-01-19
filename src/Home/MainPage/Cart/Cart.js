// Assuming this code is in a file called Cart.js

import React, { useEffect, useState } from 'react';
import { getUserById } from '../../../service/getUserById';
import { Link } from 'react-router-dom';
import './Cart.css'

function Cart({ user, handleSetItem }) {
    const [cartData, setCartData] = useState([]);
    const url = 'http://127.0.0.1:8000/api/cart/show'

    useEffect(() => {
        const getCart = async () => {
            const usercart = await getUserById(url, user.id);
            if (usercart) {
                setCartData(usercart.data);
                handleSetItem(usercart.data)
            }
        };
        getCart()
    }, []);

    return (
        <div className='Cart'>
            <h2>Your Cart</h2>
            {cartData === null || cartData.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartData.map((game, index) => (
                            <li key={index}>
                                <h3>name: {game.game}</h3>
                                <h3>publisher: {game.publisher}</h3>
                            </li>
                        ))}
                    </ul>
                    <Link to="/transact"><button>Purchase</button></Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
