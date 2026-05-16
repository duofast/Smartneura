import Header from "./components/Header";
import Hero from "./components/Hero";
import Transformation from "./components/Transformation";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Industries from "./components/Industries";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Transformation />
        <Approach />
        <Industries />
        <Solutions />
      </main>
      <Footer />
    </>
  );
}