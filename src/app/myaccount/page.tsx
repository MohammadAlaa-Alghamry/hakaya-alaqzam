'use client';

import React from "react";
import MyAccount from "./MyAccount";

export default function Page() {
  return (

    <main className="w-[100%] h-full">
      <div style={{ backgroundImage: 'url("/img/home/tree-leaves.png")' }}
        className=" bg-cover bg-right-bottom">
        <MyAccount />
      </div>
    </main>
  );
}
