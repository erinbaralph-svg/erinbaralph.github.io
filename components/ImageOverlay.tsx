import { ImageData } from "@/types/article";

export function ImageOverlay({
  image,
  onClose,
}: {
  image: ImageData;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-start bg-black/80 backdrop-blur-sm cursor-zoom-out overflow-hidden overflow-y-auto"
    >
      <div className="relative flex flex-col justify-center items-center gap-4 p-10 w-full h-full">
        <img
          src={image.src}
          alt={image.caption}
          draggable={false}
          className={`select-none object-contain h-10/12 sm:h-full`}
          loading="lazy"
        />
        <p className="text-white text-xl max-w-[70ch]">{image.caption}</p>
      </div>
    </div>
  );
}

