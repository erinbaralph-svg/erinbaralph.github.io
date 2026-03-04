import { Metadata } from "next";
import { Navbar } from "../Navbar";
import { ArticleWindow } from "@/components/ArticleWindow";
import { programming } from "./programmingData";
import { Rover } from "@/components/Rover";

export const metadata: Metadata = {
  title: "Exhibits - Erin Ralph",
};

export default function ExhibitsPage() {
  return (
    <>
      <Rover tipName={"articles"}>Click on each item to read more!</Rover>
      <Navbar currentPageHref="/programming" />
      <main className="p-2 pb-4 overflow-y-auto flex flex-col flex-grow">
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {programming.map((e, index) => (
            <ArticleWindow
              key={index}
              articleData={e}
              urlPrefix="programming"
            />
          ))}
        </div>
      </main>
    </>
  );
}
