import { notFound } from "next/navigation";
import { programming } from "../programmingData";
import { ArticleView } from "@/components/ArticleView";

export async function generateStaticParams() {
  return programming.map((e) => ({
    slug: e.id,
  }));
}

export default async function ProgrammingViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleData = programming.filter((e) => e.id === slug)[0];

  if (!articleData) {
    notFound();
  }

  return <ArticleView articleData={articleData} urlPrefix={"programming"} />;
}
