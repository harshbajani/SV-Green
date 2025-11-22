import { BenefitsStepper } from "~/components/BenefitsStepper";
import {
  whyRecycle,
  woodenPalletsScrapBuyer,
  woodenPalletsScrapBuyerService,
  woodenPalletsScrapBuyerServices,
  woodenScrapBuyerProcess,
} from "../../../../constants";
import { ContentWithImage } from "~/components/ContentWithImage";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { ParallaxHero } from "~/components/ParallaxHero";
import { ServicesGrid } from "~/components/ServicesGrid";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const WoodenPalletsScrapBuyerPage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1682643143637-e583c5fc20a9?w=1920&q=80"
        mediaType="image"
        title="Wooden Pallets Scrap Buyer"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={woodenPalletsScrapBuyer}
        reverse={false}
        title="Wooden Pallets Scrap Buyer"
        src="https://images.unsplash.com/vector-1750124156515-e2ff0742fcc2?w=800&q=80"
        alt="Wooden Pallets Scrap Buyer"
      />
      <ServicesGrid
        item={woodenPalletsScrapBuyerServices}
        src="/wood-scrap.png"
        alt="Wooden Pallets Scrap Buyer"
        title="Wooden Pallets Scrap Buyer"
        description="We are the best wooden pallets scrap buyer in Gujarat."
      />
      <ExpertiseSection
        title="Benefits of our Wooden Pallets Scrap Services"
        item={woodenPalletsScrapBuyerService}
        src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80"
        alt="Wooden Pallets Scrap Buyer"
      />
      <BenefitsStepper
        title="Why Wooden Pallets Scrap Management?"
        item={woodenScrapBuyerProcess}
      />
      <RecycleHub
        title="Why Choose SV Green For Wooden Pallets Scrap Management?"
        description="SV Green is a leading wooden pallets scrap buyer in Ahmedabad, Gujarat. We are committed to providing the best services to our clients. We are the best wooden pallets scrap buyer in Gujarat."
        item={whyRecycle}
        src="/wood-scrap.png"
        alt="Wooden Pallets Scrap Buyer"
      />
      <IndustriesServed />
    </div>
  );
};

export default WoodenPalletsScrapBuyerPage;
