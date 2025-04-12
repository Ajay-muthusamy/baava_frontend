import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import letterhead from "../../../assets/baavalettterhead2.png"

const Payment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const location = useLocation();
  const list = location.state.array || {};
  const amount=location.state.total;
  console.log(list);
  console.log(amount);

  return (
    <div>
      <div className="font-poppins font-semibold text-xl text-center py-3">
        <h1>Customer Details</h1>
      </div>
      <div className="flex justify-between ms-10 me-10  h-auto font-poppins py-12">
        <div>
          <form action="">
            <div className="flex flex-col justify-center items-center shadow-md rounded-xl p-5">
              <div className="py-4 flex justify-center items-baseline gap-7">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your name"
                  className="w-[25vw] h-10 border-b-2 rounded-md shadow-lg p-2 bg-gray-50"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="py-4 flex gap-4 justify-center items-baseline">
                <label htmlFor="">Address</label>
                <textarea
                  name=""
                  id=""
                  placeholder="Enter your Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-[25vw] h-24 border-b-2 shadow-lg rounded-md p-2 bg-gray-50"
                ></textarea>
              </div>
              <div className="py-4 flex justify-center items-baseline gap-9">
                <label htmlFor="">Phone</label>
                <input
                  type="tel"
                  maxLength={10}
                  onChange={(e) => setPhone(e.target.value)}
                  name=""
                  id=""
                  placeholder="Enter your Phone Number"
                  className="w-[25vw] h-10 shadow-lg rounded-md border-b-2 p-2 bg-gray-50"
                />
              </div>
              <div className="py-6">
                <button className="px-3 py-2 shadow-lg rounded-lg hover:scale-105 text-white bg-blue-600">
                  Order Now
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex-col justify-center items-center w-[50vw] ">
          <div className="flex justify-center">
            <img src={letterhead} alt="" className="w-[35vw]"/>
          </div>
          <div className="py-3">
            <h1>{name}</h1>
          </div>
          <div className="py-3">
            <p className="whitespace-pre-wrap break-words w-[30vw]">
              {address}
            </p>
          </div>
          <div className="py-3">
            <h1>{phone}</h1>
          </div>

          <div>
            <div className="flex justify-around items-center pt-8">
              <table className="min-w-[40vw] table-auto border rounded-lg shadow-lg">
                <thead className="">
                  <tr>
                    <th className="text-lg bg-gray-200 py-3">Title</th>
                    
                    <th className="text-lg bg-gray-200 py-3">Quantity</th>
                    <th className="text-lg bg-gray-200 py-3">Sub-Total</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((data, index) => (
                    <tr key={index} className="text-center mt-5">
                      <td className="p-4 text-md font-kanit">{data.title}</td>
                      
                      <td className="p-4 text-md font-kanit">
                        {data.quantity}
                      </td>
                      <td className="p-4 text-md font-kanit">
                        {data.subtotal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-[50vw] flex justify-center items-center text-xl font-kanit font-medium pt-8">
        <h1>Total Amount &nbsp; : &nbsp; ₹ &nbsp;{amount}</h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
