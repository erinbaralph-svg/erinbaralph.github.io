import { Metadata } from "next";
import { Navbar } from "../Navbar";
import { Whiteboard } from "@/components/Whiteboard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Erin Ralph",
};

const email = "erinralph10@outlook.com";
const phone = "+1 (905) 449-6540";
const linkedIn = "https://www.linkedin.com/in/erin-ralph-0a7063234/";

export default function AboutPage() {
  return (
    <>
      <Navbar currentPageHref="/contact" />
      <Whiteboard className="flex flex-col mx-1 mb-2">
        <div
          style={{ fontFamily: "Arial" }}
          className="m-6 sm:m-10 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4 text-lg leading-6">
            <h1 className="text-2xl font-bold">Contact me</h1>
            <Link href={`mailto:${email}`} className="underline w-fit">{email}</Link>
            <p>{phone}</p>
            <Link href={linkedIn}  className="underline w-fit" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          </div>
        </div>
      </Whiteboard>
    </>
  );
}
