import { Feature73 } from "@/components/ui/feature-73";

const dtFeatures = [
    {
        id: "business-transformation",
        title: "Business Transformation",
        description:
            "SmartNeura partners with enterprises navigating rapid market change. We help you rethink operations, unlock organizational potential, and move from legacy constraints to agile, future-ready business models—with minimal disruption and measurable outcomes.",
        image: "/DigitalTransformation/BTransformation.jpg",
    },
    {
        id: "digital-transformation",
        title: "Digital Transformation",
        description:
            "We integrate digital solutions across processes, products, and infrastructure—evaluating workflows and market needs to deliver tailored strategies, cutting-edge technology, and results that optimize operations and elevate customer experiences.",
        image: "/DigitalTransformation/DT.jpg",
    },
    {
        id: "network-transformation",
        title: "Network Transformation",
        description:
            "Replace costly hardware with virtualized, high-performance software routers for CSPs, MNOs, and enterprises. Flexible deployment, end-to-end security, cost-effective scalability, and readiness for 5G, IoT, SD-WAN, and cloud-native workloads.",
        image: "/DigitalTransformation/NT.jpg",
    },
];

export default function DTFeatures() {
    return (
        <Feature73
            eyebrow="What We Deliver"
            heading="Three Pillars of Transformation"
            description="From business strategy to digital integration and network modernization—SmartNeura guides enterprises through every layer of transformation with precision, security, and scale."
            linkUrl="/contacts"
            linkText="Partner with SmartNeura"
            features={dtFeatures}
        />
    );
}
