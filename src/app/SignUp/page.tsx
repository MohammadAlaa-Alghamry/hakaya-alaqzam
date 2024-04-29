'use client';

import React from "react";
import SignUp from "./SignUp";


export default function Page() {
    return (

        <main className="w-[100%]">
            <div 
                className=" bg-[url('/img/SignUp/sign-up-bg-mobile.png')] md:bg-[url('/img/SignUp/Sign-up.png')] w-full aspect-[1.5] bg-center bg-contain bg-no-repeat   ">
                <SignUp />
            </div>
        </main>
    );
}
