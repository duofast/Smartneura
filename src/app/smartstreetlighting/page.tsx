import SolutionLayout from "../components/solutions/SolutionLayout";
import SolutionHero from "../components/solutions/SolutionHero";
import SolutionBenefits from "../components/solutions/SolutionBenefits";
import SolutionTextImage from "../components/solutions/SolutionTextImage";

export default function SmartStreetLightingPage() {
    return (
        <SolutionLayout>
            <SolutionHero
                title="Smart Street Lighting"
                image="/Solutions/StreetLighting/Hero.jpg"
                dark={false}
            />

            <SolutionBenefits
                title="Smart Street Lighting Benefits"
                benefits={[
                    { icon: "lightbulb", title: "Lighting on Demand", desc: "Each road is dimmed according to the traffic volume, and its turned on and off according to the time of Night/Day." },
                    { icon: "leaf", title: "Energy Conservation", desc: "On-demand lighting reduces energy waste, improves economic and social benefits, collects on-site environment in real time to meet citizen's demand for healthy lighting." },
                    { icon: "bar-chart", title: "Management Efficiency", desc: "Energy statistics, energy consumption comparison, fault statistics support report export, online graphical interface generation, internet + lighting, realize intelligent control, intelligent lighting." },
                    { icon: "wrench", title: "Easy to Maintain", desc: "The system will automatically notify when a fault occurs, saving labour cost." },
                ]}
            />

            <SolutionTextImage
                title="SMART PLATFORM FOR LIGHTING"
                paragraphs={[
                    "A comprehensive smart lighting platform providing equipment GIS map distribution, additional attributes, scene templates, virtual reality integration, physical model, data model, communication model, meta template, rule template, rule action, and rule instance management.",
                ]}
                image="/Solutions/StreetLighting/Platform.jpg"
                imageAlt="Smart Lighting Platform"
                reverse
            />
        </SolutionLayout>
    );
}