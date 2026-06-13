import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import BrandStory from "../sections/BrandStory";
import SignatureCollection from "../sections/SignatureCollection";
import Experience from "../sections/Experience";
import Testimonials from "../sections/Testimonials";
import ReservationCTA from "../sections/ReservationCTA";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandStory />
      <SignatureCollection />
      <Experience />
      <Testimonials />
      <ReservationCTA />
      <Footer />
    </>
  );
}
