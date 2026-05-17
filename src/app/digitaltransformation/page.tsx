import Header from "../components/Header";
import Footer from "../components/Footer";
import DTHero from "../components/digitaltransformation/DTHero";
import BusinessTransformation from "../components/digitaltransformation/BusinessTransformation";
import DigitalTransformationSection from "../components/digitaltransformation/DigitalTransformationSection";
import NetworkTransformation from "../components/digitaltransformation/NetworkTransformation";
import WaterRipple from "../components/digitaltransformation/WaterRipple";

export default function DigitalTransformationPage() {
    return (
        <>
            <Header />
            <main className="relative">
                {/* <WaterRipple /> */}
                <DTHero />
                <BusinessTransformation />
                <DigitalTransformationSection />
                <NetworkTransformation />
            </main>
            <Footer />
        </>
    );
}