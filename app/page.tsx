import AboutSection from "@/src/components/AboutSection";
import CoreFeatures from "@/src/components/CoreFeatures";
import Hero from "@/src/components/Hero";
import ProjectCTA from "@/src/components/ProjectCTA";
import Services from "@/src/components/Services";
import Stats from "@/src/components/Stats";
import Testimonials from "@/src/components/Testimonials";
import WhyVeyora from "@/src/components/WhyVeyora";
import Insights from "@/src/components/Insights";
import AboutHero from "@/src/components/AboutHero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <AboutSection />
      <Services/>
      <WhyVeyora/>
      <CoreFeatures/>
      <ProjectCTA/>
      <Testimonials/>
      <Stats/>
      <Insights/>
    </main>
  );
}
