import FounderStory from "@/components/FounderStory";
import WhatIsCircle from "@/components/WhatIsCircle";
import HowCirclesWork from "@/components/HowCirclesWork";
import WhyCircleIsDifferent from "@/components/WhyCircleIsDifferent";
import VisionSection from "@/components/VisionSection";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <FounderStory />
      <Separator />
      <WhatIsCircle />
      <Separator />
      <HowCirclesWork />
      <Separator />
      <WhyCircleIsDifferent />
      <Separator />
      <VisionSection />
    </div>
  );
}
