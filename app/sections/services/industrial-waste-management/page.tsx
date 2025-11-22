import { BenefitsStepper } from "~/components/BenefitsStepper";
import {
  industrialServices,
  industrialWasteContent,
  IndustrialWasteProcess,
  IndustrialWasteServices,
  whyRecycle,
} from "../../../../constants";
import { ContentWithImage } from "~/components/ContentWithImage";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { ParallaxHero } from "~/components/ParallaxHero";
import { ServicesGrid } from "~/components/ServicesGrid";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const IndustrialWasteManagementPage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1679998873820-fb46bb66dfe2?w=1920&q=80"
        mediaType="image"
        title="Industrial Waste Manegement"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={industrialWasteContent}
        reverse={false}
        title="GPCB Authorized Industrial Waste Recycler in Ahmedabad"
        src="https://images.unsplash.com/vector-1760508417243-4dddff577787?w=800&q=80"
        alt="Industrial waste barrels and hazardous materials"
      />
      <ServicesGrid
        item={industrialServices}
        src="/industrial-waste.png"
        alt="Industrial Waste"
        title="Industrial Waste Management Services"
        description="Is waste management a bottleneck of your business? Fret not; SV Green is a comprehensive industrial waste recycling company in Ahmedabad that will solve all your waste management hurdles so you can be relieved. Our industrial waste management services include:"
      />
      <ExpertiseSection
        title="Benefits Of Our Industrial Waste Management Services"
        item={IndustrialWasteServices}
        src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&q=80"
        alt="Waste recycling facility operations"
      />
      <BenefitsStepper
        title="Value added services at SV Green"
        item={IndustrialWasteProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/industrial-waste.png"
        alt="Industrial Waste"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default IndustrialWasteManagementPage;
