"use client";
import React from "react";
import "swiper/css"; // Import the base styles
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Install modules
// SwiperCore.use([Pagination, Autoplay]);

const CarCard = () => {
  return (
    <>
      <div className="px-4 lg:px-8 py-10 lg:py-14 text-center lg:text-center">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-600 mb-2">
          Our Collection
        </h2>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8">
          Discover our Range
        </h1>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        // spaceBetween={-100}
        // slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -120,
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
        <div className="flex mb-11 ">
          <SwiperSlide>
            <div
              className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow  dark:border-gray-700 p-5  ml-40"
              data-swiper-autoplay="2000"
            >
              <a href="#">
                <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
                  The face of new SUVs
                </h5>
                <h1 className="text-5xl font-bold text-light-blue-900 ml-5">
                  FRONX
                </h1>
                <img
                  className="p-8 rounded-t-lg"
                  src="/vitara.png"
                  alt="product image"
                />
              </a>
              <div className="">
                <div className="flex justify-between mt-1.5 mb-3">
                  <span className="font-bold text-gray-800 text-xl">Price</span>
                  <span className="font-bold text-gray-800 text-xl ml-10">
                    Milage
                  </span>
                  <span className="font-bold text-gray-800 text-xl ">
                    Power
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-lg font-normal text-gray-00 ">
                    Rs.49,99,99
                  </span>
                  <span className="text-lg font-normal text-gray-900 ">
                    12.51kmpl
                  </span>
                  <span className="text-lg font-normal text-gray-900  mr-3">
                    130ps
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow bg-blue-200 dark:border-gray-700 p-5  ml-40">
              <a href="#">
                <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
                  The face of new SUVs
                </h5>
                <h1 className="text-5xl font-bold text-light-blue-900 ml-5">
                  FRONX
                </h1>
                <img
                  className="p-8 rounded-t-lg"
                  src="/vitara.png"
                  alt="product image"
                />
              </a>
              <div className="">
                <div className="flex justify-between mt-1.5 mb-3">
                  <span className="font-bold text-gray-800 text-xl">Price</span>
                  <span className="font-bold text-gray-800 text-xl ml-10">
                    Milage
                  </span>
                  <span className="font-bold text-gray-800 text-xl ">
                    Power
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-lg font-normal text-gray-900 ">
                    Rs.49,99,99
                  </span>
                  <span className="text-lg font-normal text-gray-900 ">
                    12.51kmpl
                  </span>
                  <span className="text-lg font-normal text-gray-900mr-3">
                    130ps
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow  dark:border-gray-700 p-5  ml-40">
              <a href="#">
                <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
                  The face of new SUVs
                </h5>
                <h1 className="text-5xl font-bold text-light-blue-900 ml-5">
                  FRONX
                </h1>
                <img
                  className="p-8 rounded-t-lg"
                  src="/vitara.png"
                  alt="product image"
                />
              </a>
              <div className="">
                <div className="flex justify-between mt-1.5 mb-3">
                  <span className="font-bold text-gray-800 text-xl">Price</span>
                  <span className="font-bold text-gray-800 text-xl ml-10">
                    Milage
                  </span>
                  <span className="font-bold text-gray-800 text-xl ">
                    Power
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-lg font-normal text-gray-900 ">
                    Rs.49,99,99
                  </span>
                  <span className="text-lg font-normal text-gray-900 ">
                    12.51kmpl
                  </span>
                  <span className="text-lg font-normal text-gray-900 mr-3">
                    130ps
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="w-auto max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 p-5 ml-36 mr-11">
              <a href="#">
                <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
                  Smart & Powerful
                </h5>
                <h1 className="text-5xl font-bold text-light-blue-900 ml-5">
                  Vitara
                </h1>
                <img
                  className="p-8 rounded-t-lg mb-14"
                  src="/vitara.png"
                  alt="product image"
                />
              </a>

              <div className="flex justify-between mt-1.5 mb-3">
                <span className="font-bold text-gray-800 text-xl">Price</span>
                <span className="font-bold text-gray-800 text-xl ml-10">
                  Milage
                </span>
                <span className="font-bold text-gray-800 text-xl ">Power</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-normal text-gray-900 dark:text-white">
                  Rs.29,99,999
                </span>
                <span className="text-lg font-normal text-gray-900 dark:text-white">
                  15.15kmpl
                </span>
                <span className="text-lg font-normal text-gray-900 dark:text-white mr-3">
                  123ps
                </span>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="w-auto max-w-sm border border-gray-200 rounded-3xl shadow  dark:border-gray-700 p-5  ml-40">
              <a href="#">
                <h5 className="text-lg font-normal tracking-tight text-gray-600 dark:text-white ml-5">
                  The face of new SUVs
                </h5>
                <h1 className="text-5xl font-bold text-light-blue-900 ml-5 mb-7">
                  FRONX
                </h1>
                <img
                  className="p-8 rounded-t-lg"
                  src="/breeza.png"
                  alt="product image"
                />
              </a>
              <div className="">
                <div className="flex justify-between mt-1.5 mb-3">
                  <span className="font-bold text-gray-800 text-xl">Price</span>
                  <span className="font-bold text-gray-800 text-xl ml-10">
                    Milage
                  </span>
                  <span className="font-bold text-gray-800 text-xl ">
                    Power
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-lg font-normal text-gray-900 ">
                    Rs.49,99,99
                  </span>
                  <span className="text-lg font-normal text-gray-900 ">
                    12.51kmpl
                  </span>
                  <span className="text-lg font-normal text-gray-900  mr-3">
                    130ps
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default CarCard;
