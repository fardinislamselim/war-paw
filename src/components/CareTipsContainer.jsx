import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const winterTips = [
  {
    id: 1,
    title: "Keep Pets Warm Indoors",
    description:
      "Provide cozy beds, blankets, and heated pads to ensure your pets stay warm during cold winter days.",
    image: "https://i.ibb.co.com/hxTCcYBQ/unnamed.jpg",
  },
  {
    id: 2,
    title: "Dress Them for the Cold",
    description:
      "Use pet sweaters, jackets, or booties to protect your furry friends from freezing temperatures.",
    image: "https://i.ibb.co.com/FLyXTWRP/unnamed.jpg",
  },
  {
    id: 3,
    title: "Protect Paws from Ice & Salt",
    description:
      "Wash paws after walks and use paw balm to prevent dryness or cracking from ice and salt.",
    image: "https://i.ibb.co.com/vfqtLmD/unnamed.jpg",
  },
  {
    id: 4,
    title: "Keep Them Hydrated",
    description:
      "Even in winter, pets need plenty of fresh water to stay healthy and prevent dehydration.",
    image: "https://i.ibb.co.com/xqWXgWp7/unnamed.jpg",
  },
  {
    id: 5,
    title: "Regular Grooming",
    description:
      "Maintain grooming habits, as thick winter coats can mat and trap dirt, reducing their insulation.",
    image: "https://i.ibb.co.com/Z6MTxKBH/unnamed.jpg",
  },
  {
    id: 6,
    title: "Limit Outdoor Exposure",
    description:
      "Avoid keeping your pets outside for long periods in freezing temperatures to prevent hypothermia and frostbite.",
    image: "https://i.ibb.co.com/2Y0kbppm/unnamed.jpg",
  },
];

const CareTipsContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {winterTips.map((tip) => (
        <div
          key={tip.id}
          className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-base-300"
          data-aos="zoom-in"
        >
          <div className="p-5">
            <img
              src={tip.image}
              alt={tip.title}
              className="object-cover rounded-2xl w-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-secondary mb-2">
              {tip.title}
            </h3>
            <p className="text-neutral text-sm">{tip.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareTipsContainer;
