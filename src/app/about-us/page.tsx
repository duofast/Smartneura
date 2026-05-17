import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutMission from "../components/about/AboutMission";
import AboutCoreValues from "../components/about/AboutCoreValues";
import CursorTrail from "../components/CursorTrail";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                {/* Trail only lives in this wrapper */}
                <div className="relative overflow-hidden">
                    <AboutHero />
                    <CursorTrail />
                    <AboutMission />
                    <AboutCoreValues />
                </div>

            </main>
            <Footer />
        </>
    );
}