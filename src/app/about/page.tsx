import AboutIntro from "@/components/AboutIntro";
import MissionSection from "@/components/MissionSection";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <AboutIntro />
      <MissionSection />
      <Timeline />
    </div>
  );
}
