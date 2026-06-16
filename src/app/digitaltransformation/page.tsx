import Header from "../components/Header";
import Footer from "../components/Footer";
import DTHero from "../components/digitaltransformation/DTHero";
import DTFeatures from "../components/digitaltransformation/DTFeatures";

export default function DigitalTransformationPage() {
    return (
        <>
            <Header />
            <main className="relative">
                <DTHero />
                <DTFeatures />
            </main>
            <Footer />
        </>
    );
}
