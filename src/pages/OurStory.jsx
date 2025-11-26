import React from "react";
import jewelryImage from "../assets/image1.png"; // First section image
import logo from "../assets/logo.png"; // Logo image
import aboutImage from "../assets/image1.png"; // About Us image
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const OurStory = () => {
  return (
    <>
      <Navbar />

      <div className="w-full">
        {/* -------------------- OUR STORY Section -------------------- */}
        <section className="w-full min-h-screen bg-[#d6a98c] flex flex-col md:flex-row items-center justify-center gap-x-12 px-6 md:px-12 py-12 font-serif">
          {/* Left Column: Text Content */}
          <div className="md:w-1/4 w-full flex flex-col items-center justify-center text-center text-black space-y-4 font-cinzel">
            <img src={logo} alt="Auraa Club Logo" className="w-30 h-30" />

            <h1 className="text-2xl font-semibold tracking-widest mt-2 ">
              THE AURAA CLUB
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold leading-snug font-serif italic pt-4">
              A fusion of
              <br />
              your aura &<br />
              your style
            </h2>

            <p className="text-sm font-semibold pt-2 font-cinzel">
              Celebrate with ease – tangle-free,
              <br />
              damage-free, worry-free.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-3/5 w-full mt-10 md:mt-0">
            <img
              src={jewelryImage}
              alt="Jewelry display"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* -------------------- ABOUT US Section (New Layout) -------------------- */}
        <section
          // The parent container is relative to position the layers inside it
          className="relative w-full min-h-[90vh] md:min-h-screen flex items-center font-sans overflow-hidden"
        >
          {/* Layer 1: Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutImage}
              alt="A model wearing elegant jewelry from The Auraa Club"
              // object-cover ensures the image covers the entire area without distortion
              className="w-full h-full object-cover"
            />
            {/* Layer 2: Gradient Overlay for Readability */}
            {/* This dark gradient ensures the light text on top is easy to read */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
          </div>

          {/* Layer 3: Text Content */}
          {/* The content is positioned relative and given a higher z-index */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div
              // This container holds the text, giving it a max-width and styling
              className="max-w-xl md:max-w-2xl text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Jewelry That Tells Your Story
              </h2>

              <div className="text-base md:text-lg leading-relaxed space-y-5 text-gray-200">
                <p>
                  <span className="font-semibold text-xl text-amber-300">
                    Welcome to The Auraa Club! ✨
                  </span>{" "}
                  We're so thrilled you're here.
                </p>
                <p>
                  We believe jewelry should be as unique and sparkling as you
                  are. That's why we meticulously curate a collection that not
                  only adorns you but also genuinely reflects your personality
                  and enhances your inner glow.
                </p>
                <p>
                  Forget one-size-fits-all—we’re here to help you discover
                  pieces that resonate with your one-of-a-kind aura. Explore our
                  collections and let's find the jewelry that lets your true
                  self shine.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default OurStory;
