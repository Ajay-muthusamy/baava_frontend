import React, { useEffect, useState } from "react";

const ProductCart = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const savedCartData = localStorage.getItem("customerDetails");
    if (savedCartData) {
      try {
        const parsedData = JSON.parse(savedCartData);
        console.log("Cart Data:", parsedData);
        setCartData(parsedData.updatedata); // ✅ access updatedata properly
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {!cartData ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Product</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartData.products?.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">₹{item.price}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">₹{item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 font-semibold text-lg">
            Total: ₹{cartData.totalAmount}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCart;
