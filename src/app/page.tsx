import { Metadata } from "next";
import Banner from "./components/home/hero";
import Companies from "./components/home/companies";
import Work from "./components/home/work";
import Table from "./components/home/table";
import Features from "./components/home/features";
import Simple from "./components/home/simple";
import Trade from "./components/home/trade";
import Faq from "./components/home/faq";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Crypto",
};

export default function Home() {
  return (
    <main>
      <Banner/>
      <Companies />
      <Work />
      <Table />
      <Features />
      <Simple />
      <Trade />
      <Faq />
      <ContactForm />
    </main>
  );
}
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
