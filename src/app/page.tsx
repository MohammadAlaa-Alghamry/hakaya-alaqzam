'use client';

import Nav from "./Compontents/Nav";
import Footer from "./Compontents/Footer";
import GoodMorning from "./Compontents/home/GoodMorning";
import ReadMore from "./Compontents/home/ReadMore";
import OurProducts from "./Compontents/home/OurProducts";


export default function Page() {
  return (
    // <main className="h-full w-[1440px] max-w-[1440px] min-w-[1440px] aspect-[3/3]">
    <main className="h-full w-[1440px] max-w-[1440px]">
      {/* <div className="bg-white"> */}
      <div className="bg-[#f6ebdf]">
        <Nav />
        <GoodMorning />
        <ReadMore />
        <OurProducts />
        <Footer />
      </div>
    </main>
  );
}
