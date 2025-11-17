"use client";

import { Navbar } from "../Navbar";
import { Showcase, type ShowcaseData } from "@/components/Showcase";
import NotFound from "../not-found";

const programming: ShowcaseData[] = [];

export default function ProgrammingPage() {
  return (
    <>
      <Navbar currentPageHref="/programming" />
      <main className="bg-[#D5D1C8] overflow-y-auto flex flex-col flex-grow">
        <div className="flex flex-col">
          {programming.map((e, index) => (
            <Showcase key={index} headerBackgroundColor={"#075016"} {...e} />
          ))}
        </div>
        <NotFound />
      </main>
    </>
  );
}
