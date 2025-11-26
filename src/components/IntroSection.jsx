// export default function AboutSection() {
//   return (
//     <section className="w-full bg-[#f8f5f0] py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">
//       {/* Left Column - Heading */}
//       <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 md:pr-12">
//         <h2 className="text-5xl md:text-6xl font-extrabold font-cinzel text-[#5c3a2d]">
//           Where Elegance <br /> Meets Everyday
//         </h2>
//       </div>

//       {/* Right Column - Paragraph */}
//       <div className="md:w-1/2 w-full text-center md:text-left">
//         <p className="text-[#5c3a2d] text-lg leading-relaxed max-w-lg md:max-w-none mx-auto">
//           At The Auraa Club, we believe jewellery isn't just an accessory – it's
//           an extension of your personality. Our carefully curated collection of
//           bracelets, rings, pendants, and earrings is designed for those who
//           crave timeless elegance, modern style, and everyday durability.
//         </p>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import vidThumbnail from '../assets/vid-thumbnail.png';
// import videoFile from '../assets/video.mp4';

// export default function AboutSection() {
//   const videoRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   // Observer to detect when video is in viewport
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.4 }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isVisible) {
//         videoRef.current.play().catch(() => {});
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isVisible]);

//   return (
//     <section className="w-full bg-[#f8f5f0] flex flex-col items-center justify-center">
//       {/* Text Section */}
//       <div className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">
//         <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 md:pr-12">
//           <h2 className="text-5xl md:text-6xl font-extrabold font-cinzel text-[#5c3a2d]">
//             Where Elegance <br /> Meets Everyday
//           </h2>
//         </div>
//         <div className="md:w-1/2 w-full text-center md:text-left">
//           <p className="text-[#5c3a2d] text-lg leading-relaxed max-w-lg md:max-w-none mx-auto">
//             At The Auraa Club, we believe jewellery isn't just an accessory – it's an extension of your
//             personality. Our carefully curated collection of bracelets, rings, pendants, and earrings is
//             designed for those who crave timeless elegance, modern style, and everyday durability.
//           </p>
//         </div>
//       </div>

//       {/* Auto-playing Video (like GIF) */}
//       <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative overflow-hidden flex items-center justify-center">

//         <video
//           ref={videoRef}
//           src={videoFile}
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//           poster={vidThumbnail}
//         />
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import vidThumbnail from '../assets/vid-thumbnail.png';
// import videoFile from '../assets/video.mp4';

// // Product Images
// import earringsImg from '../assets/earring.jpg';
// import braceletsImg from '../assets/earring.jpg';
// import pendantImg from '../assets/earring.jpg';
// import ringsImg from '../assets/earring.jpg';

// export default function AboutSection() {
//   const videoRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.4 }
//     );

//     if (videoRef.current) observer.observe(videoRef.current);

//     return () => {
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isVisible) videoRef.current.play().catch(() => {});
//       else videoRef.current.pause();
//     }
//   }, [isVisible]);

//   return (
//     <section className="w-full bg-[#f8f5f0] flex flex-col items-center justify-center">
//       {/* Top Text Section */}
//       <div className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">
//         <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 md:pr-12">
//           <h2 className="text-5xl md:text-6xl font-extrabold font-cinzel text-[#5c3a2d]">
//             Where Elegance <br /> Meets Everyday
//           </h2>
//         </div>
//         <div className="md:w-1/2 w-full text-center md:text-left">
//           <p className="text-[#5c3a2d] text-lg leading-relaxed max-w-lg md:max-w-none mx-auto">
//             At The Auraa Club, we believe jewellery isn't just an accessory – it's an extension of your
//             personality. Our carefully curated collection of bracelets, rings, pendants, and earrings is
//             designed for those who crave timeless elegance, modern style, and everyday durability.
//           </p>
//         </div>
//       </div>

//       {/* Auto-playing Video */}
//       <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative overflow-hidden flex items-center justify-center">
//         <video
//           ref={videoRef}
//           src={videoFile}
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//           poster={vidThumbnail}
//         />
//       </div>

//       {/* Our Products Section */}
//       <section className="w-full bg-[#d2ab91] py-16 px-6 md:px-24">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-[#3a1d0e] mb-12">
//             Our Products
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {/* Product 1 */}
//             <div className="flex flex-col items-center">
//               <img
//                 src={earringsImg}
//                 alt="Earrings"
//                 className="w-40 h-40 object-cover rounded"
//               />
//               <p className="mt-4 text-[#3a1d0e] text-lg font-medium border-t-2 border-[#3a1d0e] pt-2 w-full text-center">
//                 Earrings
//               </p>
//             </div>

//             {/* Product 2 */}
//             <div className="flex flex-col items-center">
//               <img
//                 src={braceletsImg}
//                 alt="Bracelets"
//                 className="w-40 h-40 object-cover rounded"
//               />
//               <p className="mt-4 text-[#3a1d0e] text-lg font-medium border-t-2 border-[#3a1d0e] pt-2 w-full text-center">
//                 Bracelets
//               </p>
//             </div>

