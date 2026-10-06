import AboutHero from "@/src/components/AboutHero";
import BlogDetailPage from "@/src/components/BlogDetailPage";

export default function Blog() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero/>
      <BlogDetailPage/>
    </main>
  );
}
