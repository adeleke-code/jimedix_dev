import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { ContactHero } from "../../components/Hero/ContactHero";
import ContactForm from "../../components/Contact/ContactForm";

export const Contact = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/4064227/pexels-photo-4064227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("${backgroundImageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        <div
          className="px-4 lg:px-10 max-w-[1500px] m-auto relative z-10"
          style={{
            zIndex: 1,
          }}
        >
          <NavBar />
          <ContactHero />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};
