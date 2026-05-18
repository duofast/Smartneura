import SolutionLayout from "../components/solutions/SolutionLayout";
import SolutionHero from "../components/solutions/SolutionHero";
import SolutionTextImage from "../components/solutions/SolutionTextImage";
import SolutionBenefits from "../components/solutions/SolutionBenefits";

export default function SmartCityPage() {
    return (
        <SolutionLayout>
            <SolutionHero
                title="SMART CITIES"
                image="/Solutions/SmartCity/Hero.jpg"
            />

            <SolutionTextImage
                title="SMART CITY — For efficient city management."
                paragraphs={[
                    "Today 55% of the world's population lives in urban areas, a proportion that is expected to increase to 68% by 2050, with most of the growth coming from Asia and Africa. Countries like America, China and Europe are already leading the development of cities with more than 70% of their residents living in cities.",
                    "For these cities to handle population increases and improve the quality of life for their residents, they must adopt new smart city models. What is a smart city? ITU defines a smart city as 'a municipality that uses information and communication technologies to increase operational efficiency, share information with the public and improve both the quality of government services and citizen welfare.'",
                    "Integrating various technologies into a cohesive system for efficient operation and enhanced quality of life for its residents.",
                ]}
                image="/Solutions/SmartCity/CityView.jpg"
                imageAlt="Smart City"
            />

            <SolutionBenefits
                title="Benefits"
                benefits={[
                    { icon: "🔒", title: "Safety", desc: "Smart City enhances the security of your city by linking and automating smart technology." },
                    { icon: "💎", title: "Saving", desc: "Proper regulation and interconnection of individual technologies can achieve significant savings." },
                    { icon: "🌱", title: "Environment", desc: "Reducing traffic congestion, efficient operation of public transport, monitoring utilities and accident prevention." },
                    { icon: "🌟", title: "A more enjoyable life", desc: "A smart city brings many personal benefits to its residents. From security to convenient transportation to even the Wi-Fi signal coverage." },
                    { icon: "🏆", title: "A city of prestige", desc: "A clever and technologically advanced city with a satisfied population also attracts tourists." },
                    { icon: "⚙️", title: "Automation", desc: "Based on time, light intensity, the movement of vehicles and other information, control lighting, transport or summon emergency services can be done automatically." },
                ]}
            />

            <SolutionTextImage
                title="Smart City Solutions"
                paragraphs={[
                    "The smart city management system launched by SmartNeura Intelligence provides a unified platform management for urban public lighting, smart security, smart meter reading, smart alarms, smart environment, smart travel, and green charging equipment. All equipment in the city is managed through one platform. Network monitoring, data sharing, energy consumption monitoring and management.",
                ]}
                image="/Solutions/SmartCity/Solutions.jpg"
                imageAlt="Smart City Solutions"
                dark
            />

            <SolutionTextImage
                title="Intelligent security"
                paragraphs={[
                    "The intelligent security system can be simply understood as: A technical system for accurate and selective operation of image transmission and storage, data storage and processing.",
                ]}
                image="/Solutions/SmartCity/Security.jpg"
                imageAlt="Intelligent Security"
                reverse
                dark
            />

            <SolutionTextImage
                title="Intelligent meter reading:"
                paragraphs={[
                    "The remote meter reading system mainly completes the three tasks of electricity metering or information collection, remote information transmission, background software processing and analysis.",
                ]}
                image="/Solutions/SmartCity/Metering.jpg"
                imageAlt="Meter Reading"
                dark
            />

            <SolutionTextImage
                title="Intelligent Travel"
                paragraphs={[
                    "Improve urban transportation efficiency and service quality, monitor traffic facilities and perform data analysis through video and remote detection technology, and manage traffic people and logistics in real time and handle emergencies.",
                ]}
                image="/Solutions/SmartCity/Travel.jpg"
                imageAlt="Intelligent Travel"
                reverse
                dark
            />

            <SolutionTextImage
                title="Smart Environment"
                paragraphs={[
                    "Implement green city planning, use network and remote monitoring technology to fully grasp and analyze the distribution of public spaces, grasslands and green belts to promote greening and improve environmental sustainability.",
                ]}
                image="/Solutions/SmartCity/Environment.jpg"
                imageAlt="Smart Environment"
                dark
            />
        </SolutionLayout>
    );
}