import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addProducts } from "../../slice/CustomerSlice";
import { addcustomerDetails } from "../../slice/CustomerSlice.js";
import PremiumOneSound from "../json/PremiumOneSound.json";
import OneSound from "../json/OneSound.json";
import BombPremium from "../json/BombPremium.json";
import PaperBomb from "../json/PaperBomb.json";
import PremiumBlaster from "../json/PremiumBlaster.json";
import Blaster from "../json/Blaster.json";
import FlowerPotPremium from "../json/FlowerPotPremium.json";
import GroundChakraPremium from "../json/GroundChakaraPremium.json";
import FlowerPots from "../json/FlowerPots.json";
import FancyFountainPremium from "../json/FancyFountainPremium.json";
import FancyChakaraPremium from "../json/FancyChakaraPremium.json";
import FancyPencil from "../json/FancyPencil.json";
import KidsNowelties from "../json/KidsNowelties.json";
import PremiumTwinklingStar from "../json/PremiumTwinklingStar.json";
import ChottaSkyDisplayPremium from "../json/ChottaSkyDisplayPremium.json";
import PremiumSkyDisplay from "../json/PremiumSkyDisplay.json";
import SkyDisplay from "../json/SkyDisplay.json";
import PremiumShot from "../json/PremiumShots.json";
import Shot from "../json/Shots.json";
import Gun from "../json/Gun.json";
import MegaPremiumSkyDisplay from "../json/MegaPremiumSkyDisplay.json";
import PremiumSparklers from "../json/PremiumSparklers.json";
import PremiumUniqueSparklers from "../json/PremiumUniqueSparklers.json";
import MatchBox from "../json/MatchBox.json";
import PremiumRocket from "../json/PremiumRocket.json";
import Bijili from "../json/biliji.json";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Offer, setOffer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://baava-backend-new-1.onrender.com/user/update-data"
        );
        setOffer(response.data);
      } catch (error) {
        console.error("Error fetching the offer:", error);
      }
    }

    fetchData();
  }, []);
  console.log(Offer);
  const [showModal, setShowModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [updatedata, setupdatedata] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    country: "",
    address: "",
  });
  const [products, setProducts] = useState({
    Bijili: Bijili.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    premiumOneSound: PremiumOneSound.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    oneSound: OneSound.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    BombPremium: BombPremium.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PaperBomb: PaperBomb.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PremiumBlaster: PremiumBlaster.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    Blaster: Blaster.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    FlowerPotPremium: FlowerPotPremium.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    GroundChakraPremium: GroundChakraPremium.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    FlowerPots: FlowerPots.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    FancyFountainPremium: FancyFountainPremium.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    FancyChakaraPremium: FancyChakaraPremium.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    FancyPencil: FancyPencil.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    KidsNowelties: KidsNowelties.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PremiumTwinklingStar: PremiumTwinklingStar.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    ChottaSkyDisplayPremium: ChottaSkyDisplayPremium.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PremiumSkyDisplay: PremiumSkyDisplay.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    SkyDisplay: SkyDisplay.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PremiumShot: PremiumShot.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    Shot: Shot.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    Gun: Gun.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    MegaPremiumSkyDisplay: MegaPremiumSkyDisplay.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PremiumSparklers: PremiumSparklers.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PremiumUniqueSparklers: PremiumUniqueSparklers.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    MatchBox: MatchBox.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    })),
    PremiumRocket: PremiumRocket.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
    }))
  });
  const validateForm = () => {
    const errors = {};
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone || !phonePattern.test(formData.phone))
      errors.phone = "Valid phone number is required";
    if (!formData.whatsapp) errors.whatsapp = "WhatsApp number is required";
    if (!formData.country) errors.country = "Stateis required";
    if (!formData.address) errors.address = "Address is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const [selectedProducts, setSelectedProducts] = useState([]);
  const totalItems = Object.values(products)
    .flat()
    .reduce((sum, product) => sum + product.quantity, 0);
  const totalAmount = Object.values(products)
    .flat()
    .reduce((sum, product) => sum + product.subtotal, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    setupdatedata({ products: selectedProducts, totalAmount });
  }, [totalAmount, selectedProducts]);
  const handleQuantityChange = (section, index, delta) => {
    setProducts((prevProducts) => {
      return {
        ...prevProducts,
        [section]: prevProducts[section].map((product, i) => {
          if (i === index) {
            const newQuantity =
              product.quantity + delta >= 0 ? product.quantity + delta : 0;
            const newSubtotal = newQuantity * product.price;

            handleSelectedProducts(
              product.title,
              product.price,
              newQuantity,
              newSubtotal
            );

            return {
              ...product,
              quantity: newQuantity,
              subtotal: newSubtotal,
            };
          }
          return product;
        }),
      };
    });
  };

  const handleSelectedProducts = (title, price, quantity, subtotal) => {
    setSelectedProducts((prevSelected) => {
      const existingProductIndex = prevSelected.findIndex(
        (product) => product.title === title
      );

      let updatedSelected;
      if (existingProductIndex !== -1) {
        if (quantity === 0) {
          updatedSelected = prevSelected.filter(
            (product) => product.title !== title
          );
        } else {
          updatedSelected = [...prevSelected];
          updatedSelected[existingProductIndex] = {
            title,
            price,
            quantity,
            subtotal,
          };
        }
      } else if (quantity > 0) {
        updatedSelected = [
          ...prevSelected,
          { title, price, quantity, subtotal },
        ];
      } else {
        updatedSelected = prevSelected;
      }
      setupdatedata(updatedSelected);

      return updatedSelected;
    });
  };
  const CutomerDetails = {
    updatedata,
    formData,
  };
  const handleImageClick = (product,title) => {
    setSelectedProduct(product);
    console.log(title)
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const customerData = await addcustomerDetails(CutomerDetails);
      dispatch(addProducts(customerData));
      console.log(CutomerDetails);
      toast.success("Your Order Placed...");
      setTimeout(() => navigate("/quick-shopping"), 3000);
      setShowModal(false);
    }
  };
  return (
    <div>
      <div className=" sticky top-0 bg-white  pb-2">
        {/* <marquee behavior="" direction="" className="font-poppins text-1xl mt-4">Diwali Mega Offer,Admin Logajith,Quick Shopping</marquee> */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5 text-center font-semibold">
          <div className="hidden md:block border-2 p-5 rounded-md">
            Number of Products
            <div className="border-t-2 mt-2 text-center text-2xl">
              {Object.values(products).flat().length}
            </div>
          </div>

          <div className=" border-2 p-5 rounded-md">
            Number of items
            <div className="border-t-2 mt-2 text-center text-2xl">
              {totalItems}
            </div>
          </div>
          <div className="border-2 p-5 rounded-md">
            Total Amount
            <div className="border-t-2 mt-2 text-center text-2xl">
              Rs: {totalAmount} .00
            </div>
          </div>
        </section>
        <div className="block md:hidden">
          <div className="flex justify-center">
            <button
              className={`text-white font-sans py-3 px-10 rounded-lg  text-1xl ${
                totalItems === 0
                  ? "bg-red-800 cursor-not-allowed"
                  : "bg-sky-950"
              }`}
              disabled={totalItems === 0}
              onClick={() => setShowModal(true)}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="md:m-5 flex flex-col md:flex-row justify-center gap-5  overflow-scroll">
        <table className="md:w-[180vh] table-auto  border border-gray-200 overflow-x">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="border border-gray-300 ">Image</th>
              <th className="border border-gray-300 ">Product Name</th>
              <th className="hidden md:block border border-gray-300 ">Price</th>
              <th className="border border-gray-300 ">Qty</th>
              <th className="border border-gray-300 ">Sub-Total</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  Bijili
                </span>
              </td>
            </tr>
            {products.Bijili.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image,data.title)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() => handleQuantityChange("Bijili", index, -1)}
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() => handleQuantityChange("Bijili", index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}
          
            <tr>
              <td colSpan="5" className=" font-bold text-lg p-4 text-left ">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  Premium One Sound
                </span>
              </td>
            </tr>
            {products.premiumOneSound.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.img}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.img)}
                  />
                </td>
                <td className="border border-gray-300 px-5 py-2">
                  {data.title}
                  <h2 className="md:hidden  font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>

                <td className="border border-gray-300 ">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("premiumOneSound", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>
                    <button
                      className="text-3xl font-bold "
                      onClick={() =>
                        handleQuantityChange("premiumOneSound", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="border border-gray-300 px-10 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            {products.oneSound.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.img}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("oneSound", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() => handleQuantityChange("oneSound", index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  BOMB PREMIUM
                </span>
              </td>
            </tr>
            {products.BombPremium.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.img}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.img)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("BombPremium", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("BombPremium", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PAPER BOMB
                </span>
              </td>
            </tr>
            {products.PaperBomb.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PaperBomb", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PaperBomb", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PREMIUM BLASTER
                </span>
              </td>
            </tr>
            {products.PremiumBlaster.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumBlaster", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumBlaster", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  BLASTERS
                </span>
              </td>
            </tr>
            {products.Blaster.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() => handleQuantityChange("Blaster", index, -1)}
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() => handleQuantityChange("Blaster", index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  FLOWER POTS PREMIUM
                </span>
              </td>
            </tr>
            {products.FlowerPotPremium.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FlowerPotPremium", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FlowerPotPremium", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  GROUND CHAKARA PREMIUM
                </span>
              </td>
            </tr>
            {products.GroundChakraPremium.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.img}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.img)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("GroundChakraPremium", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("GroundChakraPremium", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  FLOWER POTS
                </span>
              </td>
            </tr>
            {products.FlowerPots.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.img}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.img)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FlowerPots", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FlowerPots", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  FANCY FOUNTAIN PREMIUM
                </span>
              </td>
            </tr>
            {products.FancyFountainPremium.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FancyFountainPremium", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FancyFountainPremium", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  FANCY CHAKARA PREMIUM
                </span>
              </td>
            </tr>
            {products.FancyChakaraPremium.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.img}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.img)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FancyChakaraPremium", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FancyChakaraPremium", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  FANCY PENCIL
                </span>
              </td>
            </tr>
            {products.FancyPencil.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FancyPencil", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("FancyPencil", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  KIDS NOWELTIES
                </span>
              </td>
            </tr>
            {products.KidsNowelties.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("KidsNowelties", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("KidsNowelties", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PREMIUM TWINKLING STAR
                </span>
              </td>
            </tr>
            {products.PremiumTwinklingStar.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumTwinklingStar", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumTwinklingStar", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  CHOTTA SKY DISPLAY PREMIUM
                </span>
              </td>
            </tr>
            {products.ChottaSkyDisplayPremium.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange(
                          "ChottaSkyDisplayPremium",
                          index,
                          -1
                        )
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange(
                          "ChottaSkyDisplayPremium",
                          index,
                          1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PREMIUM SKY DISPLAY
                </span>
              </td>
            </tr>
            {products.PremiumSkyDisplay.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumSkyDisplay", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumSkyDisplay", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  SKY DISPLAY
                </span>
              </td>
            </tr>
            {products.SkyDisplay.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("SkyDisplay", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("SkyDisplay", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PREMIUM SHOT
                </span>
              </td>
            </tr>
            {products.PremiumShot.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumShot", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumShot", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  SHOTS
                </span>
              </td>
            </tr>
            {products.Shot.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() => handleQuantityChange("Shot", index, -1)}
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() => handleQuantityChange("Shot", index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  GUN
                </span>
              </td>
            </tr>
            {products.Gun.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() => handleQuantityChange("Gun", index, -1)}
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() => handleQuantityChange("Gun", index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  MEGA PREMIUM SKY DISPLAY
                </span>
              </td>
            </tr>
            {products.MegaPremiumSkyDisplay.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("MegaPremiumSkyDisplay", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("MegaPremiumSkyDisplay", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PREMIUM SPARKLERS
                </span>
              </td>
            </tr>
            {products.PremiumSparklers.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumSparklers", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumSparklers", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PREMIUM UNIQUE SPARKLERS
                </span>
              </td>
            </tr>
            {products.PremiumUniqueSparklers.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange(
                          "PremiumUniqueSparklers",
                          index,
                          -1
                        )
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumUniqueSparklers", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  MATCH BOX
                </span>
              </td>
            </tr>
            {products.MatchBox.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("MatchBox", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() => handleQuantityChange("MatchBox", index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5" className=" font-bold text-lg  text-left p-4">
                <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
                  PREMIUM ROCKET
                </span>
              </td>
            </tr>
            {products.PremiumRocket.map((data, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={data.image}
                    alt="Product"
                    className="w-12 h-12 object-cover mx-auto"
                    onClick={() => handleImageClick(data.image)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.title}
                  <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
                    ₹ {data.price}
                  </h2>
                </td>
                <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
                  Rs: {data.price} .00
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-3xl font-bold px-3 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumRocket", index, -1)
                      }
                    >
                      -
                    </button>

                    <h2 className="text-2xl">{data.quantity}</h2>

                    <button
                      className="text-3xl font-bold px-1 py-1 transition"
                      onClick={() =>
                        handleQuantityChange("PremiumRocket", index, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-1 py-1">
                  Rs: {data.subtotal} .00
                </td>
              </tr>
            ))}

           
          </tbody>
        </table>

        <section>
          <div className="flex flex-col sticky ">
            <button
              className={`text-white font-sans p-3 rounded-lg mb-5 text-1xl ${
                totalItems === 0
                  ? "bg-red-800 cursor-not-allowed"
                  : "bg-sky-950"
              }`}
              disabled={totalItems === 0}
              onClick={() => setShowModal(true)}
            >
              Order Now
            </button>
            <p className="font-bold text-center mt-5 ">
              Click the "Order Now" button to place your order.
            </p>

            <div className="py-10 w-[55vh]">
              <h1 className="text-2xl mb-4 font-mono text-left">Note:</h1>
              <ul className="mb-5">
                <li className="m-3 mb-3 font-bold font-mono">
                  "Once you register your products, our team will reach out to
                  you via phone or WhatsApp. If you don't hear from us, feel
                  free to contact our support team."
                </li>
                <li className="font-bold font-mono">Phone : +91-91696 06415</li>
              </ul>

              {Offer && Offer.length > 0 ? (
                <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 border border-gray-300 rounded-lg m-2">
                  <h2 className="text-xl font-semibold text-teal-600">
                    Message Box
                  </h2>
                  <p className="text-2xl text-center font-mono font-bold">
                    {Offer[0].OfferContent}
                  </p>
                </div>
              ) : (
                <p className="text-center text-gray-500">
                  Loading offer details...
                </p>
              )}
            </div>
            {selectedProduct && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
                  <div className="flex justify-between items-center mb-4">
                    
                    
                  </div>
                  <img
                    src={selectedProduct}
                    alt="Product"
                    className="w-full h-80 object-cover mb-4"
                  />
                  <button
                      className="bg-red-700 text-white px-3 py-2 rounded-lg hover:text-red-500"
                      onClick={closeModal}
                    >
                      close
                    </button>
                </div>
              </div>
            )}

            {showModal && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    Enter your Details
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {formErrors.name && (
                        <p className="text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        WhatsApp Number
                      </label>
                      <input
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {formErrors.whatsapp && (
                        <p className="text-red-500">{formErrors.whatsapp}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {formErrors.country && (
                        <p className="text-red-500">{formErrors.country}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      ></textarea>
                      {formErrors.address && (
                        <p className="text-red-500">{formErrors.address}</p>
                      )}
                    </div>
                    <p className="text-red-800 mb-5">
                      "Note: The minimum order amount is ₹3000."
                    </p>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className={`px-4 py-2 text-white rounded-lg ${
                          totalAmount < 3000
                            ? "bg-red-800 cursor-not-allowed"
                            : "bg-sky-950"
                        }`}
                        disabled={totalAmount < 3000}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductList;
