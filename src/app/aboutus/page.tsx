'use client';

import Nav from "../Compontents/Nav";
import Footer from "../Compontents/Footer";
import OurProducts from "../Compontents/home/OurProducts";
import AboutUs from "../Compontents/Aboutus";
import React from "react";


export default function Page() {
  return (
    <main >
      <Nav/>
      <AboutUs/>
      <OurProducts/>
      <Footer/>
    </main>
  );
}
