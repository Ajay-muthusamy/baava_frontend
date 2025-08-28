import React, { useState, useEffect, useRef } from "react";
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
import combopack from "../json/combopack.json";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

import b1 from "../../../src/assets/banner/1.jpg";
import b2 from "../../../src/assets/banner/2.jpg";
import b3 from "../../../src/assets/banner/3.jpg";
import b4 from "../../../src/assets/banner/4.jpg";

const ProductList = () => {
  const categoryItems = [
    { id: "Bijili", name: "Bijili" },
    { id: "wala", name: "Wala" },
    { id: "Bombs", name: "Bombs" },
    { id: "paper-bombs", name: "Paper Bombs" },
    { id: "Sparkles", name: "Sparkles" },
    { id: "Fountains", name: "Fountains" },
    { id: "kids-Special", name: "Kids Special" },
    { id: "night-fancy", name: "Night Fancy" },
    { id: "Sky-shots-pipe", name: "Sky Shots Pipe" },
    { id: "Multi-SKY-SHOTS", name: "Multi Sky Shots" },
    { id: "others", name: "Others" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Offer, setOffer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [updatedata, setupdatedata] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    country: "",
    address: "",
  });

  // Normalize image property for consistent access
  const normalizeProducts = (products) => {
    return products.map((product) => ({
      ...product,
      quantity: 0,
      subtotal: 0,
      // Ensure consistent image property
      image: product.image || product.img,
    }));
  };

  const [products, setProducts] = useState({
    combopack: normalizeProducts(combopack),
    Bijili: normalizeProducts(Bijili),
    premiumOneSound: normalizeProducts(PremiumOneSound),
    oneSound: normalizeProducts(OneSound),
    BombPremium: normalizeProducts(BombPremium),
    PaperBomb: normalizeProducts(PaperBomb),
    PremiumBlaster: normalizeProducts(PremiumBlaster),
    Blaster: normalizeProducts(Blaster),
    FlowerPotPremium: normalizeProducts(FlowerPotPremium),
    GroundChakraPremium: normalizeProducts(GroundChakraPremium),
    FlowerPots: normalizeProducts(FlowerPots),
    FancyFountainPremium: normalizeProducts(FancyFountainPremium),
    FancyChakaraPremium: normalizeProducts(FancyChakaraPremium),
    FancyPencil: normalizeProducts(FancyPencil),
    KidsNowelties: normalizeProducts(KidsNowelties),
    PremiumTwinklingStar: normalizeProducts(PremiumTwinklingStar),
    ChottaSkyDisplayPremium: normalizeProducts(ChottaSkyDisplayPremium),
    PremiumSkyDisplay: normalizeProducts(PremiumSkyDisplay),
    SkyDisplay: normalizeProducts(SkyDisplay),
    PremiumShot: normalizeProducts(PremiumShot),
    Shot: normalizeProducts(Shot),
    Gun: normalizeProducts(Gun),
    MegaPremiumSkyDisplay: normalizeProducts(MegaPremiumSkyDisplay),
    PremiumSparklers: normalizeProducts(PremiumSparklers),
    PremiumUniqueSparklers: normalizeProducts(PremiumUniqueSparklers),
    MatchBox: normalizeProducts(MatchBox),
    PremiumRocket: normalizeProducts(PremiumRocket),
  });

  const validateForm = () => {
    const errors = {};
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone || !phonePattern.test(formData.phone))
      errors.phone = "Valid phone number is required";
    if (!formData.whatsapp) errors.whatsapp = "WhatsApp number is required";
    if (!formData.country) errors.country = "State is required";
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

  // Fetch offer data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://baava-backend-new-1.onrender.com/user/update-data"
        );
        setOffer(response.data);
      } catch (error) {
        console.error("Error fetching the offer:", error);
        toast.error("Failed to load offers");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
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
            const newQuantity = Math.max(0, product.quantity + delta);
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
  };

  const handleImageClick = (product, title) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addProducts(CutomerDetails));
    localStorage.setItem("customerDetails", JSON.stringify(CutomerDetails));
    navigate("/cart");
  };

  // Dropdown functionality
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Product categories with their data and IDs
  const productCategories = [
    {
      id: "combo pack",
      name: "COMBO PACK",
      data: products.combopack,
      color: "bg-blue-500",
    },
    {
      id: "Bijili",
      name: "Bijili",
      data: products.Bijili,
      color: "bg-blue-500",
    },
    {
      id: "wala",
      name: "Wala",
      data: products.premiumOneSound,
      color: "bg-green-500",
    },
    {
      id: "Bombs",
      name: "Bombs",
      data: products.oneSound,
      color: "bg-red-500",
    },
    {
      id: "paper-bombs",
      name: "Paper Bombs",
      data: products.BombPremium,
      color: "bg-purple-500",
    },
    {
      id: "premium-sparklers",
      name: "Premium Sparklers",
      data: products.PaperBomb,
      color: "bg-yellow-500",
    },
    {
      id: "Sparkles",
      name: "Sparklers",
      data: products.PremiumBlaster,
      color: "bg-pink-500",
    },
    {
      id: "Fountains",
      name: "Fountains",
      data: products.Blaster,
      color: "bg-indigo-500",
    },
    {
      id: "kids-Special",
      name: "Kids Special",
      data: products.FlowerPotPremium,
      color: "bg-orange-500",
    },
    {
      id: "fountain-chakram",
      name: "Fancy Fountains",
      data: products.GroundChakraPremium,
      color: "bg-teal-500",
    },
    {
      id: "chakram",
      name: "Chakram",
      data: products.FlowerPots,
      color: "bg-cyan-500",
    },
    {
      id: "pencil",
      name: "Pencil",
      data: products.FancyFountainPremium,
      color: "bg-lime-500",
    },
    {
      id: "Sky-shots-pipe",
      name: "Sky Shots - Rocket",
      data: products.FancyChakaraPremium,
      color: "bg-emerald-500",
    },
    {
      id: "sky-shot-pipe",
      name: "Sky Shot Pipe",
      data: products.FancyPencil,
      color: "bg-violet-500",
    },
    {
      id: "Multi-SKY-SHOTS",
      name: "Multi Sky Shots",
      data: products.KidsNowelties,
      color: "bg-rose-500",
    },
  ];

  const QuantityButton = ({ onClick, children, disabled = false }) => (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg transition-colors ${
        disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );

  const ProductRow = ({ data, section, index }) => (
    <tr className="bg-white hover:bg-gray-50 transition-colors">
      <td className="border border-gray-200 p-3">
        <img
          src={data.image}
          alt={data.title}
          className="w-16 h-16 object-cover rounded-lg mx-auto cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleImageClick(data.image, data.title)}
          loading="lazy"
        />
      </td>
      <td className="border border-gray-200 p-3">
        <div className="font-medium text-gray-900">{data.title}</div>
        <div className="md:hidden font-bold text-blue-600 mt-1">
          ₹{data.price}
        </div>
      </td>
      <td className="hidden md:table-cell border border-gray-200 p-3 font-bold text-blue-600">
        ₹{data.price}
      </td>
      <td className="border border-gray-200 p-3">
        <div className="flex justify-center items-center space-x-3">
          <QuantityButton
            onClick={() => handleQuantityChange(section, index, -1)}
            disabled={data.quantity === 0}
          >
            −
          </QuantityButton>
          <span className="text-xl font-semibold min-w-[2rem] text-center">
            {data.quantity}
          </span>
          <QuantityButton
            onClick={() => handleQuantityChange(section, index, 1)}
          >
            +
          </QuantityButton>
        </div>
      </td>
      <td className="border border-gray-200 p-3 font-bold text-green-600">
        ₹{data.subtotal}
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-md z-40 pb-4">
        <marquee behavior="" direction="" className="font-bold bg-[#ffdf0c]">
          Dear Customer - @3499 ₹ Diwali Special "COOLIE COMBO" is Ready for
          Budget friendly Sale
        </marquee>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
          <div className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
            <div className="text-sm opacity-90">Total Products</div>
            <div className="text-2xl font-bold">
              {Object.values(products).flat().length}
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
            <div className="text-sm opacity-90">Items Selected</div>
            <div className="text-2xl font-bold">{totalItems}</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
            <div className="text-sm opacity-90">Total Amount</div>
            <div className="text-2xl font-bold">₹{totalAmount}</div>
          </div>
        </div>

        {/* Mobile Order Button */}
        <div className="block md:hidden px-4">
          <button
            className={`w-full text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors ${
              totalItems === 0
                ? "bg-red-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={totalItems === 0}
            onClick={handleSubmit}
          >
            Proceed to Checkout
          </button>
        </div>

        <div ref={dropdownRef} className="relative inline-block m-5 mt-4 md:mx-36">
          <button
            onClick={toggleDropdown}
            className="flex sticky top-[50vh] z-50 items-center gap-2 bg-white border-2 border-gray-300 hover:border-blue-500 p-3 rounded-lg font-medium transition-colors"
          >
             Category
            <BsChevronDown
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-lg z-50 p-2 w-64 max-h-80 overflow-y-auto">
              {categoryItems.map(({ id, name }) => (
                <li
                  key={id}
                  className="hover:bg-blue-50 rounded-md transition-colors"
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setDropdownOpen(false)}
                    className="block w-full px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

      {/* Category Dropdown */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Products Table */}
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Product Name</th>
                  <th className="hidden md:table-cell p-4 text-left">Price</th>
                  <th className="p-4 text-center">Quantity</th>
                  <th className="p-4 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {productCategories.map((category) => (
                  <React.Fragment key={category.id}>
                    <tr>
                      <td colSpan="5" className="p-4 bg-gray-100">
                        <span
                          id={category.id}
                          className={`${category.color} text-white px-4 py-2 rounded-lg font-semibold text-lg`}
                        >
                          {category.name}
                        </span>
                      </td>
                    </tr>
                    {category.data.map((data, index) => (
                      <ProductRow
                        key={`${category.id}-${index}`}
                        data={data}
                        section={Object.keys(products).find(
                          (key) => products[key] === category.data
                        )}
                        index={index}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80">
          <div className="sticky top-32 space-y-6">
            {/* Checkout Button */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <button
                className={`w-full text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors ${
                  totalItems === 0
                    ? "bg-red-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={totalItems === 0}
                onClick={handleSubmit}
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-gray-600 text-sm mt-3">
                Click to place your order
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Important Note
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="font-medium">
                  "Once you register your products, our team will reach out to
                  you via phone or WhatsApp."
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-bold text-blue-800">
                    Support: +91-73732 68888
                  </p>
                </div>
              </div>
            </div>

            {/* Offer Box */}
            {loading ? (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ) : Offer && Offer.length > 0 ? (
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Special Offer!</h3>
                <p className="text-lg font-medium">{Offer[0].OfferContent}</p>
              </div>
            ) : null}

            {/* Promotional Banners */}
            <div className="space-y-4">
              {[b2, b3, b4].map((banner, index) => (
                <img
                  key={index}
                  src={banner}
                  alt={`Promotional banner ${index + 1}`}
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="p-4">
              <img
                src={selectedProduct}
                alt="Product"
                className="w-full h-auto max-h-96 object-contain"
              />
              <button
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ProductList;
