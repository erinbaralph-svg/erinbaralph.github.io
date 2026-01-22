import { notFound } from "next/navigation";
import { projects } from "../projectsData";
import { ArticleView } from "@/components/ArticleView";

export async function generateStaticParams() {
  return projects.map((e) => ({
    slug: e.id,
  }));
}

export default async function ProjectViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleData = projects.filter((e) => e.id === slug)[0];

  if (!articleData) {
    notFound();
  }

  return <ArticleView articleData={articleData} urlPrefix={"projects"} />;
}
