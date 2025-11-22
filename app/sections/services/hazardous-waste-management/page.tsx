import { ParallaxHero } from "~/components/ParallaxHero";
import {
  benefits,
  expertise,
  hazardContent,
  services,
  whyRecycle,
} from "../../../../constants";
import { RecycleHub } from "~/components/RecycleHub";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { BenefitsStepper } from "~/components/BenefitsStepper";
import { ServicesGrid } from "~/components/ServicesGrid";
import { ContentWithImage } from "~/components/ContentWithImage";
import IndustriesServed from "~/components/IndustryServed";

const HazardousWastePage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1751453875319-660527493daa?w=1920&q=80"
        mediaType="image"
        title="Hazardous Waste Management"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={hazardContent}
        reverse={false}
        title="Cautious And Reliable Hazardous waste management company in Ahmedabad"
        src="https://images.unsplash.com/vector-1756301725624-51f2d520387f?w=800&q=80"
        alt="Industrial waste barrels and hazardous materials"
      />
      <ServicesGrid
        item={services}
        src="/waste.png"
        alt="Hazardous Waste"
        title="Hazardous Waste Management Services"
        description="As a GPCB approved hazardous waste recycler, our recycling and disposal service spectrum encompasses industrial, commercial, and other hazardous waste like used batteries, electronics, and cleaning products."
      />
      <ExpertiseSection
        title="Our Expertise"
        item={expertise}
        src="https://images.unsplash.com/photo-1697698449698-2f2696edcd4e?w=800&q=80"
        alt="Waste recycling facility operations"
      />
      <BenefitsStepper
        title="Benefits of our Hazardous Scrap Management"
        item={benefits}
      />
      <RecycleHub
        title="Why SV Green for Hazardous Waste Disposal?"
        description=" SV Green is a trustworthy, hazardous waste management company
            that takes care of your hazardous scrap compliance-related needs so
            that you can focus on your essential business operations. We believe
            in offering the best customer satisfaction. Therefore, our expert
            staff promptly answers your queries to work with you on your waste
            disposal and recycling requirements."
        src="/waste.png"
        alt="Hazardous Waste"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default HazardousWastePage;
