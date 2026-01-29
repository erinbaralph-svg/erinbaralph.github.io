import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "./Navbar";
import { Whiteboard } from "@/components/Whiteboard";

export const metadata: Metadata = {
  title: "About Me - Erin Ralph",
};

export default function AboutPage() {
  return (
    <>
      <Navbar currentPageHref="/index" />
      <Whiteboard className="flex flex-col mx-1 mb-2">
        <div
          style={{ fontFamily: "Arial" }}
          className="m-6 sm:m-10 flex flex-col lg:flex-row gap-10 items-center lg:justify-center lg:mb-10"
        >
          <div className="flex flex-col gap-4 text-lg leading-6 max-w-[50ch]">
            <h1 className="text-2xl font-bold">Get To Know Me!</h1>
            <p>
              My name is Erin Ralph. I am an emerging museum professional
              interested in museum administration, fundraising, and project
              management. I am a graduate student currently studying Museum
              Management and Curatorship at Fleming College and have an
              undergraduate background in History and English Literature.
            </p>
            <p>
              Outside of my studies, I have a wealth of experience in running
              public programming for many groups of all ages and abilities. I
              also have experience with exhibit design, research, budgeting, and
              planning. I have undertaken multiple large-scale archives and
              collections overhaul projects at various institutions.
            </p>
            <p>
              I have a great deal of interest in using digital media to assist
              museums and archives in their activities and operations. Feel free
              to explore my site a bit further to learn more about me and what I
              have worked on!
            </p>
          </div>
          <div className="w-fit flex gap-2 flex-col items-center">
            <div className="w-full h-54 sm:h-68 lg:h-96 relative">
              <Image
                src="/img/about/erin.jpg"
                alt="Picture of Erin working the needlework booth at the Lynde House Museum's Annual History In The Park."
                fill={true}
                className="object-contain"
              />
            </div>
            <p className="italic text-sm max-w-[60ch]">
              Picture of me working the needlework booth at the Lynde House
              Museum's Annual History In The Park.
            </p>
          </div>
        </div>
      </Whiteboard>
    </>
  );
}
