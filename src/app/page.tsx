import Header from "./components/Header";
import Hero from "./components/Hero";
import Transformation from "./components/Transformation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Transformation />
      </main>
      <Footer />
    </>
  );
}