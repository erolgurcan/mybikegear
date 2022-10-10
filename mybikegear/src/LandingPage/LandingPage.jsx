import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/animate.min.css";
import LandingPageHeader from "./LandingPageHeader";
import LandingPageHero from "./LandingPageHero";


const LandingPage = () => {
  return (
    <div>
     <LandingPageHeader />
     <LandingPageHero />
    </div>
  );
};

export default LandingPage;
