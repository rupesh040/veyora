import PageBanner from "@/src/components/PageBanner";
import ProcessSection from "@/src/components/ProcessSection";
import ProjectCTA from "@/src/components/ProjectCTA";
import ServicesOverview from "@/src/components/ServicesOverview";
import ServiceCards from "@/src/components/ServiceCards";

export default function Services() {
  return (
    <main className="flex flex-1 flex-col">
      <PageBanner/>
      <ServiceCards/>
      <ServicesOverview/>
      <ProjectCTA/>
      <ProcessSection/>
    </main>
  );
}
