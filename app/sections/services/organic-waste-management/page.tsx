import { BenefitsStepper } from "~/components/BenefitsStepper";
import {
  organicWaste,
  organicWasteProcess,
  organicWasteServices,
  whyRecycle,
} from "../../../../constants";
import { ContentWithImage } from "~/components/ContentWithImage";
import { ParallaxHero } from "~/components/ParallaxHero";
import { ServicesGrid } from "~/components/ServicesGrid";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const OrganicWasteManagementPage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1545333212-ffebc7933c12?w=1920&q=80"
        mediaType="image"
        title="Organic Waste Manegement"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={organicWaste}
        reverse={false}
        title="Organic Waste Recycler In Ahmedabad"
        src="https://images.unsplash.com/vector-1738396054590-1cce0036f690?w=800&q=80"
        alt="Industrial waste barrels and hazardous materials"
      />
      <ServicesGrid
        item={organicWasteServices}
        src="/organic-waste.png"
        alt="organic Waste"
        title="Benefits of our Organic Waste Management Services"
        description="Is waste management a bottleneck of your business? Fret not; SV Green is a comprehensive industrial waste recycling company in Ahmedabad that will solve all your waste management hurdles so you can be relieved. Our organic waste management services include:"
      />
      <BenefitsStepper
        title="Organic Waste Management Process"
        item={organicWasteProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/organic-waste.png"
        alt="Organic Waste"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default OrganicWasteManagementPage;
