import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import Services from "./_components/Services/Services";
import About from "./_components/About/About";
import Contact from "./_components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
