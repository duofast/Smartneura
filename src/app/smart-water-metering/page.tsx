import SolutionLayout from "../components/solutions/SolutionLayout";
import SolutionHero from "../components/solutions/SolutionHero";
import SolutionTextImage from "../components/solutions/SolutionTextImage";
import SolutionBenefits from "../components/solutions/SolutionBenefits";

export default function SmartWaterMeteringPage() {
    return (
        <SolutionLayout>
            <SolutionHero
                title="Smart Water<br/>Metering Solution"
                image="/Solutions/WaterMetering/Hero.jpg"
            />

            <section className="bg-sky-600 py-16">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-12 tracking-widest uppercase">
                        Smart Neura Technology
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "🧠", title: "Intelligence" },
                            { icon: "🎯", title: "Precision" },
                            { icon: "🔐", title: "Security" },
                            { icon: "🤝", title: "Reliability" },
                        ].map((item, i) => (
                            <div key={item.title} className="flex flex-col items-center gap-3">
                                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl">
                                    {item.icon}
                                </div>
                                <p className="text-white font-semibold">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SolutionTextImage
                title="Smart Water Metering System"
                paragraphs={[
                    "SmartNeura provides comprehensive Smart Metering Solutions with latest communication technology, IoT terminals, and cloud-based softwares to our clients across over 45 countries. Since 2009 our principle has established a complete, multi-level R&D system that includes every operation from research to design, development, testing, technical support, and service.",
                    "With years' dedication in marketing and local-oriented service, Our principle brand gets highly reputed across our partners and clients. Thanks to annual investment of over 10% of revenue, Our principle are always moving on the edge of technology to deliver state of the art metering products to clients all around 5 continents.",
                    "Our principle is the first Chinese metering manufacturer who released 3 main IoT metering network solutions: NB-IoT, LoRa, and SigFox. This is resulted from years' experience in communication and mobile industry.",
                ]}
                image="/Solutions/WaterMetering/System.jpg"
                imageAlt="Water Metering"
                dark
            />

            <SolutionBenefits
                title="System Components"
                benefits={[
                    { icon: "💧", title: "Meters", desc: "Ultra-sonic smart water meters with precise measurement and IoT connectivity." },
                    { icon: "📡", title: "Reading Gateway", desc: "NB-IoT, LoRa and SigFox enabled gateways for wide area coverage." },
                    { icon: "🏛️", title: "City / Municipal Authority", desc: "Unified management platform for water utility operations." },
                    { icon: "📊", title: "Meter Data Management", desc: "Cloud-based data collection and analytics for water consumption insights." },
                    { icon: "🔍", title: "Analytics", desc: "Real-time leak detection and consumption pattern analysis." },
                    { icon: "📋", title: "Project Management", desc: "Complete project lifecycle management from planning to deployment." },
                ]}
            />

            <SolutionTextImage
                title="Wireless Remote Reading Solution"
                paragraphs={[
                    "Wireless Remote Reading Solution offers our customer reliable remote meter reading solutions with accurate measuring. Utility no longer need to send engineers on site to read the meter manually. With wireless technology, meter data is upstream to server automatically on each billing date.",
                    "On this solution, utility save significant expenditure on installation cost, meter reading labor cost, and avoiding the mistake meter reading. This solution is widely used in worldwide on various types of meters.",
                    "<strong>Solution Scenario:</strong> Decentralized houses, apartment buildings, schools.",
                ]}
                image="/Solutions/WaterMetering/Wireless.jpg"
                imageAlt="Wireless Solution"
                reverse
            />
        </SolutionLayout>
    );
}