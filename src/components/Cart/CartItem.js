import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../../store/cart-items-slice";

const CartItem = (props) => {
  const { id,title, quantity, total, price } = props.item;

  console.log(props.item);

  const dispatch = useDispatch()

  const addItemHandler  = () => {
    dispatch(cartItemActions.addItem({...props.item,quantity:1}))
  }

  const removeItemHandler = () => {
    dispatch(cartItemActions.removeItem(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
