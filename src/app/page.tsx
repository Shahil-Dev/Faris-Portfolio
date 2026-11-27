import HeroWorkspace from "../components/hero/HeroWorkspace";
import LongFormSection from "../components/sections/LongFormSection";
import ShortFormSection from "../components/sections/ShortFormSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroWorkspace />
      <LongFormSection />
      <ShortFormSection />
    </main>
  );
}
