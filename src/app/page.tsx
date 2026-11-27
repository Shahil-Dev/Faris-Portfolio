import HeroWorkspace from "../components/hero/HeroWorkspace";
import AboutSection from "../components/sections/AboutSection";
import LongFormSection from "../components/sections/LongFormSection";
import ShortFormSection from "../components/sections/ShortFormSection";
import ThumbnailShowcase from "../components/sections/ThumbnailShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroWorkspace />
      <LongFormSection />
      <ShortFormSection />
      <AboutSection />
      <ThumbnailShowcase />
    </main>
  );
}
