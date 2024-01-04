"use client";
import React from "react";
import "swiper/css"; // Import the base styles
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Install modules
// SwiperCore.use([Pagination, Autoplay]);

const Bikes = () => {
  return (
    <>
      <div className="px-4 lg:px-8 py-10 lg:py-14 text-center lg:text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-300 mb-8">
          TVS Collection
        </h1>
        <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-500 mb-2">
          Check out all our models
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8 lg:p-11">
        {/* "grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 lg:p-8" */}
        {/* Car 1 */}
        <div className="border border-gray-200 rounded-3xl shadow dark:border-gray-700 p-5">
          <a href="#">
            <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
              The face of new SUVs
            </h5>
            <h1 className="text-5xl font-bold text-white ml-5">FRONX</h1>
            <img
              className="p-8 rounded-t-lg"
              src="/vitara.png"
              alt="product image"
            />
          </a>
          <div className="">
            <div className="flex justify-between mt-1.5 mb-3">
              <span className="font-bold text-gray-200 text-xl">Price</span>
              <span className="font-bold text-gray-200 text-xl ml-10">
                Milage
              </span>
              <span className="font-bold text-gray-200 text-xl ">Power</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                Rs.49,99,99
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                12.51kmpl
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white mr-3">
                130ps
              </span>
            </div>
          </div>
        </div>

        {/* Car 2 */}
        <div className="border border-gray-200 rounded-3xl shadow dark:border-gray-700 p-5">
          <a href="#">
            <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
              The face of new SUVs
            </h5>
            <h1 className="text-5xl font-bold text-white ml-5">FRONX</h1>
            <img
              className="p-8 rounded-t-lg"
              src="/vitara.png"
              alt="product image"
            />
          </a>
          <div className="">
            <div className="flex justify-between mt-1.5 mb-3">
              <span className="font-bold text-gray-200 text-xl">Price</span>
              <span className="font-bold text-gray-200 text-xl ml-10">
                Milage
              </span>
              <span className="font-bold text-gray-200 text-xl ">Power</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                Rs.49,99,99
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                12.51kmpl
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white mr-3">
                130ps
              </span>
            </div>
          </div>
        </div>

        {/* Car 3 */}
        <div className="border border-gray-200 rounded-3xl shadow dark:border-gray-700 p-5">
          <a href="#">
            <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
              The face of new SUVs
            </h5>
            <h1 className="text-5xl font-bold text-white ml-5">FRONX</h1>
            <img
              className="p-8 rounded-t-lg"
              src="/vitara.png"
              alt="product image"
            />
          </a>
          <div className="">
            <div className="flex justify-between mt-1.5 mb-3">
              <span className="font-bold text-gray-200 text-xl">Price</span>
              <span className="font-bold text-gray-200 text-xl ml-10">
                Milage
              </span>
              <span className="font-bold text-gray-200 text-xl ">Power</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                Rs.49,99,99
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                12.51kmpl
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white mr-3">
                130ps
              </span>
            </div>
          </div>
        </div>

        {/* Car 4 */}
        <div className="border border-gray-200 rounded-3xl shadow dark:border-gray-700 p-5">
          <a href="#">
            <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
              The face of new SUVs
            </h5>
            <h1 className="text-5xl font-bold text-white ml-5">FRONX</h1>
            <img
              className="p-8 rounded-t-lg"
              src="/vitara.png"
              alt="product image"
            />
          </a>
          <div className="">
            <div className="flex justify-between mt-1.5 mb-3">
              <span className="font-bold text-gray-200 text-xl">Price</span>
              <span className="font-bold text-gray-200 text-xl ml-10">
                Milage
              </span>
              <span className="font-bold text-gray-200 text-xl ">Power</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                Rs.49,99,99
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                12.51kmpl
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white mr-3">
                130ps
              </span>
            </div>
          </div>
        </div>
        {/* Car 4 */}
        <div className="border border-gray-200 rounded-3xl shadow dark:border-gray-700 p-5">
          <a href="#">
            <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
              The face of new SUVs
            </h5>
            <h1 className="text-5xl font-bold text-white ml-5">FRONX</h1>
            <img
              className="p-8 rounded-t-lg"
              src="/vitara.png"
              alt="product image"
            />
          </a>
          <div className="">
            <div className="flex justify-between mt-1.5 mb-3">
              <span className="font-bold text-gray-200 text-xl">Price</span>
              <span className="font-bold text-gray-200 text-xl ml-10">
                Milage
              </span>
              <span className="font-bold text-gray-200 text-xl ">Power</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                Rs.49,99,99
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                12.51kmpl
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white mr-3">
                130ps
              </span>
            </div>
          </div>
        </div>
        {/* Car 4 */}
        <div className="border border-gray-200 rounded-3xl shadow dark:border-gray-700 p-5">
          <a href="#">
            <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
              The face of new SUVs
            </h5>
            <h1 className="text-5xl font-bold text-white ml-5">FRONX</h1>
            <img
              className="p-8 rounded-t-lg"
              src="/vitara.png"
              alt="product image"
            />
          </a>
          <div className="">
            <div className="flex justify-between mt-1.5 mb-3">
              <span className="font-bold text-gray-200 text-xl">Price</span>
              <span className="font-bold text-gray-200 text-xl ml-10">
                Milage
              </span>
              <span className="font-bold text-gray-200 text-xl ">Power</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                Rs.49,99,99
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white">
                12.51kmpl
              </span>
              <span className="text-lg font-normal text-gray-900 dark:text-white mr-3">
                130ps
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bikes;
