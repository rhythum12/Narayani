import React from "react";
import Image from "next/image";

const About = () => {
  
  return (
    <div className="flex flex-col bg-neutral-950  lg:flex-row mb-48 mt-48">
      <div className="lg:w-1/2 relative">
        <div className="w-full h-full lg:absolute lg:inset-0 lg:p-8">
          <div className="w-64 h-64">
            <Image
              src="/tvs1.png"
              alt="hero"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2  pt-10 lg:pt-36 lg:pl-10 justify-center items-center pb-11 lg:mb-48">
        <div>
          <p className="text-white font-bold">Why choose TVS?</p>
          <h1 className="hero__title pt-2 text-white">About TVS</h1>
          <p className="font-bold pt-4 text-gray-300">
            TVS Brand is a well-established in brand In Two-Wheeler industry in
            Nepal. Both motorcycles and scooter of these brand are widely
            popular among public of Nepal with TVS RTR being the flag ship
            model. Jagdamba Motors Pvt. Ltd. has a wide dealer network with 115
            dealers across Nepal with 4 exclusive showrooms in Kathmandu. We
            have 35 service point all over Nepal with team of more than 200
            people in management sector and more than 150 people in Mechanics
            and Junior Staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
