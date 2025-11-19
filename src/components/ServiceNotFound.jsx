import React from "react";

const ServiceNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-base-100 px-4">
      <div
        className="bg-base-100 w-full h-full mt-10"
        data-aos="fade-up"
      >
        <div className="mb-4">
          <img
            src="https://i.ibb.co.com/d4f02dx0/Pngtree-no-results-8816185.png"
            alt="Not Found"
            className="w-28 mx-auto animate-bounce"
          />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-2">
          Service Not Found
        </h2>
        <p className="text-neutral text-base mb-6">
          Oops! The service you’re looking for doesn’t exist or may have been
          removed. Try exploring other services.
        </p>
        <a
          href="/"
          className="btn bg-primary hover:bg-secondary text-base-100 font-semibold rounded-full px-8 transition-all duration-300 hover:scale-105"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ServiceNotFound;
