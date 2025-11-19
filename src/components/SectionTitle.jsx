import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mt-15 mb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 animate__animated animate__fadeInDown">
        {title}
      </h2>
      <p className="text-base md:text-lg text-neutral/80 animate__animated animate__fadeInUp animate__delay-1s">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-secondary mx-auto mt-3 rounded-full animate__animated animate__fadeInUp animate__delay-1s"></div>
    </div>
  );
};

export default SectionTitle;
