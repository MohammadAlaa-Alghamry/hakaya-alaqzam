'use client';

import Nav from "./Compontents/Nav";
import Footer from "./Compontents/Footer";
import GoodMorning from "./Compontents/GoodMorning";
import ReadMore from "./Compontents/ReadMore";
import OurProducts from "./Compontents/OurProducts";


export default function Page() {
  return (
    <main  >
      <Nav></Nav>
      <GoodMorning></GoodMorning>
      <ReadMore></ReadMore>
      <OurProducts></OurProducts>
      <Footer></Footer>
    </main>
  );
}