//             {/* Product 3 */}
//             <div className="flex flex-col items-center">
//               <img
//                 src={pendantImg}
//                 alt="Pendant Chain"
//                 className="w-40 h-40 object-cover rounded"
//               />
//               <p className="mt-4 text-[#3a1d0e] text-lg font-medium border-t-2 border-[#3a1d0e] pt-2 w-full text-center">
//                 Pendant Chain
//               </p>
//             </div>

//             {/* Product 4 */}
//             <div className="flex flex-col items-center">
//               <img
//                 src={ringsImg}
//                 alt="Rings"
//                 className="w-40 h-40 object-cover rounded"
//               />
//               <p className="mt-4 text-[#3a1d0e] text-lg font-medium border-t-2 border-[#3a1d0e] pt-2 w-full text-center">
//                 Rings
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import vidThumbnail from "../assets/vid-thumbnail.png";
import videoFile from "../assets/video.mp4";

// Product Images
import earringsImg from "../assets/earring.jpg";
import braceletsImg from "../assets/earring.jpg";
import pendantImg from "../assets/earring.jpg";
import ringsImg from "../assets/earring.jpg";

export default function AboutSection() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) videoRef.current.play().catch(() => {});
      else videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <section className="w-full bg-[#f8f5f0] flex flex-col items-center justify-center font-cinzel">
      {/* Text Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 md:pr-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#5c3a2d] leading-tight">
            Where Elegance <br /> Meets Everyday
          </h2>
        </div>
        <div className="md:w-1/2 w-full text-center md:text-left">
          <p className="text-[#5c3a2d] text-lg leading-relaxed max-w-lg md:max-w-none mx-auto">
            At The Auraa Club, we believe jewellery isn't just an accessory –
            it's an extension of your personality. Our carefully curated
            collection of bracelets, rings, pendants, and earrings is designed
            for those who crave timeless elegance, modern style, and everyday
            durability.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full h-[280px] md:h-[360px] relative overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoFile}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={vidThumbnail}
        />
      </div>

      {/* Our Products Section */}
      <section className="w-full bg-[#d2ab91] py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a1d0e] mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product Cards */}
            {[
              { img: earringsImg, label: "Earrings" },
              { img: braceletsImg, label: "Bracelets" },
              { img: pendantImg, label: "Pendant Chain" },
              { img: ringsImg, label: "Rings" },
            ].map((product, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={product.img}
                  alt={product.label}
                  className="w-40 h-90 object-cover rounded"
                />
                <p className="mt-4 text-[#3a1d0e] text-lg font-medium border-t-2 border-[#3a1d0e] pt-2 w-full text-center">
                  {product.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You'll Love Section */}
      <section className="bg-[#fdf6ef] text-[#3c1f0a] w-full px-6 py-16">
        {/* Paragraph */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* <p className="text-lg md:text-xl font-semibold leading-relaxed">
            At The Auraa Club, we blend elegance with purpose. Each piece tells a story of timeless
            craftsmanship, thoughtful design, and unparalleled quality.
          </p>  */}
        </div>

        {/* Benefits */}
        <div className="text-left max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Why You’ll Love The Auraa Club
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-[#3c1f0a] p-6 rounded-md shadow-sm bg-white/40">
              <h3 className="font-bold text-lg mb-2">Anti-Tarnish Promise</h3>
              <p className="text-sm">Shine that lasts, without the fade</p>
            </div>
            <div className="border border-[#3c1f0a] p-6 rounded-md shadow-sm bg-white/40">
              <h3 className="font-bold text-lg mb-2">
                Premium Look,
                <br />
                Everyday Price
              </h3>
              <p className="text-sm">Affordable luxury in every piece</p>
            </div>
            <div className="border border-[#3c1f0a] p-6 rounded-md shadow-sm bg-white/40">
              <h3 className="font-bold text-lg mb-2">Comfort Meets Class</h3>
              <p className="text-sm">
                Lightweight, skin-friendly, and always elegant
              </p>
            </div>
            <div className="border border-[#3c1f0a] p-6 rounded-md shadow-sm bg-white/40">
              <h3 className="font-bold text-lg mb-2">Curated Styles</h3>
              <p className="text-sm">
                From minimal to statement, find your perfect match
              </p>
            </div>
          </div>
        </div>

        {/* Shipping & Packing Info */}
        <div className="text-left max-w-7xl mx-auto mb-16 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Fast. Safe. Beautifully Packed
          </h2>
          <p className="text-base mb-1">
            Every piece is packed with care and ready to gift.
          </p>
          <p className="text-base">Pan-India Delivery | Easy Returns|</p>
        </div>
      </section>
    </section>
  );
}
