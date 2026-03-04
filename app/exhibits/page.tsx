import { Metadata } from "next";
import { Navbar } from "../Navbar";
import { ArticleWindow } from "@/components/ArticleWindow";
import { exhibits } from "./exhibitsData";
import { Rover } from "@/components/Rover";
import { RoverState } from "@/types/rover";

export const metadata: Metadata = {
  title: "Exhibits - Erin Ralph",
};

export default function ExhibitsPage() {
  return (
    <>
      <Rover visibleState={RoverState.ARTICLES} />
      <Navbar currentPageHref="/exhibits" />
      <main className="p-2 pb-4 overflow-y-auto flex flex-col flex-grow">
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {exhibits.map((e, index) => (
            <ArticleWindow key={index} articleData={e} urlPrefix="exhibits" />
          ))}
        </div>
      </main>
    </>
  );
}
