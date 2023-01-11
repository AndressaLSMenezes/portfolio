import React, { useEffect } from "react";

import Header from "../../Components/Header";
import FirstSection from "../../Components/MainFirtSection";
import ProjectSection from "../../Components/MainProjectSection";
import SecondSection from "../../Components/MainSecondSection";

import LastSection from "../../Components/MainLastSection";
import { useUserContext } from "../../Contexts";

const LandingPages = () => {
  const { repositories } = useUserContext();

  useEffect(() => {
    console.log(repositories);
  }, []);

  return (
    <>
      <Header />
      <main className="col-center w-screen text-white">
        <FirstSection />
        <SecondSection />
        <ProjectSection />
        <LastSection />
      </main>
    </>
  );
};

export default LandingPages;
