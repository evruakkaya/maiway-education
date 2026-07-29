import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Countries from "@/components/Countries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="absolute top-5 left-1/2 z-20 w-full max-w-[1200px] -translate-x-1/2 px-6">
        <Navbar />
      </div>

      <div id="programs">
        <Programs />
      </div>

      <div id="countries">
        <Countries />
      </div>

      <Footer />
    </main>
  );
}