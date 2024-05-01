'use client';

import React from "react";
import Login from "./Login";

export default function Page() {
    return (

        <main className="w-[100%] ">
        <div 
            className=" bg-[url('/img/Login/login-bg-mobile-img.png')] md:bg-[url('/img/Login/login-bg-img.png')] w-full bg-center bg-contain bg-no-repeat flex justify-center items-center">
           <Login/>
        </div>
    </main>
    );
}
