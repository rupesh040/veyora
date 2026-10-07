import PageBanner from "@/src/components/PageBanner";
import Insights from "@/src/components/Insights";

export default function Blog() {
  return (
    <main className="flex flex-1 flex-col">
      <PageBanner/>
      <Insights/>
    </main>
  );
}
