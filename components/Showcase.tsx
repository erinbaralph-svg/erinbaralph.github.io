"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

export type ImageData = {
  src: string;
  caption?: string;
};

export type ShowcaseData = {
  title: string;
  date?: string;
  location?: string;
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
  const [overlayImageSrc, setOverlayImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (overlayImageSrc) {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "pinch-zoom";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
    }
  }, [overlayImageSrc]);

  return (
    <>
      <h1
        className={"text-yellow-100 text-2xl p-4"}
        style={{ backgroundColor: headerBackgroundColor }}
      >
        {title}
      </h1>
      <div className="m-4 flex flex-col md:flex-row gap-4">
        <div className="w-full flex flex-col gap-1">
          {(location || date) && (
            <div className="flex gap-1">
              {location && (
                <div className="w-full">
                  <p className="font-bold">Location</p>
                  <p className="px-1 py-px bg-white w-full border-1 border-black/30">
                    {location}
                  </p>
                </div>
              )}
              {date && (
                <div className="min-w-fit">
                  <p className="font-bold">Date</p>
                  <p className="px-1 py-px pe-10 bg-white min-w-fit line-clamp-1 border-1 border-black/30">
                    {date}
                  </p>
                </div>
              )}
            </div>
          )}
          <p className="font-bold">Description</p>
          <div className="bg-white px-2 py-1 flex flex-col gap-2 border-1 border-black/30">
            {descriptionParagraphs.map((s, index) => (
              <p key={index}>{s}</p>
            ))}
          </div>
        </div>
        <div className="w-full md:w-4/5">
          <ImageCarousel
            images={images}
            overlayImageSrc={overlayImageSrc}
            setOverlayImageSrc={setOverlayImageSrc}
          />
        </div>
      </div>
    </>
  );
}

function ImageCarousel({
  images,
  overlayImageSrc,
  setOverlayImageSrc,
}: {
  images: ImageData[];
  overlayImageSrc: string | null;
  setOverlayImageSrc: Dispatch<SetStateAction<string | null>>;
}) {
  const [currentImageSrc, setCurrentImageSrc] = useState(images[0]?.src || "");
  const currentImage = images.find((img) => img.src === currentImageSrc);

  if (!currentImage) return <p>An error occurred</p>;

  return (
    <>
      <div className="relative flex flex-col md:flex-row w-full h-full gap-1">
        <div className="flex flex-col w-full h-full gap-1">
          <div className="bg-white w-full h-full border-1 border-black/30 p-4 flex flex-col gap-3">
            <div className="relative w-full h-96 md:h-full">
              <Image
                src={currentImageSrc}
                alt={
                  currentImage.caption
                    ? `Image of ${currentImage.caption}`
                    : "carousel image"
                }
                fill={true}
                className="object-contain cursor-zoom-in"
                priority={true}
                onClick={() => setOverlayImageSrc(currentImageSrc)}
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
              ? "flex justify-center md:justify-start md:flex-col gap-2 h-fit"
              : "grid grid-cols-3 md:grid-cols-2 justify-items-center md:justify-items-start h-fit gap-2"
          )}
        >
          {images.map((img) => (
            <button
              key={img.src}
              onClick={() => setCurrentImageSrc(img.src)}
              className={`relative w-20 h-20 overflow-hidden border-2 transition-all cursor-pointer ${
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
      {overlayImageSrc === currentImageSrc && (
        <div
          className="z-10 fixed inset-0 h-full w-full bg-black/80 flex items-center justify-center cursor-zoom-out"
          onClick={() => setOverlayImageSrc(null)}
        >
          <div className="relative w-9/10 h-9/10">
            <Image
              src={overlayImageSrc}
              alt={"image overlay"}
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
