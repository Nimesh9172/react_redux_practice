import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cartItems);
  // console.log(showCart.notification.status)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {
    const interval = setTimeout(function () {
      if (isInitial) {
        isInitial = false;
        return;
      }
      if (cart.isChanged){
        dispatch(sendCartData(cart));
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [cart, dispatch]);

  return (
    <Fragment>
      {showCart.notification && (
        <Notification
          status={showCart.notification.status}
          title={showCart.notification.title}
          message={showCart.notification.message}
        />
      )}
      <Layout>
        {showCart.showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
