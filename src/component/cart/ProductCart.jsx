import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../slice/CustomerSlice";
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  // ✅ State to hold products from localStorage
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setLocalProducts(JSON.parse(stored));
    }
  }, []);

  // ✅ Prefer localStorage if available, else Redux
  const data =
    localProducts.length > 0
      ? localProducts
      : products?.[0]?.updatedata?.products || [];

  const totalAmount = data.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-blue-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Shopping Cart
          </h1>

          {data.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition-shadow"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">
                    {item.title}
                  </h2>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex gap-12">
                  <div>
                    <p className="text-lg font-bold text-green-600">
                      ₹{item.subtotal}
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-1xl gap-5">
                    <button
                      className="text-2xl bg-gray-300 rounded-md p-2"
                      onClick={() => dispatch(increaseQuantity(item.title))}
                    >
                      +
                    </button>
                    <h1>{item.quantity}</h1>
                    <button
                      className="text-2xl bg-gray-300 rounded-md p-2"
                      onClick={() => dispatch(decreaseQuantity(item.title))}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800 font-medium">₹{totalAmount}</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-800 font-medium">₹0</span>
          </div>
          <div className="border-t pt-4 flex justify-between items-center text-xl font-bold">
            <span>Total</span>
            <span className="text-green-700">₹{totalAmount}</span>
          </div>
          <button
            className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-bold py-2 rounded-md shadow"
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
      </div>
    </div>
  );
};

export default ProductCart;
