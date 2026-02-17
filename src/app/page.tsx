import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}