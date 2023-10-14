import React from "react";

import Hero from "../../components/Hero";
import About from "../../components/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Student from "../../components/Student";
import Technologies from "../../components/Technologies";

import "./index.css";

export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Student />
      <Footer />
    </div>
  );
}