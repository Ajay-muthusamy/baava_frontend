import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Footer2 from "./Footer2";
import deliveryAnime from "../../animeFiles/Animation - 1726936960955.json";
import moneyAnime from "../../animeFiles/Animation - 1726937773027.json";
import phoneAnime from "../../animeFiles/Animation - 1726938112143.json";

const Footer = () => {
  return (
    <div>
      <main className="flex flex-col justify-center font-poppins ">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <Player
              autoplay
              loop
              src={deliveryAnime}
              className="w-52 md:w-52"
            />

            <h1 className="font-bold text-center">Home Delivery</h1>
            <p>(TN, BLRE & PY ONLY)</p>
          </div>

          <div className="flex flex-col items-center mb-4 md:mb-0">
            <Player autoplay loop src={moneyAnime} className="w-52 md:w-52 " />
            <h1 className="font-bold text-center text-sm md:text-base w-[40vh]">
              MINIMUM ORDER - Rs. 2500.00
            </h1>
          </div>

          <div className="flex flex-col items-center mb-4 md:mb-0">
            <Player autoplay loop src={phoneAnime} className="w-52 md:w-52" />
            <h1 className="font-bold text-center text-sm md:text-base">
               +91 - 73732 68888
              <br />
               +91 - 63832 90293
            </h1>
            <h1 className="font-bold text-center">Order Online Now!</h1>
          </div>
        </div>
        <div>
          <Footer2 />
        </div>
      </main>
    </div>
  );
};

export default Footer;
