import WhyCircleHero from "@/components/WhyCircleHero";
import TheProblem from "@/components/TheProblem";
import TheMission from "@/components/TheMission";
import WhatMakesCircleDifferent from "@/components/WhatMakesCircleDifferent";
import RealScenarios from "@/components/RealScenarios";
import WhyCircleVision from "@/components/WhyCircleVision";
import WhyCircleCTA from "@/components/WhyCircleCTA";

export default function WhyCirclePage() {
  return (
    <div className="space-y-20">
      <WhyCircleHero />
      <TheProblem />
      <TheMission />
      <WhatMakesCircleDifferent />
      <RealScenarios />
      <WhyCircleVision />
      <WhyCircleCTA />
    </div>
  );
}
