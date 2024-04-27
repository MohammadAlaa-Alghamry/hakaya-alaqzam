'use client';

import Nav from "../Compontents/layout/Nav";
import Footer from "../Compontents/Footer";
import React from "react";
import ContactUs from "../Compontents/ContactUs";


export default function Page() {
    return (
        <main >
            <Nav/>
            <ContactUs/>
            <Footer/>
        </main>
    );
}
