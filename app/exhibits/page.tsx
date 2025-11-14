"use client";

import { Navbar } from "../Navbar";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";

type ImageData = {
  src: string;
  caption?: string;
};

type Exhibit = {
  title: string;
  date: string;
  location: string;
  descriptionParagraphs: string[];
  images: ImageData[];
};

const exhibits: Exhibit[] = [
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
            <Exhibit key={index} {...e} />
          ))}
        </div>
      </main>
    </>
  );
}

function Exhibit({
  title,
  date,
  location,
  descriptionParagraphs,
  images,
}: Exhibit) {
  return (
    <>
      <h1 className="text-yellow-100 text-2xl p-4 bg-[#730002]">{title}</h1>
      <div className="m-4 flex gap-4">
        <div className="w-full flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="w-full">
              <p className="font-bold">Location</p>
              <p className="px-1 py-px bg-white w-full border-1 border-black/30">
                {location}
              </p>
            </div>
            <div className="min-w-fit">
              <p className="font-bold">Date</p>
              <p className="px-1 py-px pe-10 bg-white min-w-fit line-clamp-1 border-1 border-black/30">
                {date}
              </p>
            </div>
          </div>
          <p className="font-bold">Description</p>
          <div className="bg-white px-2 py-1 flex flex-col gap-2 border-1 border-black/30">
            {descriptionParagraphs.map((s, index) => (
              <p key={index}>{s}</p>
            ))}
          </div>
        </div>
        <div className="w-4/5">
          <ImageCarousel images={images} />
        </div>
      </div>
    </>
  );
}

function ImageCarousel({ images }: { images: ImageData[] }) {
  const [currentImageSrc, setCurrentImageSrc] = useState(images[0]?.src || "");
  const currentImage = images.find((img) => img.src === currentImageSrc);

  if (!currentImage) return <p>An error occurred</p>;

  return (
    <div className="relative flex w-full h-full gap-1">
      <div className="flex flex-col w-full h-full gap-1">
        <div className="bg-white w-full h-full border-1 border-black/30 p-4 flex flex-col gap-3">
          <div className="relative w-full h-full">
            <Image
              src={currentImageSrc}
              alt={
                currentImage.caption
                  ? `Image of ${currentImage.caption}`
                  : "carousel image"
              }
              fill={true}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex w-full justify-center items-center gap-1">
            <p className="w-fit italic line-clamp-1 text-sm">
              {currentImage.caption}
            </p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "p-4 bg-white min-w-fit border-1 border-black/30",
          images.length <= 4
            ? "flex flex-col gap-2 h-fit"
            : "grid grid-cols-2 justify-items-start h-fit gap-2"
        )}
      >
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setCurrentImageSrc(img.src)}
            className={`relative w-20 h-20 overflow-hidden border-2 transition-all ${
              currentImageSrc === img.src
                ? "border-black"
                : "border-transparent hover:border-gray-400"
            }`}
          >
            <Image
              src={img.src}
              alt={
                currentImage.caption
                  ? `Thumbnail of ${currentImage.caption}`
                  : "carousel thumbnail"
              }
              fill={true}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
