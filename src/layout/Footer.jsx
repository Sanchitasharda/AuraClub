import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import image from "../assets/footer-image.jpg"; // Ensure this path is correct

const Footer = () => {
  return (
    // MODIFICATION 1: Reduced overall vertical padding from py-10 to py-8
    <footer className="w-full bg-[#d2a98e] text-black font-serif px-6 md:px-16 py-8">
      <div className="mx-auto flex flex-col">
        {/* --- TOP SECTION: HEADING + IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Heading */}
          <div className="space-y-3">
            {/* MODIFICATION 2: Reduced heading font size from text-5xl to text-4xl */}
            <h1 className="text-4xl font-bold leading-tight">
              THE AURAA <br /> CLUB
            </h1>
            <p className="uppercase tracking-wide text-sm font-semibold">
              A FUSION OF YOUR AURA & YOUR STYLE
            </p>
          </div>

          {/* Right: Image */}
          <div>
            {/* MODIFICATION 3: Drastically reduced image height from 360px to 200px */}
            <img
              src={image}
              alt="Jewelry"
              className="w-full h-[200px] object-cover rounded-tr-[50px] rounded-br-[50px] shadow-md"
            />
          </div>
        </div>

        {/* --- SEPARATOR LINE --- */}
        {/* MODIFICATION 4: Reduced the margin on the separator line from my-8 to my-6 */}
        <hr className="border-t border-gray-700 my-6" />

        {/* --- BOTTOM SECTION: INFO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Stay in Touch & Subscribe */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-bold">Stay in Touch</p>
              <p className="text-base">
                Follow us on Instagram for styling tips, new launches, and
                exclusive offers!
                <br />
                @_theauraaclub_
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <span role="img" aria-label="mail" className="text-xl">
                📧
              </span>
              <p className="text-base">
                Subscribe for 10% off your first order!
              </p>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-6">
            <div>
              <p className="text-lg font-bold">Phone</p>
              <p>8130643324, 9540290564</p>
            </div>
            <div>
              <p className="text-lg font-bold">Email</p>
              <p>hello@theauraaclub.in</p>
            </div>
            <div>
              <p className="text-lg font-bold">Socials</p>
              <div className="flex gap-6 mt-2 items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
                    <FaInstagram className="text-2xl text-white" />
                  </div>
                  <span>_theauraaclub_</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1877F2]">
                    <FaFacebook className="text-2xl text-white" />
                  </div>
                  <span>THE AURAA CLUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
