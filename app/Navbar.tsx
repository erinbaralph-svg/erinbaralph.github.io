"use client";

import Image from "next/image";
import { clsx } from "clsx";

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
      <div className="bg-gradient-to-b from-blue-300 to-blue-100 flex items-center gap-2 px-3 py-3 font-bold border-b border-gray-300 border-opacity-7">
        <Image
          src="/img/dish.png"
          alt="Satellite dish icon"
          width={32}
          height={32}
          className="w-8 h-8 pixelated"
        />
        <p>
          {availablePages.find((page) => currentPageHref === page.href)?.name ??
            "404"}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:flex gap-1 p-2 sm:p-4 bg-white/75">
        {availablePages.map((page) => {
          const isActive = currentPageHref === page.href;

          return (
            <a
              key={page.href}
              className={clsx(
                "flex sm:flex-col items-center sm:justify-center w-full h-18 sm:w-40 sm:h-32 border-4",
                isActive
                  ? "border-t-black/20 border-r-white/60 border-b-white/60 border-l-black/20 bg-black/5"
                  : "border-t-white/60 border-r-black/20 border-b-black/20 border-l-white/60"
              )}
              href={page.href}
            >
              <div
                className={clsx(
                  "flex sm:flex-col sm:justify-center items-center gap-2 sm:gap-1 px-2 sm:px-4 w-full sm:w-fit h-full aspect-square",
                  isActive &&
                    "outline-1 outline-black outline-dashed -outline-offset-4 sm:-outline-offset-8"
                )}
              >
                <Image
                  src={`/img/navbar/${page.icon}`}
                  alt="About icon"
                  width={32}
                  height={32}
                  className="size-8 sm:size-16 pixelated object-contain"
                />
                <p
                  className={clsx(
                    "truncate",
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
