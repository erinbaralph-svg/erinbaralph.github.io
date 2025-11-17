import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export type ImageData = {
  src: string;
  caption?: string;
};

export type ShowcaseData = {
  title: string;
  date: string;
  location: string;
  descriptionParagraphs: string[];
  images: ImageData[];
};

type ShowcaseProps = ShowcaseData & {
  headerBackgroundColor: string;
};

export function Showcase({
  headerBackgroundColor,
  title,
  date,
  location,
  descriptionParagraphs,
  images,
}: ShowcaseProps) {
  return (
    <>
      <h1
        className={"text-yellow-100 text-2xl p-4"}
        style={{ backgroundColor: headerBackgroundColor }}
      >
        {title}
      </h1>
      <div className="m-4 flex flex-col sm:flex-row gap-4">
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
        <div className="w-full sm:w-4/5">
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
    <div className="relative flex flex-col sm:flex-row w-full h-full gap-1">
      <div className="flex flex-col w-full h-full gap-1">
        <div className="bg-white w-full h-full border-1 border-black/30 p-4 flex flex-col gap-3">
          <div className="relative w-full h-96 sm:h-full">
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
            ? "flex justify-center sm:justify-start sm:flex-col gap-2 h-fit"
            : "grid grid-cols-3 sm:grid-cols-2 justify-items-center sm:justify-items-start h-fit gap-2"
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
