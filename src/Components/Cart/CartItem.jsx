import { useDispatch } from "react-redux"
import dishesData from "../../data/dishesData"
import { removeItemFromCart } from "../../redux/cartSlice"

const CartItem = ({cartItem}) => {
    // console.log(cartItem)
    const dishes = dishesData.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch()
    // console.log(dishes)
    return (
        <div>
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} portion(s)</p>
            <p>Price: ${dishes.price * cartItem.quantity}</p>
            <span onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
            </span>
        </div>
    )
}

export default CartItem