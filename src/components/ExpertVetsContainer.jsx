import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

const vetsData = [
  {
    id: 1,
    name: "Alex Javed",
    role: "Pet Expert",
    image: "https://i.ibb.co/vvZShx4b/unnamed.jpg",
  },
  {
    id: 2,
    name: "Jessica Lauren",
    role: "Pet Expert",
    image: "https://i.ibb.co/dsTXmQj3/unnamed.jpg",
  },
  {
    id: 3,
    name: "Jenny William",
    role: "Pet Expert",
    image: "https://i.ibb.co/VW3s9q4v/unnamed.jpg",
  },
  {
    id: 4,
    name: "Daniel Thomas",
    role: "Pet Expert",
    image: "https://i.ibb.co/TD99kd7b/unnamed.jpg",
  },
];

const ExpertVetsContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vetsData.map((vet) => (
          <div
            key={vet.id}
            className="bg-base-100 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="p-5 overflow-hidden">
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-60 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-secondary">
                {vet.name}
              </h3>
              <p className="text-sm text-primary">{vet.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVetsContainer;
