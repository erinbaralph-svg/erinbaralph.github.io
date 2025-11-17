import Image from "next/image";

export type BadgeData = {
  title: string;
  link?: string;
  iconSrc: string;
};

export function Badge({ title, link, iconSrc }: BadgeData) {
  return (
    <div className="border-2 border-t-white/30 border-l-white/30 border-b-black/30 border-r-black/30 p-1 flex justify-start items-center gap-4 w-full p-4">
        <Image
          src={iconSrc}
          alt={`Icon for ${title}`}
          width={48}
          height={48}
          className="pixelated shrink-0 self-start sm:self-auto"
        />
        {/* {link && ( */}
        {/*   <Link href={link} className="underline text-blue-700"> */}
        {/*     download */}
        {/*   </Link> */}
        {/* )} */}
      <p className="line-clamp-3 w-[30ch]">{title}</p>
    </div>
  );
}
