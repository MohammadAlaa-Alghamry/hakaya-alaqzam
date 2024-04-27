'use client';

import Nav from "./Compontents/Nav";
import Footer from "./Compontents/Footer";
import GoodMorning from "./Compontents/home/GoodMorning";
import ReadMore from "./Compontents/home/ReadMore";
import OurProducts from "./Compontents/home/OurProducts";


export default function Page() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-full bg-[#f6ebdf] inline">
        <GoodMorning />
        <ReadMore />
        <OurProducts />
      </div>
    </main>
  );
}
