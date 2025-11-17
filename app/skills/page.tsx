import { Navbar } from "../Navbar";
import { Badge, type BadgeData } from "@/components/Badge";
import NotFound from "../not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Erin Ralph",
};

const skills: BadgeData[] = [];

export default function SkillsPage() {
  return (
    <>
      <Navbar currentPageHref="/skills" />
      <main className="bg-[#D5D1C8] overflow-y-auto flex flex-col flex-grow">
        <h1 className="text-yellow-100 text-2xl p-4 bg-[#0C7F85]">Skills</h1>
        <div className="mx-auto mt-6 mb-16 grid grid-cols-2 justify-items-center items-start p-4 gap-4 w-fit">
          {skills.map((e, index) => (
            <Badge key={index} {...e} />
          ))}
        </div>
        <NotFound />
      </main>
    </>
  );
}
