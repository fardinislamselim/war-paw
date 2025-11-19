import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const WinterClothingSection = () => {
  const products = [
    {
      id: 1,
      name: "Cozy Knit Sweater",
      image: "https://i.ibb.co/ccPy0H2Z/unnamed.jpg",
      price: "$24.99",
    },
    {
      id: 2,
      name: "Winter Boots Set",
      image: "https://i.ibb.co/F2DBq0H/unnamed.jpg",
      price: "$19.99",
    },
    {
      id: 3,
      name: "Fluffy Pet Blanket",
      image: "https://i.ibb.co/Q3gxxvNf/unnamed.jpg",
      price: "$14.99",
    },
    {
      id: 4,
      name: "Fleece Hoodie",
      image: "https://i.ibb.co/KcW3WfhG/unnamed.jpg",
      price: "$22.99",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <section className="container mx-auto px-2 text-center">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-base-100 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="p-5 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-secondary">
                {product.name}
              </h3>
              <p className="text-sm text-primary mb-3">{product.price}</p>
              <button className="btn btn-sm btn-primary text-white rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterClothingSection;
