import { ContentWithImage } from "~/components/ContentWithImage";
import {
  circularEconomy,
  circularEconomyProcess,
  circularEconomyService,
  circularEconomyServices,
  whyRecycle,
} from "../../../../constants";
import { ParallaxHero } from "~/components/ParallaxHero";
import { ServicesGrid } from "~/components/ServicesGrid";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { BenefitsStepper } from "~/components/BenefitsStepper";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const CircularEconomyPage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1509881511796-3a0c5a059ec1?w=1920&q=80"
        mediaType="image"
        title="Circular Economy Waste Manegement"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={circularEconomy}
        reverse={false}
        title="Circular Waste Management"
        src="https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?w=800&q=80"
        alt="Dollar Bill"
      />
      <ServicesGrid
        item={circularEconomyServices}
        src="/circular-economy.png"
        alt="Industrial Waste"
        title="Benefits of our Circular Waste Management Services"
        description="Is waste management a bottleneck of your business? Fret not; SV Green is a comprehensive industrial waste recycling company in Ahmedabad that will solve all your waste management hurdles so you can be relieved. Our Cicrular Economy waste management services include:"
      />
      <ExpertiseSection
        title="Why Choose SV Green For Circular Economy Waste Management?"
        item={circularEconomyService}
        src="/ce.jpg"
        alt="Circular Economy"
      />
      <BenefitsStepper
        title="Circular Economy Waste Management Principles"
        item={circularEconomyProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/circular-economy.png"
        alt="Circular Economy"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default CircularEconomyPage;
