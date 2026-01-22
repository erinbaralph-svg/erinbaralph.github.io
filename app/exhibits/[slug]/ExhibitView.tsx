"use client";

import { ArticleData } from "@/types/article";
import { Navbar } from "@/app/Navbar";
import { Whiteboard } from "@/components/Whiteboard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ImageOverlay } from "@/components/ImageOverlay";

export function ExhibitView({ articleData }: { articleData: ArticleData }) {
  const [overlayImageSrc, setOverlayImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOverlayImageSrc(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (overlayImageSrc) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    }
  }, [overlayImageSrc]);

  return (
    <>
      <Navbar currentPageHref="/exhibits" />
      <Whiteboard className="mx-1 mb-2">
        <div
          style={{ fontFamily: "Arial" }}
          className="m-6 sm:m-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start lg:justify-center lg:mb-10"
        >
          <div className="flex flex-col gap-4 text-lg max-w-[50ch]">
            <Link href="/exhibits" className="text-[#0000EE]">
              ←{" "}
              <span className="underline underline-offset-2">
                back to exhibits
              </span>
            </Link>
            <h1 className="text-2xl font-bold">{articleData.title}</h1>
            {articleData.descriptionParagraphs.map((text, index) => (
              <p key={index} className="leading-6">
                {text}
              </p>
            ))}
          </div>
          <div className="w-full lg:max-w-1/2 grid grid-cols-2 h-fit gap-4">
            {articleData.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.caption ?? ""}
                className="w-full aspect-square object-cover select-none cursor-zoom-in"
                onClick={() => setOverlayImageSrc(image.src)}
                draggable={false}
              />
            ))}
          </div>
          {overlayImageSrc && (
            <ImageOverlay
              image={
                articleData.images.filter((i) => i.src === overlayImageSrc)[0]
              }
              onClose={() => setOverlayImageSrc(null)}
            />
          )}
        </div>
      </Whiteboard>
    </>
  );
}
