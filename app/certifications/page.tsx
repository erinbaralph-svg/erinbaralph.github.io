"use client";

import { Navbar } from "../Navbar";
import { Badge, type BadgeData } from "@/components/Badge";

const certifications: BadgeData[] = [
  {
    title: "CPR, First Aid, and AED",
    link: "/ErinRalph.pdf",
    iconSrc: "/img/certifications/red-cross.png",
  },
  {
    title: "Workplace Hazardous Materials Information System (WHMIS)",
    iconSrc: "/img/certifications/alert.png",
  },
  {
    title: "Ladder Safety Certification",
    iconSrc: "/img/certifications/keys.png",
  },
  {
    title: "Vulnerable Sector Screening",
    iconSrc: "/img/certifications/butterfly.png",
  },
  {
    title: "Accessibility Standards Training (AODA)",
    iconSrc: "/img/certifications/tree.png",
  },
  {
    title: "Tourism and Visitor Services Training",
    iconSrc: "/img/certifications/question.png",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Navbar currentPageHref="/certifications" />
      <main className="bg-[#D5D1C8] overflow-y-auto flex flex-col flex-grow">
        <h1 className="text-yellow-100 text-2xl p-4 bg-[#BD9101]">
          Certifications
        </h1>
        <div className="mx-auto sm:mt-6 mb-16 grid grid-cols-1 sm:grid-cols-2 justify-items-center items-start p-4 gap-4 w-fit">
          {certifications.map((e, index) => (
            <Badge key={index} {...e} />
          ))}
        </div>
      </main>
    </>
  );
}

