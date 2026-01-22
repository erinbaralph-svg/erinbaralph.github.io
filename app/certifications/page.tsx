import { Metadata } from "next";
import { Navbar } from "../Navbar";
import { Badge } from "@/components/Badge";
import { certifications } from "./certificationsData";

export const metadata: Metadata = {
  title: "Certifications - Erin Ralph",
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar currentPageHref="/certifications" />
      <main className="overflow-y-auto flex flex-col flex-grow">
        <div className="mx-auto md:mt-6 mb-16 grid grid-cols-1 md:grid-cols-2 justify-items-center items-start p-4 gap-4 w-fit">
          {certifications.map((e, index) => (
            <Badge key={index} {...e} />
          ))}
        </div>
      </main>
    </>
  );
}
