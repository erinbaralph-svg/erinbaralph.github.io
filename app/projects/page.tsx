import { Navbar } from "../Navbar";
import { Showcase, type ShowcaseData } from "@/components/Showcase";
import NotFound from "../not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Erin Ralph",
};

const projects: ShowcaseData[] = [];

export default function ProjectsPage() {
  return (
    <>
      <Navbar currentPageHref="/projects" />
      <main className="bg-[#D5D1C8] overflow-y-auto flex flex-col flex-grow">
        <div className="flex flex-col">
          {projects.map((e, index) => (
            <Showcase key={index} headerBackgroundColor={"#075016"} {...e} />
          ))}
          <NotFound />
        </div>
      </main>
    </>
  );
}
