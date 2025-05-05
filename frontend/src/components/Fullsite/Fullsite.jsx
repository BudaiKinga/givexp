import { useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Kategoriak from "../Homepage/Kategoriak/Kategoriak";
import Recommendations from "../Homepage/Recommendations/Recommendations";
import Reviews from "../Homepage/Reviews/Reviews";
import Terkep from "../Homepage/Terkep/Terkep";
import "./Fullsite.css";
import { fnIsMobile } from "../../utils/utils";

const Fullsite = () => {
  const isMobile = fnIsMobile();

  const mobile = () => {
    console.log("mobile");
    return (
      <>
        <Header />
        <Recommendations />
        <Kategoriak />
        {/* <Terkep />
        <Reviews /> */}
      </>
    );
  };

  const desktop = () => {
    console.log("desktop");
    return (
      <>
        <Header />
        <Banner />
        <Recommendations />
        <Kategoriak />
        <Terkep />
        <Reviews />
      </>
    );
  };

  return (
    <div className="fullsite">
      {
        //Check if message failed
        isMobile ? mobile() : desktop()
      }
    </div>
  );
};

export default Fullsite;
