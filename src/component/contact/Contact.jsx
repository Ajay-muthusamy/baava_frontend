import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <main>
        <div className="flex items-center justify-center mb-6">
          <h1 className="items-center pt-9">
            <FaMapLocationDot className="w-10" />
          </h1>
          <h1 className=" font-poppins mt-10 text-2xl"> Shop Location</h1>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[70%]">
            <iframe style={{borderRadius:"10px"}}
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Baava%20crackers,Maharani%20nagar,%20madurai,%20Vadipatti,%20Tamil%20Nadu%20625218+(Baava%20crackers)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center  p-4 mt-10">
            <main className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h1 className="text-3xl font-bold text-center text-teal-600 mb-4">
                    Contact Details
                  </h1>

                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xl font-semibold text-gray-800">
                        Admin
                      </h1>
                      <h2 className="text-lg text-gray-600">
                        Phone: +91 91596 06415
                      </h2>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-gray-800">
                        Admin
                      </h1>
                      <h2 className="text-lg text-gray-600">
                        Phone: +91 63832 90293
                      </h2>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-800 mb-2">
                    Delivery Team
                  </h1>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">
                      Phone: +91 73732 68888
                    </p>
                    <p className="text-lg text-gray-600">
                      Phone: +91 91596 06415
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
