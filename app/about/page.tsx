import AboutHero from "@/src/components/AboutHero";
import AboutVeyora from "@/src/components/AboutVeyora";
import OurApproach from "@/src/components/OurApproach";
import OurTeam from "@/src/components/OurTeam";
import ProjectCTA from "@/src/components/ProjectCTA";

export default function About() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero/>
      <AboutVeyora/>
      <ProjectCTA/>
      <OurApproach/>
      <OurTeam/>
    </main>
  );
}
