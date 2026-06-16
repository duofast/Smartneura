import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutMission from "../components/about/AboutMission";
import AboutCoreValues from "../components/about/AboutCoreValues";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <AboutHero />
                <AboutMission />
                <AboutCoreValues />
            </main>
            <Footer />
        </>
    );
}
