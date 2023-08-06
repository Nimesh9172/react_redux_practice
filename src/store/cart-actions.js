import { cartActions } from "./cart-slice";
import { cartItemActions } from "./cart-items-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-925d0-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "get",
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }

      const data = await response.json();
      
      dispatch(cartItemActions.replaceCart(data))
    };
    try {
      await fetchData();
    } catch (err) {
        console.log(err)
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to fetch Cart",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-925d0-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "put",
          body: JSON.stringify({items:cart.cartItem,totalQuantity:cart.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Cart data successfully",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
