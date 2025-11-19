import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCardContainer = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((service) => (
        <div key={service.serviceId} data-aos="zoom-in">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};

export default ServiceCardContainer;
