import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row mb-48 mt-48">
      <div className="lg:w-1/2 relative">
        <div className="w-full h-full lg:absolute lg:inset-0 lg:p-8">
          <div className="w-64 h-64">
            <Image
              src="/Baleno.png"
              alt="hero"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2  pt-10 lg:pt-36 lg:pl-10 justify-center items-center pb-11 lg:mb-48">
        <div>
          <p className="text-gray-500 font-bold">Why Choose Us ?</p>
          <h1 className="hero__title pt-2 text-light-blue-900">Why Suzuki ?</h1>
          <p className="font-bold pt-4 text-gray-700">
            With over three decades in Nepal's automotive industry, Suzuki has
            established itself as The Number 1 selling 4-Wheeler brand. Its
            extensive lineup of SUVs and compact cars cater to diverse customer
            needs. Recently, Suzuki has introduced the iconic "Jimny" and the
            modern urban SUV, "Fronx," adding to the existing Grand Vitara and
            Brezza models. This impressive range has cemented Suzuki's position
            as a prominent SUV brand in Nepal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
