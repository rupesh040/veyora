import PageBanner from "@/src/components/PageBanner";
import ContactSection from "@/src/components/ContactSection";
import LocationSection from "@/src/components/LocationSection";

export default function Contact() {
  return (
    <main className="flex flex-1 flex-col">
      <PageBanner/>
     <ContactSection/>
     <LocationSection/>
    </main>
  );
}
