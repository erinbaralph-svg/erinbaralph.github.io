import { Metadata } from "next";
import { Navbar } from "../Navbar";
import { Showcase, type ShowcaseData } from "@/components/Showcase";

export const metadata: Metadata = {
  title: "Exhibits - Erin Ralph",
};

const exhibits: ShowcaseData[] = [
  {
    title: "From Fields to Paper: Lucy Maud Montgomery’s Literary Garden",
    date: "Summer 2024",
    location: "Uxbridge Historical Centre",
    descriptionParagraphs: [
      "In the summer of 2024, I assisted in the construction of the From Fields to Paper exhibit at the Uxbridge Historical Centre in Uxbridge, ON. For this project, I helped paint exhibit furniture, print and cut panels, and mount both panels and framed artwork. ",
      "I also assisted in the transfer of loaned artifacts from the Leaskdale Manse. I selected artifact placements within the exhibit and contributed to designing the layout of exhibit furniture and décor. In addition, I helped create mounts, write artifact labels, and install the large exhibit sign.",
      "For this exhibit, I also helped plan and execute an interactive activity where children could create their own garden tags inspired by the most famous plants from Lucy Maud Montgomery’s writing.",
      "I created an exhibit catalogue and conducted regular condition checks on the artifacts as well as regular cleaning throughout the exhibit’s run.",
    ],
    images: [
      {
        src: "/img/exhibits/lucymaud/LucyMaud.jpg",
        caption: "Selfie wall, floral display, and artifact case.",
      },
      {
        src: "/img/exhibits/lucymaud/LucyMaud2.png",
        caption: "Corner display with exhibit panel and hanging art.",
      },
      {
        src: "/img/exhibits/lucymaud/LucyMaud3.png",
        caption: "Upright display and interactive chalkboard",
      },
    ],
  },
  {
    title: "The House and The Home",
    date: "March 2025",
    location: "University of Toronto",
    descriptionParagraphs: [
      "In March 2025, I co-curated an exhibit for the University of Toronto’s Galleries, Libraries, Archives, and Museums (GLAM) Club.",
      "Together, our team budgeted, planned, marketed, and curated the exhibit from start to finish. The exhibit explored the concept of “home” through a range of artifacts and artworks. As a co-curator, I sourced pieces for display, helped develop the exhibit’s central themes and objectives, and secured the exhibition space. I coordinated the writing of interpretive panels and labels for more than 30 artifacts and assisted in building exhibit furniture. I also created interactive elements, including a handwritten recipe book that visitors could contribute to, and supported the marketing and fundraising efforts.",
      "Additionally, I helped design and produce a companion zine for the exhibit. My primary responsibility was writing and designing the exhibit catalogue, a printed book featuring the stories behind each artifact. I completed both the graphic design and editing for the publication.",
    ],
    images: [
      {
        src: "/img/exhibits/house-home/HouseandHome.png",
        caption: "Artifact text, written by me!",
      },
      {
        src: "/img/exhibits/house-home/HouseandHome2.png",
        caption: "Dining room table display",
      },
      {
        src: "/img/exhibits/house-home/HouseandHome4.png",
        caption: "Bedroom display",
      },
      {
        src: "/img/exhibits/house-home/HouseandHome5.png",
        caption: "Close up of artifact and text",
      },
      {
        src: "/img/exhibits/house-home/HouseandHome6.png",
        caption: "Photo gallery wall",
      },
    ],
  },
];

export default function ExhibitsPage() {
  return (
    <>
      <Navbar currentPageHref="/exhibits" />
      <main className="bg-[#D5D1C8] overflow-y-auto flex flex-col flex-grow">
        <div className="flex flex-col">
          {exhibits.map((e, index) => (
            <Showcase
              key={index}
              headerBackgroundColor={"#730002"}
              {...e}
            />
          ))}
        </div>
      </main>
    </>
  );
}
