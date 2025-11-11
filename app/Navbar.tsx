"use client";

import Image from "next/image";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const availablePages: { href: string; name: string; icon: string }[] = [
    {
      href: "/index",
      name: "About me",
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
    <div className="flex gap-1 p-4 bg-white/75">
      {pathname}
      {availablePages.map((page) => {
        const isActive = pathname.includes(page.href);
        return (
          <a
            key={page.href}
            className={clsx(
              "flex flex-col items-center justify-center w-40 h-32 border-4",
              isActive
                ? "border-t-black/20 border-r-white/60 border-b-white/60 border-l-black/20 bg-black/5"
                : "border-t-white/60 border-r-black/20 border-b-black/20 border-l-white/60"
            )}
            href={page.href}
          >
            {page.href}
            <div
              className={clsx(
                "flex flex-col justify-center items-center gap-1 px-4 h-full aspect-square",
                isActive &&
                  "outline outline-black outline-dashed -outline-offset-8"
              )}
            >
              <Image
                src={`/img/icons/${page.icon}`}
                alt="About icon"
                width={32}
                height={32}
                className="w-16 h-16 pixelated object-contain"
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
  );
}
