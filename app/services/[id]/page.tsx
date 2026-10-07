import PageBanner from "@/src/components/PageBanner";
import ServiceDetail from "@/src/components/ServiceDetail";

export default async function services({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const formatTitle = (str: string) => {
    if (!str) return "Service Detail";
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const titleName = formatTitle(id);

  return (
    <main className="flex flex-1 flex-col">
      <PageBanner title={titleName} breadcrumb={titleName} />
      <ServiceDetail/>
    </main>
  );
}
