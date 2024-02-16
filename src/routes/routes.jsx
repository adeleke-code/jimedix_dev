import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Services } from "../pages/Services/Services";
import { Blog } from "../pages/Blog/Blog";
import { Team } from "../pages/Team/Team";
import { Contact } from "../components/Contact/Contact";

export const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}

        {/* <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
