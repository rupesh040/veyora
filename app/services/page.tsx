import AboutHero from "@/src/components/AboutHero";
import ProcessSection from "@/src/components/ProcessSection";
import ProjectCTA from "@/src/components/ProjectCTA";
import ServicesOverview from "@/src/components/ServicesOverview";

export default function Services() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero/>
      <ServicesOverview/>
      <ProjectCTA/>
      <ProcessSection/>
    </main>
  );
}
