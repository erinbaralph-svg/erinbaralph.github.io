import Link from "next/link";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { Metadata } from "next";
import { Whiteboard } from "@/components/Whiteboard";

export const metadata: Metadata = {
  title: "Resume - Erin Ralph",
};

export default function ResumePage() {
  return (
    <>
      <Navbar currentPageHref="/resume" />
      <Link
        href="/ErinRalph.pdf"
        download={true}
        className="mx-auto text-lg sm:text-normal py-6 text-[#0000EE] w-full sm:w-fit flex justify-center items-center gap-4"
      >
        <Image
          src="/img/resume/download.png"
          alt="download icon"
          width={16}
          height={16}
          className="pixelated size-8 border"
        />
        <p className="underline">Tap to download PDF</p>
      </Link>
      <Whiteboard className="hidden sm:block flex flex-col mx-2 mb-2">
        <div className="sm:h-svh flex flex-col items-center gap-4">
          <embed
            src="/ErinRalph.pdf"
            className="w-full h-full"
            type="application/pdf"
          />
        </div>
      </Whiteboard>
    </>
  );
}
