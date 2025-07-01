import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())

    }

      return <div className=" m-3 p-3">
        <h1 className="font-bold text-2xl text-center">Cart</h1>
        <button 
        className="p-2 m-2 bg-amber-600 rounded-lg text-white"
        onClick={handleClearCart}
        >Clear cart</button>
        <div className="text-center font-bold text-3xl">
        {
            cartItems.length === 0 && (<h1>Your cart is empty . Add some items 🥐🥓🥚🍕🍕🍟</h1>)
        }
        </div>
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems} />
        </div>
        </div>


};

export default Cart;