import { Navbar } from "../Navbar";
import { Showcase, type ShowcaseData } from "@/components/Showcase";
import NotFound from "../not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Erin Ralph",
};

const projects: ShowcaseData[] = [
  {
    title: "Museum Preperator",
    date: "Summer 2023",
    location: "Uxbridge Historical Centre",
    descriptionParagraphs: [
      "As Museum Preparator at the Uxbridge Historical Centre, I completed extensive site maintenance and preparation work, including painting key exterior structures, adding high-visibility accessibility markings, and maintaining large farm equipment to ensure visitor safety and artifact preservation.",
    ],
    images: [
      {
        src: "/img/programming/children/vbcstmarks.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/summercampuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/zoo2youuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub2.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub3.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/lemonadefoodbank.avif",
        caption: "",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar currentPageHref="/projects" />
      <main className="bg-[#D5D1C8] overflow-y-auto flex flex-col flex-grow">
        <div className="flex flex-col">
          {projects.map((e, index) => (
            <Showcase key={index} headerBackgroundColor={"#075016"} {...e} />
          ))}
        </div>
      </main>
    </>
  );
}
