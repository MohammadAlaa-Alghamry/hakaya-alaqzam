'use client';

import NavBarOffset from "../compontents/NavBarOffset";
import Footer from "../Compontents/Footer";
import React from "react";
import ContactUs from "../Compontents/ContactUs";


export default function Page() {
    return (
        <main >
           <NavBarOffset />
            <ContactUs/>
            <Footer/>
        </main>
    );
}
