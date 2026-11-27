import HeroWorkspace from "../components/hero/HeroWorkspace";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";
import LongFormSection from "../components/sections/LongFormSection";
import ServicesSection from "../components/sections/ServicesSection";
import ShortFormSection from "../components/sections/ShortFormSection";
import ThumbnailShowcase from "../components/sections/ThumbnailShowcase";
import WorkflowSection from "../components/sections/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroWorkspace />
      <LongFormSection />
      <ShortFormSection />
      <AboutSection />
      <ThumbnailShowcase />
      <WorkflowSection />
      <ServicesSection />
       {/* <ContactSection /> */}
       <FooterSection />
    </main>
  );
}
