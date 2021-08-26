import React, { useState } from "react";
import Footer from "../Components/Footer";

import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../Components/InfoSection/Data";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Sidebar from "../Components/Sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer/>
    </>
  );
}

export default Home;
