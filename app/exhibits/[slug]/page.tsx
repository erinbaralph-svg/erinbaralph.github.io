import { notFound } from "next/navigation";
import { exhibits } from "../exhibitsData";
import { ExhibitView } from "./ExhibitView";

export async function generateStaticParams() {
  return exhibits.map((e) => ({
    slug: e.id,
  }));
}

export default async function ExhibitViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleData = exhibits.filter((e) => e.id === slug)[0];

  if (!articleData) {
    notFound();
  }

  return <ExhibitView articleData={articleData} />;
}
