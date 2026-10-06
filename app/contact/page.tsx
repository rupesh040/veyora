import AboutHero from "@/src/components/AboutHero";
import ContactSection from "@/src/components/ContactSection";
import Insights from "@/src/components/Insights";
import LocationSection from "@/src/components/LocationSection";

export default function Contact() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero/>
     <ContactSection/>
     <LocationSection/>
    </main>
  );
}
