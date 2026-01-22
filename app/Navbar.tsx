"use client";

import Image from "next/image";
import { clsx } from "clsx";
import { MinimizeIcon } from "@/components/MinimizeButton";
import { FullscreenIcon } from "@/components/FullscreenIcon";
import { CloseIcon } from "@/components/CloseIcon";

export function Navbar({ currentPageHref }: { currentPageHref: string }) {
  const availablePages: { href: string; name: string; icon: string }[] = [
    {
      href: "/index",
      name: "About Me",
      icon: "about.png",
    },
    {
      href: "/exhibits",
      name: "Exhibits",
      icon: "exhibits.png",
    },
    {
      href: "/programming",
      name: "Programming",
      icon: "programming.png",
    },
    {
      href: "/projects",
      name: "Projects",
      icon: "projects.png",
    },
    {
      href: "/skills",
      name: "Skills",
      icon: "skills.png",
    },
    {
      href: "/certifications",
      name: "Certifications",
      icon: "certifications.png",
    },
    {
      href: "/resume",
      name: "Resume",
      icon: "resume.png",
    },
  ] as const;

  return (
    <>
      <div>
        <div className="bg-[#000080] mx-1 mt-1 text-white flex items-center gap-2 px-[.3rem] py-[.3rem]">
          <Image
            src="/img/dish.png"
            alt="Satellite dish icon"
            width={32}
            height={32}
            className="ms-1 w-8 h-8 pixelated"
          />
          <p className="text-xl tracking-wider">
            {availablePages.find((page) => currentPageHref === page.href)
              ?.name ?? "404"}
          </p>
          <div className="ml-auto flex gap-[.3rem]">
            <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-black border-r-black">
              <div className="bg-[#C0C0C0] size-7 p-1 flex justify-center items-center border-2 border-t-[#DFDFDF] border-l-[#DFDFDF] border-b-[#7E7E7E] border-r-[#7E7E7E]">
                <MinimizeIcon className="w-full h-full" />
              </div>
            </div>
            <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-black border-r-black">
              <div className="bg-[#C0C0C0] size-7 p-1 flex justify-center items-center border-2 border-t-[#DFDFDF] border-l-[#DFDFDF] border-b-[#7E7E7E] border-r-[#7E7E7E]">
                <FullscreenIcon className="w-full h-full" />
              </div>
            </div>
            <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-black border-r-black">
              <div className="bg-[#C0C0C0] size-7 p-1 flex justify-center items-center border-2 border-t-[#DFDFDF] border-l-[#DFDFDF] border-b-[#7E7E7E] border-r-[#7E7E7E]">
                <CloseIcon className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex flex-wrap gap-1 p-2 md:p-2">
        {availablePages.map((page) => {
          const isActive = currentPageHref === page.href;

          return (
            <a
              key={page.href}
              className={clsx(
                "flex md:flex-col items-center md:justify-center w-full h-14 md:w-34 md:h-26 border-4 hover:border-t-[#EAEAEA] hover:border-l-[#EAEAEA] hover:border-r-[#A8A8A8] hover:border-b-[#A8A8A8]",
                isActive
                  ? "border-4 border-t-[#EAEAEA] border-l-[#EAEAEA] border-r-[#A8A8A8] border-b-[#A8A8A8]"
                  : "border-transparent"
              )}
              href={page.href}
            >
              <div className="flex md:flex-col md:justify-center items-center gap-3 md:gap-1 px-2 py-1 md:px-4 w-full md:w-fit h-full aspect-square">
                <Image
                  src={`/img/navbar/${page.icon}`}
                  alt={`${page.name} icon`}
                  width={32}
                  height={32}
                  className="size-8 md:size-14 pixelated object-contain"
                />
                <p
                  className={clsx(
                    "truncate text-lg",
                    isActive &&
                      "first-letter:underline first-letter:underline-offset-2"
                  )}
                >
                  {page.name}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
