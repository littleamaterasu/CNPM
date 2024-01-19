import { FaShoppingCart } from "react-icons/fa"
import './cart.css'

function ShoppingCart({handleSetActive}) {
    return (
        <div className="cart">
            <FaShoppingCart style={{ color: 'white' }} onClick={() => handleSetActive("Cart")}/>
        </div>
    )
}

export default ShoppingCart