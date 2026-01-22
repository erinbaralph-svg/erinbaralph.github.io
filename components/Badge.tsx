import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type BadgeData = {
  title: string;
  link?: string;
  iconSrc: string;
};

export function Badge({ title, link, iconSrc }: BadgeData) {
  return (
    <Link
      href={link ?? ""}
      className="p-1 flex justify-start items-center gap-4 w-full p-4 border-4 border-t-[#EAEAEA] border-l-[#EAEAEA] border-r-[#A8A8A8] border-b-[#A8A8A8]"
    >
      <Image
        src={iconSrc}
        alt={`Icon for ${title}`}
        width={48}
        height={48}
        className="pixelated shrink-0 self-start sm:self-auto"
      />
      <p
        className={clsx(
          link && "text-[#0000EE] underline",
          "line-clamp-3 w-[30ch]"
        )}
      >
        {title}
      </p>
    </Link>
  );
}
