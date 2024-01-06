import { FaShoppingCart } from "react-icons/fa"
import './cart.css'

function ShoppingCart() {
    return (
        <div className="cart">
            <FaShoppingCart style={{ color: 'white' }} />
        </div>
    )
}

export default ShoppingCart