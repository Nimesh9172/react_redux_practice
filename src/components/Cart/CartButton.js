import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {

  const totalQuantity = useSelector(state => state.cartItems.totalQuantity)
  // console.log(totalQuantity)

  const dispatch = useDispatch()

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
