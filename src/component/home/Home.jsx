import React, { useState } from "react";
import bganime from "../../animeFiles/Animation - 1727156764097.json";
import freeship from "../../animeFiles/Animation - 1727158563881.json";
import mapVdp from "../../assets/Screenshot (620).png";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe('pk_test_51RCYB84RJ1mSwy621eKV4VepjMxs72NRZDV9uYYn1YPegxGHSQinGEnAX3aZjeWlO2Yij9lF7WmAXCUtYzdzh2oW00uNXHyo66');

const Home = () => {
  const navigate = useNavigate();
  const [model, setmodel] = useState(false);

  return (
    <div>
        <img src="https://static.vecteezy.com/system/resources/previews/012/388/807/non_2x/happy-diwali-banner-for-festival-of-lights-diwali-celebration-card-background-free-vector.jpg" alt=""  />
      <div className="flex flex-col md:flex-row justify-center items-center h-[70vh] ">
        <main className="flex flex-col items-center justify-center md:items-start text-center md:text-left mt-10 md:mt-0 md:mr-20  text-gray-800">
          <h1 className="font-poppins text-lg md:text-xl uppercase ">
            Welcome to
          </h1>
          <h1 className="font-kanit text-4xl md:text-6xl font-bold text-[#ff6347]">
            Baava Crackers
          </h1>

          <Player autoplay loop src={bganime} className="w-40 md:w-64" />
        </main>

        <div className="flex justify-center items-center mt-10 md:mt-0">
          <img
            src="https://cdnl.iconscout.com/lottie/free/thumb/free-rocket-4627745-3843183.gif"
            alt="Crackers Animation"
            className="w-40 md:w-52 "
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:from-teal-500 hover:to-blue-600"
          onClick={() => navigate("/quick-shopping")}
        >
          Purchase Now
        </button>
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-11 bg-white p-6 ">
          <h1 className="font-poppins text-lg md:text-xl font-semibold text-gray-400 text-center">
            FREE Home Delivery for Vadipatti Town
            <Player autoplay loop src={freeship} className="w-40 md:w-52" />
          </h1>

          <img
            src={mapVdp}
            alt="Vadipatti Map"
            className="w-full md:w-[50vh] rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* <div className="bg-[rgb(248,240,240)] w-[45vh] p-5 rounded-lg flex justify-center">
        <div className="font-poppins">
          <div className="border-b-2 mb-2">
            <h1 className="bg-yellow-300 w-40 p-1 rounded-lg"> BAAVA CRACKERS</h1>
            <h1> Account Number:712349499342929</h1>
            <h1> Bank Name : HDFC</h1>
            <h1> IFSC code : HDFC001860</h1>
            <h1>Branch : Vadipatti</h1>
          </div>
          <div>
            <h1 className="bg-yellow-300 w-52 p-1 rounded-lg mb-2">Google pay & Phonepe</h1>
            <h1>Logajith - 75488 41847</h1>
            <h1>Ajay - 7548841847</h1>
            
          </div>
        </div>
      </div> */}

     
    </div>
  );
};

export default Home;
