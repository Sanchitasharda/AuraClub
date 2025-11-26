import heroImg from "../assets/image1.png";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#cfae97] flex flex-col md:flex-row items-center justify-between">
      {/* Left - Image */}
      <div className="md:w-1/2 w-full flex items-start justify-start -mt-10 pr-16">
    <img
      src={heroImg}
      alt="Jewelry Hero"
      className="w-[700px] h-[550px] object-cover rounded animate-breathe"
    />
  </div>
      {/* Right - Text */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="text-[#5c3a2d] text-center flex flex-col items-center justify-center -mt-20">
          <img
            src={logo}
            alt="Auraa Club Logo"
            className="w-[300px] h-[250px] mb-4 mx-auto"
          />

          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 font-cinzel">
            THE AURAA CLUB
          </h1>

          <p className="font-bold text-base tracking-wide mb-6 font-cinzel">
            A FUSION OF YOUR AURA & YOUR STYLE
          </p>

          <button
            className="border-2 border-[#5c3a2d] px-16 py-3 text-[#5c3a2d] font-bold text-lg leading-tight tracking-wide uppercase font-cinzel
      transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:bg-[#5c3a2d] hover:text-white"
          >
            SHOP
            <br />
            NOW
          </button>
        </div>
      </div>
    </section>
  );
}
