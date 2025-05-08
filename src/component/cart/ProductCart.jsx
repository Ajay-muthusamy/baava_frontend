import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductCart = () => {
  const location = useLocation();
  const data = location.state.array;
  const totalAmount = location.state.total;

  return (
    <div className="bg-gradient-to-r from-gray-100 to-blue-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        
     
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition-shadow"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">₹{item.subtotal}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Summary */}
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
          <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-bold py-2 rounded-md shadow">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
