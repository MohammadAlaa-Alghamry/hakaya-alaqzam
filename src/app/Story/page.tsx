'use client';

import React from "react";
import Story from "./Story";


export default function Page() {
    return (

        <main className="w-[100%] h-full ">
          <div style={{ backgroundImage: 'url("/img/story/tree-leaves-bg-img.png")' }}
        className=" bg-cover">
            
          <Story/>
           </div>
        </main>
    );
}
