import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";

import MainNav from "../components/Nav/MainNav";
import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs/AboutUs";
import Experience from "../components/Experience/Experience";
import Solutions from "../components/Solutions/Solutions";
import Location from "../components/Location/Location";
import Experts from "../components/Experts/Experts";
import Contact from "../components/Contact/Contact";
import SiteMap from "../components/SiteMap/SiteMap";

function Home() {
  const locationRef = useRef(null);

  return (
    <div id="home">
      <Header />
      <AboutUs />
      <Experience />
      <Solutions />
      <Location locationRef={locationRef} />
      <Experts />
      <Contact />
      <SiteMap />
    </div>
  );
}

export default Home;
