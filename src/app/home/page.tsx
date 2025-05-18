import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
    return (
      <>
      <Navbar />
      <main>
        <HeroBanner />
        {/* You can add more sections here later like Featured Products */}
      </main>
      <Footer />
    </>
    );
  }
  