import { Metadata } from "next";
import { Navbar } from "../Navbar";
import { Badge } from "@/components/Badge";
import { skills } from "./skillsData";

export const metadata: Metadata = {
  title: "Skills - Erin Ralph",
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar currentPageHref="/skills" />
      <main className="overflow-y-auto flex flex-col flex-grow">
        <div className="mx-auto md:mt-6 mb-16 grid grid-cols-1 md:grid-cols-2 justify-items-center items-start p-4 gap-4 w-fit">
          {skills.map((e, index) => (
            <Badge key={index} {...e} />
          ))}
        </div>
      </main>
    </>
  );
}

