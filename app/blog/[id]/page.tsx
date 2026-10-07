import PageBanner from "@/src/components/PageBanner";
import BlogDetailPage from "@/src/components/BlogDetailPage";

export default async function Blog({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const formatTitle = (str: string) => {
    if (!str) return "Blog Detail";
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const titleName = formatTitle(id);

  return (
    <main className="flex flex-1 flex-col">
      <PageBanner title={titleName} breadcrumb={titleName} />
      <BlogDetailPage/>
    </main>
  );
}
