import { BenefitsStepper } from "~/components/BenefitsStepper";
import {
  rubberWaste,
  rubberWasteProcess,
  rubberWasteService,
  rubberWasteServices,
  whyRecycle,
} from "../../../../constants";
import { ContentWithImage } from "~/components/ContentWithImage";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { ParallaxHero } from "~/components/ParallaxHero";
import { ServicesGrid } from "~/components/ServicesGrid";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const RubberScrapWasteManagementPage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1591684391843-a16d792a9720?w=1920&q=80"
        mediaType="image"
        title="Rubber Scrap Waste Manegement"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={rubberWaste}
        reverse={false}
        title="Uncompromised Rubber Waste Management"
        src="https://images.unsplash.com/photo-1571335746824-742511d49bce?w=800&q=80"
        alt="Rubber Tires"
      />
      <ServicesGrid
        item={rubberWasteServices}
        src="/rubber-waste.png"
        alt="Rubber Waste"
        title="Why recycle rubber waste?"
        description="The problem of managing rubber waste is becoming essential in today’s time. SV Green is India’s best waste management company that focuses on sustainable practices for every type of industrial waste."
      />
      <ExpertiseSection
        title="Benefits Of Our Rubber Waste Management Services"
        item={rubberWasteService}
        src="https://images.unsplash.com/photo-1758979568039-7a18a3e33de1?w=800&q=80"
        alt="Rubber Waste recycling facility operations"
      />
      <BenefitsStepper
        title="Rubber Waste Management Process"
        item={rubberWasteProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/rubber-waste.png"
        alt="Rubber Waste"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default RubberScrapWasteManagementPage;
