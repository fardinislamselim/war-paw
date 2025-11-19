import React from "react";
import HeroSlider from "../components/HeroSlider";
import SectionTitle from "../components/SectionTitle";
import { useLoaderData } from "react-router";
import ServiceCardContainer from "../components/ServiceCardContainer";
import CareTipsContainer from "../components/CareTipsContainer";
import ExpertVetsContainer from "../components/ExpertVetsContainer";
import { Toaster } from "react-hot-toast";
import WinterClothingSection from "../components/WinterClothingSection";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="mt-8">
        <HeroSlider></HeroSlider>
      </div>
      <section className="container px-2 mx-auto">
        <SectionTitle
          title="Cozy Winter Care for Your Pets"
          subtitle="Keep your furry friends warm, stylish, and happy this winter season."
        ></SectionTitle>
        <ServiceCardContainer data={data}></ServiceCardContainer>
      </section>
      <section className="container px-2 mx-auto">
        <SectionTitle
          title="Winter Care Tips for Pets"
          subtitle="Keep your pets safe, warm, and happy this winter."
        ></SectionTitle>
        <CareTipsContainer></CareTipsContainer>
      </section>
      <section className="container px-2 mx-auto">
        <SectionTitle
          title="Meet Our Expert Vets"
          subtitle="Professional care with a personal touch."
        ></SectionTitle>
        <ExpertVetsContainer></ExpertVetsContainer>
      </section>
      <section className="container px-2 mx-auto">
        <SectionTitle
          title="Winter Clothing Collection"
          subtitle="Keep your pets warm, comfortable, and adorable this winter with our exclusive collection of cozy clothing and accessories."
          className="my-5"
        ></SectionTitle>
        <WinterClothingSection></WinterClothingSection>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
