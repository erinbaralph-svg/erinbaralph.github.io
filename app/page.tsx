import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "./Navbar";

export const metadata: Metadata = {
  title: "About Me - Erin Ralph",
};

export default function AboutPage() {
  return (
    <>
      <Navbar currentPageHref="/index" />

      <main className="bg-[#410142] flex flex-col flex-grow">
        <h1 className="text-yellow-100 text-2xl p-4">Get To Know Me!</h1>
        <div className="flex flex-col md:flex-row items-center min-h-fit gap-4 p-4 bg-[#D5D1C8]">
          <div className="w-full text-lg h-fit flex flex-col gap-1 items-center max-w-[50ch]">
            <div className="bg-white px-2 py-1 flex flex-col gap-4 border-1 border-black/30">
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
                also have experience with exhibit design, research, budgeting,
                and planning. I have undertaken multiple large-scale archives
                and collections overhaul projects at various institutions.
              </p>
              <p>
                I have a great deal of interest in using digital media to assist
                museums and archives in their activities and operations. Feel
                free to explore my site a bit further to learn more about me and
                what I have worked on!
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-white p-4 gap-3 flex flex-col items-center justify-center border-1 border-black/30">
            <div className="w-full h-54 md:h-full relative">
              <Image
                src="/img/about/erin.webp"
                alt="Picture of Erin working the needlework booth at the Lynde House Museum's Annual History In The Park."
                fill={true}
                className="object-cover"
              />
            </div>
            <p className="italic text-sm">
              Picture of me working the needlework booth at the Lynde House
              Museum's Annual History In The Park.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
