import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ setShowCart }) => {
  const { cartItems, subTotal } = useContext(Context);

//   Payment Integration
    // const makePayment =  async () => {
    //     const stripe = await loadStripe("pk_test_51NuGlESF954oviABQMEF2ziOMKOAAoCG2UIJ4PKZlscYQdDwvBlD8jWVhxxper1EAHN4KVtIWnUnGNmmSRYFLjTt00xAdTvFHH");
        
    //     const body = {
    //         products:cartItems
    //     }

    //     const headers = {
    //         "Content-type" : "application/json"
    //     }

    //     const response = await fetch("http://localhost:7000/api/create-checkout-session", {
    //         method:"POST",
    //         headers:headers,
    //         body:JSON.stringify(body)
    //     });

    //     const session = await response.json();

    //     const result = stripe.redirectToCheckout({
    //         sessionId:session.id
    //     })

    //     if(result.error){
    //         console.log(result.error);
    //     }
    
    // }

    const makePayment= () => {
        console.log("Thank You");
        alert("Thank you for shopping with us")
    }

//   const stripePromise = loadStripe(
//     process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
//   );
//   const handlePayment = async () => {
//     try {
//       const stripe = await stripePromise;
//       const res = await makePaymentRequest.post("/api/orders", {
//         products: cartItems,
//       });

//       await stripe.redirectToCheckout({
//         sessionId: res.data.stripeSession.id,
//       });
//     } catch (error) {
//         console.log(error);
//     }
//   };

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products Added</span>
            <button className="return-cta">Return to SHOP</button>
          </div>
        )}

        {cartItems?.length && (
          <>
            <CartItem />
            <dic className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377; {subTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={makePayment}>
                  Checkout
                </button>
              </div>
            </dic>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;


// 