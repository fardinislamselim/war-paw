import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  const data = useLoaderData();
  return (
    <div className="py-10 bg-base-100 ">
      <div className="container mx-auto px-2">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a variety of pet care services to meet your needs."
           mb-8
        />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Services;
