import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const cartData = location.state?.cartData || [];
  const finalAmount = location.state?.finalAmount || 0;

  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    country: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone || formData.phone.length !== 10)
      errors.phone = "Valid phone is required";
    if (!formData.whatsapp || formData.whatsapp.length !== 10)
      errors.whatsapp = "Valid WhatsApp number is required";
    if (!formData.country.trim()) errors.country = "Country is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(false);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleOnlinePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
  
    const totalAmount = cartData.reduce((sum, item) => sum + item.subtotal, 0);
  
    const customerDetail = {
      formData,
      cartData,
      finalAmount: totalAmount, // ensure correct amount
    };
  
    const options = {
      key: "rzp_test_4rdgre6savrrmw",
      amount: totalAmount * 100,
      currency: "INR",
      name: "BAAVA CRACKERS",
      description: "Online Payment",
      handler: async function (response) {
        alert(`Payment successful! Razorpay ID: ${response.razorpay_payment_id}`);
  
        try {
          await axios.post("https://baava-backend-new-1.onrender.com/user/data", customerDetail);
          alert("Customer data saved successfully!");
        } catch (error) {
          console.error("Error sending data to backend:", error);
          alert("Payment succeeded, but data not saved.");
        }
      },
      prefill: {
        name: formData.name,
        contact: formData.phone,
      },
      theme: {
        color: "#F59E0B",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  

  const handlePaymentConfirm = async () => {
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }

    const customerDetail = {
        formData,
        cartData,
        finalAmount
    }
    if (selectedPayment === "Cash on Delivery") {
        console.log("customer Data",formData);
        console.log("Cart Data",cartData);
        console.log("Final Amount",finalAmount);
      await axios.post("https://baava-backend-new-1.onrender.com/user/data",customerDetail);
    } else if (selectedPayment === "Online Payment") {
      handleOnlinePayment();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Payment Page</h1>

      {/* Cart Items */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
        {cartData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow mb-3 flex justify-between"
          >
            <span>{item.title}</span>
            <span>Qty: {item.quantity}</span>
            <span className="font-bold text-green-600">₹{item.subtotal}</span>
          </div>
        ))}
      </div>

      {/* Shipping Form */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

        {showModal || showEditForm ? (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["name", "phone", "whatsapp", "country", "address"].map(
                (field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="mt-1 p-2 w-full border rounded focus:ring focus:ring-yellow-300"
                    />
                    {formErrors[field] && (
                      <p className="text-red-500 text-sm">
                        {formErrors[field]}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded shadow"
            >
              Save Details
            </button>
          </form>
        ) : (
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>WhatsApp:</strong> {formData.whatsapp}
            </p>
            <p>
              <strong>Country:</strong> {formData.country}
            </p>
            <p>
              <strong>Address:</strong> {formData.address}
            </p>
            <button
              onClick={() => setShowEditForm(true)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
            >
              Edit Details
            </button>
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <div className="space-y-3">
          {["Cash on Delivery", "Online Payment"].map((method) => (
            <div key={method} className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={selectedPayment === method}
                onChange={() => setSelectedPayment(method)}
                className="w-4 h-4"
              />
              <label>{method}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <div className="text-center">
        <button
          onClick={handlePaymentConfirm}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg shadow-md"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
