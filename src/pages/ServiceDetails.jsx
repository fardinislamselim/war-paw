import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FiStar, FiMail, FiUser, FiTag, FiCalendar } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import ServiceNotFound from "../components/ServiceNotFound";

const ServiceDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const service = data.find((s) => s.serviceId.toString() === id);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  if (!service) {
    return <ServiceNotFound />;
  }

  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = service;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Booking successful!");
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="bg-base-100 py-16 px-4 md:px-10 relative">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
          {serviceName}
        </h2>
        <p className="text-neutral text-lg max-w-2xl mx-auto">
          Discover everything you need to know about our{" "}
          <span className="text-secondary">{category}</span> — where care meets
          comfort for your furry friends.
        </p>
      </div>

      <div className="container py-2 mx-auto flex flex-col md:flex-row">
        <div>
          <img
            src={image}
            alt={serviceName}
            className="w-full md:w-[500px] object-cover hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        </div>

        <div className="p-6 md:p-10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="badge badge-primary px-4 py-3 text-base-100 text-sm font-semibold">
              {category}
            </span>
            <span className="flex items-center gap-1 text-secondary font-semibold">
              <FiStar className="text-yellow-400" />
              {rating} / 5
            </span>
          </div>

          <h3 className="text-2xl font-bold text-neutral mt-2">
            Premium {serviceName}
          </h3>

          <p className="text-gray-700 leading-relaxed">{description}</p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="text-primary font-semibold flex items-center gap-2">
              <FiTag /> Price: ${price}
            </span>
            <span className="text-accent font-medium flex items-center gap-2">
              <FiCalendar /> Slots: {slotsAvailable}
            </span>
          </div>

          <div className="divider my-4"></div>

          <div className="space-y-2 text-sm text-neutral">
            <p className="flex items-center gap-2">
              <FiUser className="text-primary" />{" "}
              <strong>{providerName}</strong>
            </p>
            <p className="flex items-center gap-2">
              <FiMail className="text-primary" /> {providerEmail}
            </p>
          </div>

          <div
            className="mt-16 bg-base-200 rounded-2xl shadow-md max-w-xl mx-auto p-8"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-center text-primary mb-6">
              Book This Service
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-neutral mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="btn bg-primary hover:bg-secondary text-base-100 w-full font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
