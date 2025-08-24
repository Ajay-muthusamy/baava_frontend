import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../slice/CustomerSlice";
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed[0]?.updatedata?.products) {
        setLocalProducts(parsed[0].updatedata.products);
      }
    }
  }, []);

  const data =
    localProducts.length > 0
      ? localProducts
      : products?.[0]?.updatedata?.products || [];

  const totalAmount = data.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div>
      <h1>Your Shopping Cart</h1>

      {data.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₹{item.price}</p>
            <p>Subtotal: ₹{item.subtotal}</p>

            <div>
              <button onClick={() => dispatch(increaseQuantity(item.title))}>
                +
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(decreaseQuantity(item.title))}
                disabled={item.quantity <= 1}
              >
                -
              </button>
            </div>
          </div>
        ))
      )}

      <h2>Order Summary</h2>
      <p>Subtotal: ₹{totalAmount}</p>
      <p>Shipping: ₹0</p>
      <p>Total: ₹{totalAmount}</p>

      <button
        disabled={data.length === 0}
        onClick={() =>
          navigate("/payment", {
            state: {
              cartData: data,
              finalAmount: totalAmount,
            },
          })
        }
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductCart;
