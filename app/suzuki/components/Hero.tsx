"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="mb-10 md:mb-20 lg:mb-28">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
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
          <SwiperSlide>
            <div className="aspect-w-16 md:aspect-h-16 lg:aspect-h-16">
              <Image
                src="/image2.png"
                alt="qwe"
                width={800} // Set the width to a large value
                height={1000} // Set the height to a large value
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-w-16 md:aspect-h-16 lg:aspect-h-16">
              <Image
                src="/swiper2.png"
                alt="asd"
                width={800} // Set the width to a large value
                height={1000} // Set the height to a large value
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
