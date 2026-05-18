import SolutionLayout from "../components/solutions/SolutionLayout";
import SolutionHero from "../components/solutions/SolutionHero";
import SolutionTextImage from "../components/solutions/SolutionTextImage";
import SolutionBenefits from "../components/solutions/SolutionBenefits";

export default function SmartElectricMeteringPage() {
    return (
        <SolutionLayout>
            <SolutionHero
                title="Smart Electric<br/>Metering Solution"
                image="/Solutions/ElectricMetering/Hero.jpg"
            />

            <SolutionTextImage
                title="Smart Electric Metering System"
                paragraphs={[
                    "Smart Energy solution is the fundamental component for smart city infrastructure. Lowan Smart Grid solution is designed for massive smart energy upgrade project in urban area. Combine energy industry knowledge with leading LPWA IoT network platform, Lowan makes Smart Grid of a city easier to build and much more reliable.",
                ]}
                image="/Solutions/ElectricMetering/System.jpg"
                imageAlt="Electric Metering"
                dark
                bullets={[
                    "LPWA network deep coverage over urban area.",
                    "Carrier grade gateway for wide coverage, indoor gateway for blind spot coverage.",
                    "Remotely connected smart meter with relay function to monitor and control user power usage.",
                    "Digitalize daily city power management, no human errors.",
                    "Real-time data collection for demand response energy price policy analysis.",
                    "Data concentrator as a software interface for system integration.",
                ]}
            />

            <SolutionBenefits
                title="System Components"
                benefits={[
                    { icon: "📡", title: "Meters", desc: "Advanced smart meters with IoT connectivity for real-time data collection." },
                    { icon: "🗼", title: "Reading Gateway", desc: "High-coverage gateways ensuring reliable data transmission across urban areas." },
                    { icon: "🏙️", title: "City / Municipal Authority", desc: "Centralized management for city-wide metering operations and oversight." },
                    { icon: "📈", title: "Meter Data Management", desc: "Sophisticated data analytics platform for consumption insights and reporting." },
                    { icon: "🔬", title: "Analytics", desc: "AI-powered analytics for demand forecasting and energy optimization." },
                    { icon: "🛠️", title: "Project Management", desc: "End-to-end project deployment and ongoing system management support." },
                ]}
            />
        </SolutionLayout>
    );
}