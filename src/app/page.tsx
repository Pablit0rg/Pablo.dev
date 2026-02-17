import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Hero />
      <TechStack />
      {/* Próximo: Projects Section */}
    </main>
  );
}