import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Hero />
      {/* Aqui virão as próximas seções: TechStack, Projects, etc. */}
    </main>
  );
}