"use client";
import React from "react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <div className="bg-neutral-950 h-auto pb-8 pt-14 px-4 sm:px-6 lg:px-8 xl:px-10 mb-11">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-300">
            Testimonials
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-gray-400">
            Hear what our Clients Say
          </h2>
        </div>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <section className="flex bg-white dark:bg-gray-900 ">
          <SwiperSlide>
            <div className="max-w-screen-xl  mx-auto text-center lg:py-4 lg:px-6 ">
              <figure className="max-w-screen-md mx-auto ">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-400 dark:text-white">
                    “Suzuki has seamlessly integrated into my daily life. With
                    its multilingual support, I can interact in my preferred
                    Nepali language, and the fitness tracking features keep me
                    motivated. It's more than a car; it's a reflection of our
                    culture and technology at its best.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-400 dark:text-white">
                      Priya Sharma
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-400 dark:text-gray-400">
                      Athelete
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-4 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-400 dark:text-white">
                    “Suzuki has seamlessly integrated into my daily life. With
                    its multilingual support, I can interact in my preferred
                    Nepali language, and the fitness tracking features keep me
                    motivated. It's more than a car; it's a reflection of our
                    culture and technology at its best.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-400 dark:text-white">
                      Micheal Gough
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-400 dark:text-gray-400">
                      Programmer
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-screen-xl  mx-auto text-center lg:py-4 lg:px-6 ">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-400 dark:text-white">
                    “Suzuki has seamlessly integrated into my daily life. With
                    its multilingual support, I can interact in my preferred
                    Nepali language, and the fitness tracking features keep me
                    motivated. It's more than a car; it's a reflection of our
                    culture and technology at its best.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-400 dark:text-white">
                      Priya Sharma
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-400 dark:text-gray-400">
                      Athelete
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-screen-xl  mx-auto text-center lg:py-4 lg:px-6 ">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-400 dark:text-white">
                    “Suzuki has seamlessly integrated into my daily life. With
                    its multilingual support, I can interact in my preferred
                    Nepali language, and the fitness tracking features keep me
                    motivated. It's more than a car; it's a reflection of our
                    culture and technology at its best.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-400 dark:text-white">
                      Priya Sharma
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-400 dark:text-gray-400">
                      Athelete
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        </section>
      </Swiper>
    </div>
  );
};

export default Testimonials;
