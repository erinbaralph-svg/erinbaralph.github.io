import { Metadata } from "next";
import { Navbar } from "../Navbar";
import { Whiteboard } from "@/components/Whiteboard";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact - Erin Ralph",
};

const data = {
  email: "erinralph10@outlook.com",
  phone: "+1 (905) 449-6540",
  linkedIn: "https://www.linkedin.com/in/erin-ralph-0a7063234/",
};

export default function AboutPage() {
  return (
    <>
      <Navbar currentPageHref="/contact" />
      <Whiteboard className="flex flex-col mx-1 mb-2">
        <div
          style={{ fontFamily: "Arial" }}
          className="m-6 sm:m-10 flex flex-col-reverse lg:flex-row gap-10 items-center lg:justify-center lg:mb-10"
        >
          <div className="w-full sm:w-48 h-54 sm:h-68 lg:h-96 relative">
            <Image
              src="/img/contact/hi.jpg"
              alt="Picture of Erin working the needlework booth at the Lynde House Museum's Annual History In The Park."
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 text-lg leading-6 max-w-[50ch]">
            <h1 className="text-2xl font-bold">Contact me</h1>
            <p className="">
              Feel free to reach out I am always happy to chat!
            </p>
            <Link
              href={`mailto:${data.email}`}
              className="flex items-center gap-4"
            >
              <Image
                src={`/img/contact/email.png`}
                alt={`email icon`}
                width={32}
                height={32}
                className="size-8 pixelated object-contain"
              />
              <p className="underline h-fit">{data.email}</p>
            </Link>
            <Link
              href={`tel:${data.phone}`}
              className="flex items-center gap-6"
            >
              <Image
                src={`/img/contact/phone.png`}
                alt={`phone icon`}
                width={32}
                height={32}
                className="size-8 pixelated object-contain"
              />
              <p className="underline h-fit">{data.phone}</p>
            </Link>
            <Link
              href={data.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <Image
                src={`/img/contact/linkedin.png`}
                alt={`linkedin icon`}
                width={32}
                height={32}
                className="size-8 pixelated object-contain"
              />

              <p className="underline h-fit">LinkedIn</p>
            </Link>
          </div>
        </div>
      </Whiteboard>
    </>
  );
}
