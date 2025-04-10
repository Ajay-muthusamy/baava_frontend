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
        <table className="inline-table w-full">
          <thead className="">
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub-Total</th>
            </tr>
          </thead>
          <tbody>
            {selecteditems.map((cart, index) => (
              <tr key={index} className="text-center mt-5">
                <td>{cart.title}</td>
                <td>{cart.price}</td>
                <td>{cart.quantity}</td>
                <td>{cart.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
