import clsx from "clsx";
import { Whiteboard } from "./Whiteboard";
import Link from "next/link";
import { ArticleData } from "@/types/article";

export function ArticleWindow({
  articleData,
  urlPrefix,
}: {
  articleData: ArticleData;
  urlPrefix: string;
}) {
  const { id, title, images } = articleData;

  return (
    <Link
      href={`/${urlPrefix}/${id}`}
      className={clsx(
        "group w-96 h-82 p-2 flex flex-col gap-2 cursor-pointer",
        "border-4 border-transparent hover:border-t-[#EAEAEA] hover:border-l-[#EAEAEA] hover:border-r-[#A8A8A8] hover:border-b-[#A8A8A8]"
      )}
    >
      <Whiteboard className="flex-1 min-h-0 cursor-pointer">
        <img
          src={images[0].src}
          alt={images[0].caption ?? `Thumbnail for ${title}`}
          className="w-full h-full object-contain bg-black/40 cursor-pointer"
          draggable={false}
        />
      </Whiteboard>
      <p className="underline sm:no-underline group-hover:underline h-12 line-clamp-2">
        {title}
      </p>
    </Link>
  );
}
