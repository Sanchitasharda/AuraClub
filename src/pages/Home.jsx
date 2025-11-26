import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#cfae97]">
      <Navbar />
      <Hero />
      <IntroSection />
      <Footer/>
    </div>
  );
}
