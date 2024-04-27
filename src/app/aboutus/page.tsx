'use client';

import Nav from "../compontents/layout/Nav";
import Footer from "../compontents/Footer";
import OurProducts from "../compontents/home/OurProducts";
import AboutUs from "../compontents/AboutUs";
import React from "react";


export default function Page() {
  return (
    <main >
      <AboutUs/>
      <OurProducts/>
    </main>
  );
}
