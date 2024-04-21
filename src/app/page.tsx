'use client';

import Nav from "./Compontents/Nav";
import Section1 from "./Compontents/Section1";
import Section2 from "./Compontents/Section2";
import Section3 from "./Compontents/Section3";
import Footer from "./Compontents/Footer";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Nav></Nav>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
    </main>
  );
}
