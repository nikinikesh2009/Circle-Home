import FounderStory from "@/components/FounderStory";
import WhatIsCircle from "@/components/WhatIsCircle";
import HowCirclesWork from "@/components/HowCirclesWork";
import WhyCircleIsDifferent from "@/components/WhyCircleIsDifferent";
import VisionSection from "@/components/VisionSection";

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <FounderStory />
      <WhatIsCircle />
      <HowCirclesWork />
      <WhyCircleIsDifferent />
      <VisionSection />
    </div>
  );
}
