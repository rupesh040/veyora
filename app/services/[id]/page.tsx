import PageBanner from "@/src/components/PageBanner";
import ServiceDetail from "@/src/components/ServiceDetail";
import content from "@/src/data";

export default async function services({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const allServices: any[] = [...(content.services.services || []), ...(content.serviceDetail.services || [])];
  const matched = allServices.find((s: any) => s.link && s.link.endsWith(`/${id}`));

  const formatTitle = (str: string) => {
    if (!str) return "Service Detail";
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const titleName = matched?.title || formatTitle(id);

  return (
    <main className="flex flex-1 flex-col">
      <PageBanner title={titleName} breadcrumb={titleName} />
      <ServiceDetail id={id} />
    </main>
  );
}
