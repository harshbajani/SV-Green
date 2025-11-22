import {
  plasticServices,
  plasticWasteContent,
  PlasticWasteProcess,
  PlasticWasteServices,
  whyRecycle,
} from "../../../../constants";
import { ParallaxHero } from "~/components/ParallaxHero";
import { RecycleHub } from "~/components/RecycleHub";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { BenefitsStepper } from "~/components/BenefitsStepper";
import { ServicesGrid } from "~/components/ServicesGrid";
import { ContentWithImage } from "~/components/ContentWithImage";
import IndustriesServed from "~/components/IndustryServed";

const PlasticWasteManagementPage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1664783366257-ed2a579eea86?w=1920&q=80"
        mediaType="image"
        title="Plastic Waste Management"
        subtitle="Building a Plastic Free Future"
      />
      <ContentWithImage
        item={plasticWasteContent}
        reverse={false}
        title="Cautious And Reliable Hazardous waste management company in Ahmedabad"
        src="https://images.unsplash.com/vector-1738825029134-2b4ea561c794?w=800&q=80"
        alt="Industrial waste barrels and hazardous materials"
      />
      <ServicesGrid
        item={plasticServices}
        title="Plastic Waste Management Services"
        description="SV Green embraces technology to provide digital reports and certifications that instil transparency. Lastly, as a modern plastic waste recycler in Ahmedabad , we extend end-to-end solutions to overcoming the challenges experienced with conventional waste collection and recycling."
        src="/plastic-waste.png"
        alt="Plastic Waste Management"
      />
      <ExpertiseSection
        title="Benefits Of Our Plastic Waste Management Services"
        src="https://images.unsplash.com/photo-1631370193453-166a743561f1?w=800&q=80"
        alt=""
        item={PlasticWasteServices}
      />
      <BenefitsStepper
        title="Benefits of our Hazardous Scrap Management"
        item={PlasticWasteProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/plastic-waste.png"
        alt="Plastic Waste Management"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default PlasticWasteManagementPage;
