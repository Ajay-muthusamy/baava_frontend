import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const selecteditems = location.state.array || {};
  console.log(selecteditems);

  return (
    <div>
      <div className="text-center pt-4">
        <h1 className="font-poppins font-semibold text-xl">Items in Cart</h1>
      </div>
      <div className="flex justify-around items-center pt-8">
        <table className="min-w-[60vw] table-auto border rounded-lg shadow-lg">
          <thead className="">
            <tr>
              <th className="text-lg bg-gray-200 py-3">Title</th>
              <th className="text-lg bg-gray-200 py-3">Price</th>
              <th className="text-lg bg-gray-200 py-3">Quantity</th>
              <th className="text-lg bg-gray-200 py-3">Sub-Total</th>
            </tr>
          </thead>
          <tbody>
            {selecteditems.map((cart, index) => (
              <tr key={index} className="text-center mt-5">
                <td className="p-4 text-md font-kanit">{cart.title}</td>
                <td className="p-4 text-md font-kanit">{cart.price}</td>
                <td className="p-4 text-md font-kanit">{cart.quantity}</td>
                <td className="p-4 text-md font-kanit">{cart.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
