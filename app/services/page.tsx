import PageBanner from "@/src/components/PageBanner";
import ProcessSection from "@/src/components/ProcessSection";
import ProjectCTA from "@/src/components/ProjectCTA";
import ServicesOverview from "@/src/components/ServicesOverview";

export default function Services() {
  return (
    <main className="flex flex-1 flex-col">
      <PageBanner/>
      <ServicesOverview/>
      <ProjectCTA/>
      <ProcessSection/>
    </main>
  );
}
