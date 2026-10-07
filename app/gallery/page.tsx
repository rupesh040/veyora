import PageBanner from "@/src/components/PageBanner";
import Gallery from "@/src/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageBanner/>
      <Gallery/>
    </main>
  );
}
