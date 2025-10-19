import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import WhatIsCircle from "@/components/WhatIsCircle";
import HowCirclesWork from "@/components/HowCirclesWork";
import WhatMakesCircleDifferent from "@/components/WhatMakesCircleDifferent";
import TheProblem from "@/components/TheProblem";
import TheMission from "@/components/TheMission";
import RealScenarios from "@/components/RealScenarios";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsCircle />
      <FeatureSection />
      <HowCirclesWork />
      <WhatMakesCircleDifferent />
      <TheProblem />
      <TheMission />
      <RealScenarios />
      <FAQSection />
    </>
  );
}
