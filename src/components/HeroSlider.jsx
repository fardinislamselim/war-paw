import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";

const heroSlides = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/7Nj39LZr/charley-chau-snuggle-dog-bed-velour-teal-for-tunnelbeds-co-uk-04.webp",
    title: "Snuggle Season for Pets",
    subtitle: "Adorable winter sweaters to keep tails wagging and paws warm.",
    buttonText: "Explore Collection",
    buttonLink: "#",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/Z1FfFDPR/pexels-miami302-31184827.jpg",
    title: "Cozy Companions",
    subtitle: "Wrap your furry friend in comfort with our soft winter outfits.",
    buttonText: "Shop Cozy Fits",
    buttonLink: "#",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co.com/d4vkR2tj/shutterstock-1916060788-scaled-e1685040118261.webp",
    title: "Warm Hearts, Warmer Coats",
    subtitle: "Stylish and snug winter gear for every pet’s personality.",
    buttonText: "View Styles",
    buttonLink: "#",
  },
  {
    id: 4,
    image:
      "https://thumbs.dreamstime.com/z/english-cocker-spaniel-puppy-cuddles-gray-kitten-under-warm-white-blanket-bed-pets-sleep-home-red-heart-head-friends-embrace-385586884.jpg?ct=jpeg",
    title: "Frosty Fun Awaits",
    subtitle: "Cozy scarves and paw protection for playful winter days.",
    buttonText: "Get Ready",
    buttonLink: "#",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[450px] shadow-xl overflow-hidden group rounded-2xl container px-2 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className={`
          h-full
          [&_.swiper-pagination-bullet]:bg-white/60
          [&_.swiper-pagination-bullet-active]:!bg-primary
          [&_.swiper-pagination-bullet]:transition-all
          [&_.swiper-pagination]:bottom-3
        `}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral/80 via-neutral/40 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-base-100 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 animate__animated animate__fadeInDown drop-shadow-md text-primary">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg mb-6 max-w-md animate__animated animate__fadeInUp animate__delay-1s drop-shadow-sm text-base-100">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.buttonLink}
                  className="btn bg-secondary hover:bg-accent border-none text-base-100 text-sm md:text-base font-semibold 
                             rounded-full px-6 py-2 shadow-md uppercase tracking-wider transform transition 
                             hover:scale-105 animate__animated animate__zoomIn animate__delay-2s"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-3 z-10 
                     p-2 md:p-3 rounded-full bg-secondary/30 text-base-100 cursor-pointer 
                     hover:bg-secondary/50 transition-all duration-300 
                     opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-md"
        >
          <FiChevronLeft size={22} />
        </div>

        <div
          className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-3 z-10 
                     p-2 md:p-3 rounded-full bg-secondary/30 text-base-100 cursor-pointer 
                     hover:bg-secondary/50 transition-all duration-300 
                     opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-md"
        >
          <FiChevronRight size={22} />
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
