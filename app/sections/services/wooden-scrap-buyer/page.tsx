import { BenefitsStepper } from "~/components/BenefitsStepper";
import {
  whyRecycle,
  woodenScrapBuyer,
  woodenScrapBuyerProcess,
  woodenScrapBuyerService,
  woodenScrapBuyerServices,
} from "../../../../constants";
import { ContentWithImage } from "~/components/ContentWithImage";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { ParallaxHero } from "~/components/ParallaxHero";
import { ServicesGrid } from "~/components/ServicesGrid";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const WoodenScrapBuyerPage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1608702529091-f3b4fab4b97e?w=1920&q=80"
        mediaType="image"
        title="Wooden Scrap Buyer"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={woodenScrapBuyer}
        reverse={false}
        title="Wooden Scrap Buyer in Ahmedabad, Gujarat"
        src="https://images.unsplash.com/vector-1750124156515-e2ff0742fcc2?w=800&q=80"
        alt="Industrial waste barrels and hazardous materials"
      />
      <ServicesGrid
        item={woodenScrapBuyerServices}
        src="/wood-scrap.png"
        alt="Wooden Scrap Buyer"
        title="Wooden Scrap Management Services"
        description="We deploy different methods for processing wood scrap, such as:"
      />
      <ExpertiseSection
        title="Benefits of our Wooden Scrap Management Services"
        item={woodenScrapBuyerService}
        src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80"
        alt="Wooden Scrap Management"
      />
      <BenefitsStepper
        title="Why Wooden Scrap Management?"
        item={woodenScrapBuyerProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/wood-scrap.png"
        alt="Wooden Scrap Buyer"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default WoodenScrapBuyerPage;
