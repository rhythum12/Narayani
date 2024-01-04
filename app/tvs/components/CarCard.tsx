"use client";
import React from "react";
import "swiper/css"; // Import the base styles
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/modules";

// Install Swiper modules

const CarCard = () => {
  return (
    <>
      <div className="px-4 lg:px-8 py-10 lg:py-14 text-center lg:text-center">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-white mb-2 mt-5">
          Our Collection
        </h2>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-300 mb-8">
          Choose your ride
        </h1>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30, // Adjust the spaceBetween value as needed
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow bg-custom-dark dark:border-gray-700 p-5 ml-2 lg:ml-40">
            {/* Car Card 1 content */}
            {/* Adjust the classes and styles as needed */}
            <a href="#">
              <h5 className="text-base lg:text-lg font-normal tracking-tight text-custom-light-gray ml-2 lg:ml-5">
                Tvs Apache
              </h5>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-300 ml-2 lg:ml-5">
                RTR 200 4V RTFI BS6
              </h1>
              <img
                className="p-4 lg:p-8 rounded-t-lg"
                src="/tvs160.png"
                alt="product image"
              />
            </a>
            <div>
              <div className="flex justify-between mt-1.5 mb-3">
                <span className="font-bold text-white text-xl">Price</span>
                <span className="font-bold text-white text-xl ml-10">
                  Milage
                </span>
                <span className="font-bold text-white text-xl ">Power</span>
              </div>
              <div className="flex items-center justify-between pb-2 ">
                <span className="text-lg font-normal text-custom-light-gray ">
                  Rs.49,99,99
                </span>
                <span className="text-lg font-normal text-custom-light-gray">
                  12.51kmpl
                </span>
                <span className="text-lg font-normal text-custom-light-gray ">
                  130ps
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow bg-gray-900 dark:border-gray-700 p-5 ml-2 lg:ml-40">
            {/* Car Card 1 content */}
            {/* Adjust the classes and styles as needed */}
            <a href="#">
              <h5 className="text-base lg:text-lg font-normal tracking-tight text-custom-light-gray ml-2 lg:ml-5">
                Tvs Apache
              </h5>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-300 ml-2 lg:ml-5">
                RTR 200 4V RTFI BS6
              </h1>
              <img
                className="p-4 lg:p-8 rounded-t-lg"
                src="/tvs160.png"
                alt="product image"
              />
            </a>
            <div className="">
              <div className="flex justify-between mt-1.5 mb-3">
                <span className="font-bold text-white text-xl">Price</span>
                <span className="font-bold text-white text-xl ml-10">
                  Milage
                </span>
                <span className="font-bold text-white text-xl ">Power</span>
              </div>
              <div className="flex items-center justify-between pb-2 ">
                <span className="text-lg font-normal text-custom-light-gray ">
                  Rs.49,99,99
                </span>
                <span className="text-lg font-normal text-custom-light-gray">
                  12.51kmpl
                </span>
                <span className="text-lg font-normal text-custom-light-gray ">
                  130ps
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow bg-custom-dark dark:border-gray-700 p-5 ml-2 lg:ml-40">
            {/* Car Card 1 content */}
            {/* Adjust the classes and styles as needed */}
            <a href="#">
              <h5 className="text-base lg:text-lg font-normal tracking-tight text-custom-light-gray ml-2 lg:ml-5">
                Tvs Apache
              </h5>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-300 ml-2 lg:ml-5">
                RTR 200 4V RTFI BS6
              </h1>
              <img
                className="p-4 lg:p-8 rounded-t-lg"
                src="/tvs160.png"
                alt="product image"
              />
            </a>
            <div className="">
              <div className="flex justify-between mt-1.5 mb-3">
                <span className="font-bold text-white text-xl">Price</span>
                <span className="font-bold text-white text-xl ml-10">
                  Milage
                </span>
                <span className="font-bold text-white text-xl ">Power</span>
              </div>
              <div className="flex items-center justify-between pb-2 ">
                <span className="text-lg font-normal text-custom-light-gray ">
                  Rs.49,99,99
                </span>
                <span className="text-lg font-normal text-custom-light-gray">
                  12.51kmpl
                </span>
                <span className="text-lg font-normal text-custom-light-gray ">
                  130ps
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow bg-custom-dark dark:border-gray-700 p-5 ml-2 lg:ml-40">
            {/* Car Card 1 content */}
            {/* Adjust the classes and styles as needed */}
            <a href="#">
              <h5 className="text-base lg:text-lg font-normal tracking-tight text-custom-light-gray ml-2 lg:ml-5">
                Tvs Apache
              </h5>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-300 ml-2 lg:ml-5">
                RTR 200 4V RTFI BS6
              </h1>
              <img
                className="p-4 lg:p-8 rounded-t-lg"
                src="/tvs160.png"
                alt="product image"
              />
            </a>
            <div className="">
              <div className="flex justify-between mt-1.5 mb-3">
                <span className="font-bold text-white text-xl">Price</span>
                <span className="font-bold text-white text-xl ml-10">
                  Milage
                </span>
                <span className="font-bold text-white text-xl ">Power</span>
              </div>
              <div className="flex items-center justify-between pb-2 ">
                <span className="text-lg font-normal text-custom-light-gray ">
                  Rs.49,99,99
                </span>
                <span className="text-lg font-normal text-custom-light-gray">
                  12.51kmpl
                </span>
                <span className="text-lg font-normal text-custom-light-gray ">
                  130ps
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarCard;
