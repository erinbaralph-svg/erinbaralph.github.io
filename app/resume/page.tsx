import Link from "next/link";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Erin Ralph",
};

export default function ResumePage() {
  return (
    <>
      <Navbar currentPageHref="/resume" />
      <main className="pb-20 sm:h-svh bg-[#552500] p-4 flex flex-col items-center gap-4">
        <Link
          href="/ErinRalph.pdf"
          download={true}
          className="bg-[#D5D1C8] border-3 border-t-white/60 border-r-black/20 border-b-black/20 border-l-white/60 w-full sm:w-fit px-6 py-4 flex justify-center items-center gap-4"
        >
          <Image
            src="/img/resume/download.png"
            alt="download icon"
            width={16}
            height={16}
            className="pixelated size-8 border"
          />
          <p className="underline">Click to download PDF</p>
        </Link>
        <embed
          src="/ErinRalph.pdf"
          className="w-full h-full hidden sm:block"
          type="application/pdf"
        />
        <p className="block sm:hidden text-white text-center">
          (PDF Preview is not available on mobile. Please download to view.)
        </p>
      </main>
    </>
  );
}
