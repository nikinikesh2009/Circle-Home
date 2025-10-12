import WhyCircleHero from "@/components/WhyCircleHero";
import TheProblem from "@/components/TheProblem";
import TheMission from "@/components/TheMission";
import WhatMakesCircleDifferent from "@/components/WhatMakesCircleDifferent";
import RealScenarios from "@/components/RealScenarios";
import WhyCircleVision from "@/components/WhyCircleVision";
import WhyCircleCTA from "@/components/WhyCircleCTA";
import { Separator } from "@/components/ui/separator";

export default function WhyCirclePage() {
  return (
    <div className="space-y-24">
      <WhyCircleHero />
      <Separator />
      <TheProblem />
      <Separator />
      <TheMission />
      <Separator />
      <WhatMakesCircleDifferent />
      <Separator />
      <RealScenarios />
      <Separator />
      <WhyCircleVision />
      <Separator />
      <WhyCircleCTA />
    </div>
  );
}
