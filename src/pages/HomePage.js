import React from "react";
import TopBar from "../components/common/TopBar";
import Counter from "../components/home/Counter";
import HomeAbout from "../components/home/HomeAbout";
import Footer from "../components/common/Footer";
import Banner from "../components/home/Banner";
import BannerContact from "../components/home/BannerContact";
import Features from "../components/home/Features";
import Pricing from "../components/home/Pricing";
import Facility from "../components/home/Facility";
import HomeContact from "../components/home/HomeContact";
import Testimonals from "../components/home/Testimonals";
import Services from "../components/home/Services";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counter />
      <Services />
      <Pricing />
      <Facility />
      <HomeContact />

      <Testimonals />
    </>
  );
};

export default HomePage;
