import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-35 w-full md:h-140 bg-primary text-center">
      <div className="md:pt-60 pt-10">
        <h1 className="md:text-7xl text-5xl font-semibold text-scondary">
          Eat, Cook, Repeat
        </h1>
        <p className="mt-10 md:text-2xl text-lg text-scondary">
          Share your best recipe by uploading here !
        </p>
      </div>
      <ul className="flex justify-center md:pt-56 md:pb-0 pb-5 pt-20 md:gap-8 gap-3 text-scondary">
        <li className="hover:text-white cursor-pointer">
          <Link to="/">Product</Link>
        </li>
        <li className="hover:text-white cursor-pointer">Company</li>
        <li className="hover:text-white cursor-pointer">Learn More</li>
        <li className="hover:text-white cursor-pointer">Get in Touch</li>
      </ul>
    </footer>
  );
};

export default Footer;
