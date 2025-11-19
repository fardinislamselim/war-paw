import React from "react";
import { FiHome, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-base-200">
      <div
        className="container px-2 mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen "
        id="top"
      >
        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="https://i.ibb.co.com/HT2cRL7c/error.png"
            alt="Dog and Cat"
            className="w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-[120px] md:text-[150px] font-extrabold text-primary leading-none">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral">
            Oops! Nothing Was Found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto lg:mx-0">
            Sorry, we couldn’t find the page you were looking for. Please return
            to the homepage.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-base-100 font-semibold py-3 px-6 rounded-full hover:bg-secondary transition-all duration-300"
          >
            <FiHome size={20} />
            Return To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
