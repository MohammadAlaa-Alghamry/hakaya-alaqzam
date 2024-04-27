'use client';

import Nav from "./compontents/layout/Nav";
import Footer from "./compontents/Footer";
import GoodMorning from "./compontents/home/GoodMorning";
import ReadMore from "./compontents/home/ReadMore";
import OurProducts from "./compontents/home/OurProducts";


export default function Page() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-full bg-[#f6ebdf]">
        <GoodMorning />
        <ReadMore />
        <OurProducts />
      </div>
    </main>
  );
}
