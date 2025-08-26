import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/baava-crackers.png";
import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer2 = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-blue-950 pt-10 text-white">
      {/* Paragraph Section */}
      <div className="px-6 md:px-36 text-center">
        {showInfo && (
          <p className="text-gray-300 text-sm leading-relaxed bg-blue-900 p-4 rounded-lg shadow-md">
            As per 2018 supreme court order, online sale of firecrackers are not
            permitted! We value our customers and at the same time, respect
            jurisdiction. We request you to add your products to the cart and
            submit the required crackers through the enquiry button. We will
            contact you within 24 hrs and confirm the order through WhatsApp or
            phone call. Please add and submit your enquiries and enjoy your
            Diwali with BAVA CRACKERS. Our License No :.TN-6620240923254 BAVA
            CRACKERS as a company following 100% legal & statutory compliances
            and all our shops, go-downs are maintained as per the explosive
            acts. We send the parcels through registered and legal transport
            service providers as like every other major companies in Sivakasi is
            doing so.
          </p>
        )}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="mt-4 px-5 py-2 bg-coral-600 hover:bg-coral-700 transition rounded-lg font-medium shadow-md"
        >
          {showInfo ? "Hide Info" : "Read Info"}
        </button>
      </div>

      {/* Footer Links Section */}
      <footer className="font-poppins flex flex-col md:flex-row justify-around mt-10 md:p-3 text-white md:items-center space-y-6 md:space-y-0 p-6">
        <div>
          <h1 className="font-bold mb-3 text-lg">Contact us</h1>
          <div className="flex items-center mb-3 gap-2">
            <FaMapLocationDot className="text-coral-500" />
            <h2>Vadipatti, Madurai - 625218</h2>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneVolume className="text-coral-500" />
            <h2>+91 - 73732 68888</h2>
          </div>
        </div>

        <div>
          <h1 className="font-bold mb-3 text-lg">INFORMATION</h1>
          <ul className="text-gray-300 space-y-2">
            <li>
              <Link to="/" className="hover:text-coral-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-coral-400">
                About us
              </Link>
            </li>
            <li>
              <Link to="/quick-shopping" className="hover:text-coral-400">
                Quick Shopping
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-coral-400">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold mb-3 text-lg">OUR PRODUCTS</h1>
          <ul className="text-gray-300 space-y-2">
            <li>PREMIUM SHOTS</li>
            <li>SHOTS</li>
            <li>PAPER BOMB</li>
            <li>SKY DISPLAY</li>
            <li>PREMIUM SKY DISPLAY</li>
          </ul>
        </div>

        <div>
          <img src={logo} alt="Baava Crackers Logo" className="md:w-56 w-40 mx-auto md:mx-0" />
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="text-center p-5 bg-gray-900 text-white">
        <h1 className="mb-3 text-lg font-semibold">
          © 2024 All Rights Reserved BAAVA CRACKERS Powered by
        </h1>
        <div className="flex justify-center items-center gap-2 text-sm">
          <h2 className="font-medium">Developed by Ajay</h2>
          <FaWhatsapp className="text-green-500" />
          <span className="font-medium">+91 - 75488 41847</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
