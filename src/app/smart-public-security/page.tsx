import SolutionLayout from "../components/solutions/SolutionLayout";
import SolutionHero from "../components/solutions/SolutionHero";
import SolutionTextImage from "../components/solutions/SolutionTextImage";

export default function SmartPublicSecurityPage() {
    return (
        <SolutionLayout>
            <SolutionHero
                title="SMART SAFE CITY<br/>Powered by AI"
                image="/Solutions/SafeCity/Hero.jpg"
            />

            <SolutionTextImage
                title="Smart Public Safety Management Solution"
                paragraphs={[
                    "Rapid urbanization has posed new challenges to the urban model, people's livelihoods and public safety. Urban public safety management departments are in urgent need of reform. Urban monitoring, information analysis, and processing capabilities are required to break down information barriers, build a more secure public environment, and promote the deep integration of services and social security.",
                ]}
                image="/Solutions/SafeCity/Camera.jpg"
                imageAlt="Public Safety"
            />

            <SolutionTextImage
                title="Technology-led transformation of public safety management"
                paragraphs={[
                    "Powered by AI technology, SmartNeura's solution enables public security departments to incorporate their existing front-end detection capabilities — built on videos, audio and sensors — into daily operations and processes optimized to enhance public security.",
                ]}
                image="/Solutions/SafeCity/Control.jpg"
                imageAlt="Technology Safety"
                reverse
                dark
            />

            <SolutionTextImage
                title="Technology-led application development"
                paragraphs={[
                    "Public safety management is transitioning from automation to intelligentization. The emergence of innovative technologies makes it possible to tap into massive data, stimulating application demand. Technology is gradually becoming a catalyst for application development.",
                ]}
                image="/Solutions/SafeCity/Tech.jpg"
                imageAlt="Application Development"
                dark
            />

            <SolutionTextImage
                title="From post-incident efforts to pre-incident early warnings"
                paragraphs={[
                    "The intelligent application system for urban public safety is built around a prevention model that covers typical safety incidents in urban environments. Thanks to a wide range of means for monitoring and controlling key objects, it has proven its social security capabilities during critical periods and at major events, giving rise to a new pattern of public security management featuring early detection, intervention, prevention and management.",
                    "Powered by AI technology, SmartNeura's solution enables public security departments to incorporate their existing front-end detection capabilities — built on videos, audio and sensors — into daily operations and processes optimized to enhance public security.",
                ]}
                image="/Solutions/SafeCity/EarlyWarning.jpg"
                imageAlt="Early Warning"
                reverse
                dark
            />

            <SolutionTextImage
                title="From big data to small data"
                paragraphs={[
                    "Urban managers can leverage AI to process unstructured data, such as huge amounts of audio and video footage and sensor data, in the same way they process structured data. They can zoom in on the small data profile of a single entity in a city-level macro operation context to deliver personalized services and the precise management of every active entity in an entire city.",
                ]}
                image="/Solutions/SafeCity/BigData.jpg"
                imageAlt="Big Data"
                dark
            />
        </SolutionLayout>
    );
}