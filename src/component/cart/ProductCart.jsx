import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingCart, Sparkles, Star } from 'lucide-react';

const ProductCart = () => {
  // Get cart data from localStorage
  const [cartItems, setCartItems] = useState([]);

  // Load cart data on component mount
  useEffect(() => {
    const storedCustomerDetails = localStorage.getItem("customerDetails");
    console.log("LocalStorage Data:", storedCustomerDetails);
    if (storedCustomerDetails) {
      try {
        const parsedData = JSON.parse(storedCustomerDetails);

        // ✅ Correct structure: updatedata -> products (array)
        if (
          parsedData.updatedata &&
          Array.isArray(parsedData.updatedata.products)
        ) {
          const formattedItems = parsedData.updatedata.products.map(
            (item, index) => ({
              id: index + 1,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              subtotal: item.subtotal,
              // placeholder image
              image: `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop&sig=${index}`,
            })
          );
          setCartItems(formattedItems);
        }
      } catch (error) {
        console.error("Error parsing stored cart data:", error);
        setCartItems([]);
      }
    }
  }, []);

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    country: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);

  // Easter Egg State
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [fireworks, setFireworks] = useState([]);

  // Calculate totals
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  // Easter Egg: Click the cart icon 5 times for fireworks!
  const handleCartIconClick = () => {
    setClickCount((prev) => prev + 1);

    if (clickCount + 1 === 5) {
      triggerFireworks();
      setClickCount(0);
    }
  };

  const triggerFireworks = () => {
    setEasterEggTriggered(true);

    const newFireworks = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 80 + 10,
      animationDelay: Math.random() * 2,
      color: [
        "text-red-400",
        "text-blue-400",
        "text-yellow-400",
        "text-green-400",
        "text-purple-400",
      ][Math.floor(Math.random() * 5)],
    }));

    setFireworks(newFireworks);

    setTimeout(() => {
      setEasterEggTriggered(false);
      setFireworks([]);
    }, 4000);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((items) => {
      const updatedItems = items
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + delta);
            return {
              ...item,
              quantity: newQuantity,
              subtotal: newQuantity * item.price,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      updateLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const removeItem = (id) => {
    setCartItems((items) => {
      const updatedItems = items.filter((item) => item.id !== id);
      updateLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  // ✅ Correct localStorage update
  const updateLocalStorage = (items) => {
    const formattedData = {
      updatedata: {
        products: items.map((item) => ({
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          subtotal: item.subtotal,
        })),
        totalAmount: items.reduce((sum, i) => sum + i.subtotal, 0),
      },
    };
    localStorage.setItem("customerDetails", JSON.stringify(formattedData));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const phonePattern = /^[0-9]{10}$/;

    if (!customerDetails.name) errors.name = "Name is required";
    if (!customerDetails.phone || !phonePattern.test(customerDetails.phone))
      errors.phone = "Valid 10-digit phone number is required";
    if (!customerDetails.whatsapp)
      errors.whatsapp = "WhatsApp number is required";
    if (!customerDetails.country) errors.country = "State is required";
    if (!customerDetails.address) errors.address = "Address is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      const orderData = {
        customerDetails,
        items: cartItems,
        totalItems,
        totalAmount,
        orderDate: new Date().toISOString(),
      };

      alert(
        `🎆 Order placed successfully! We'll contact you at ${customerDetails.phone}. Total: ₹${totalAmount}`
      );

      setCartItems([]);
      localStorage.removeItem("customerDetails");

      console.log("Order Data:", orderData);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Add some fireworks to light up your celebration!
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Easter Egg Fireworks */}
      {easterEggTriggered && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {fireworks.map((firework) => (
            <div
              key={firework.id}
              className={`absolute animate-bounce ${firework.color}`}
              style={{
                left: `${firework.left}%`,
                animationDelay: `${firework.animationDelay}s`,
                animationDuration: "2s",
              }}
            >
              <Sparkles className="w-8 h-8" />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-2 animate-pulse">🎆 BOOM! 🎆</h1>
              <p className="text-xl">You found the Easter egg!</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCartIconClick}
                className="relative hover:scale-110 transition-transform"
                title="Click me 5 times for a surprise! 🎆"
              >
                <ShoppingCart className="w-8 h-8 text-blue-600" />
                {clickCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {clickCount}
                  </span>
                )}
              </button>
              <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">
                Total Items: {totalItems}
              </div>
              <div className="text-2xl font-bold text-green-600">
                ₹{totalAmount}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  Cart Items
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          ₹{item.price}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>

                        <span className="text-xl font-semibold w-12 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-800">
                          ₹{item.subtotal}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 mt-1"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Customer Details
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={customerDetails.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your name"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerDetails.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="10-digit phone number"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={customerDetails.whatsapp}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.whatsapp ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="WhatsApp number"
                  />
                  {formErrors.whatsapp && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.whatsapp}
                    </p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={customerDetails.country}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.country ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your state"
                  />
                  {formErrors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.country}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    rows="3"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Full address"
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.address}
                    </p>
                  )}
                </div>

                {/* Order Summary */}
                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
                    <span>Total Amount:</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Place Order</span>
                  <Star className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Our team will contact you within 24 hours to confirm your
                  order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
