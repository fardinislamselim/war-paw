import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { image, serviceName, rating, price } = service;



  return (
    <div className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-base-300">
      <div className="p-10">
        <img
          src={image}
          alt={serviceName}
          className="object-cover rounded-xl"
        />
      </div>

      <div className="p-5 text-center flex flex-col justify-between h-48">
        <div>
          <h3 className="text-lg font-bold text-primary mb-1">{serviceName}</h3>
          <p className="text-sm text-neutral/70 mb-3">
            Rating:{" "}
            <span className="font-semibold text-secondary">{rating}</span> / 5
          </p>
        </div>

        <div>
          <p className="text-base font-semibold text-accent mb-3">
            Price: ${price}
          </p>
          <Link
            to={`/service/${service.serviceId}`}
            className="btn btn-sm bg-secondary hover:bg-accent border-none text-base-100 rounded-full px-5 transition-all duration-300 hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
