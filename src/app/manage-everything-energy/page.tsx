import SolutionLayout from "../components/solutions/SolutionLayout";
import SolutionHero from "../components/solutions/SolutionHero";
import SolutionTextImage from "../components/solutions/SolutionTextImage";

export default function SmartElectricityPage() {
    return (
        <SolutionLayout>
            <SolutionHero
                title="We Make Electricity<br/>Safe and Smarter."
                subtitle="Focus on Smart Electricity"
                image="/Solutions/Electricity/Hero.jpg"
            />

            <SolutionTextImage
                title="Energy Efficiency Management"
                paragraphs={[
                    "Cost analysis to optimize energy use and reduce energy costs.",
                    "Smart solution make cost analysis to reduce and assign energy costs. The cost of energy will rise continuously. In order to cut costs, we first have to know where they arise. SNI/GP, SN13 and SNM3 helps illustrate and analyze the instantaneous energy consumption levels. Then the calculated active energy can be used to roughly allocate the costs at the output level.",
                    "The smart solution adds values to facilities, meeting customers demand and enabling them to comply with higher energy efficiency standards.",
                    "Real time analysis of valuable data from field devices enables customers to closely monitor the performance of multiple installations with a single supervision system.",
                    "Clear information about consumption and improvement opportunities make cutting waste and improving energy efficiency simple. Customers also benefit from lower energy bills and reductions in unplanned downtime.",
                    "Energy Efficiency can be a strong factor of <strong>competitiveness on the global market.</strong>",
                ]}
                image="/Solutions/Electricity/EnergyMgmt.jpg"
                imageAlt="Energy Efficiency"
                dark
                bullets={[
                    "Better management of energy cost center.",
                    "Save up to 20-60% on maintenance costs.",
                    "Save up to 20-50% on energy bill.",
                    "Replacement of old technology with updated efficient solutions.",
                    "Employees' awareness of a responsible use of energy.",
                    "One monitoring system for all subsidiaries.",
                ]}
            />

            <SolutionTextImage
                title="Smart Energy Dashboard"
                paragraphs={[
                    "Smart Energy solution is the fundamental component for smart city infrastructure. Lowan Smart Grid solution is designed for massive smart energy upgrade project in urban area. Combine energy industry knowledge with leading LPWA IoT network platform.",
                ]}
                image="/Solutions/Electricity/Dashboard.jpg"
                imageAlt="Energy Dashboard"
                reverse
            />
        </SolutionLayout>
    );
}