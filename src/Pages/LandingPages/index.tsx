import React from "react";

import Header from "../../Components/Header";
import FirstSection from "../../Components/MainFirtSection";
import ProjectSection from "../../Components/MainProjectSection";
import SecondSection from "../../Components/MainSecondSection";

import Footer from "../../Components/Footer";

const LandingPages = () => {
  return (
    <>
      <Header />
      <main className="col-center w-screen text-white ">
        <FirstSection />
        <SecondSection />
        <ProjectSection/>
      </main>
      <Footer/>
    </>
  );
};

export default LandingPages;
