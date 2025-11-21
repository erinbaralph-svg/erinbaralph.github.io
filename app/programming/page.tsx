import { Navbar } from "../Navbar";
import { Showcase, type ShowcaseData } from "@/components/Showcase";
import NotFound from "../not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming - Erin Ralph",
};

const programming: ShowcaseData[] = [ {
    title: "Children and Youth Programming",
    date: "2022-2025",
    location: "",
    descriptionParagraphs: [
      "I began my journey in children and youth programming in  2022 when I planned and executed summer camps at St. Mark’s United Church. There, I was responsible for organizing games, crafts, and meals for more than 40 children, as well as coordinating and supervising over 20 teenage volunteers.", 
       "I further developed my skills at the Uxbridge Historical Centre during the summers of 2023 and 2024, where I ran children’s day camps, led elementary school field trips, and gave kid-focused guided tours of the site. During this time, I learned how to build museum programming specifically for young learners and how to keep children of various ages engaged.",
        "In the summer of 2025, I worked at St. Andrew’s Community Food Bank, where I ran “kids clubs” and “youth groups” for children and teens in the foodbank community. This role involved budgeting, sourcing materials, and planning a variety of activities tailored to different age groups.",
        "Since the age of 16, I have also been involved with the Ontario Youth Parliament, and for the last four years I have served on their Board of Directors as Director of Youth Programs. In this position, I helped plan and deliver multiple multi-day youth conferences each year, including booking transportation and venues, planning programs, organizing meals, and managing registration.",
        "I have also been a volunteer at many other youth events like at Hutchinson House in Peterborough or the Lynde House in Whitby.",
        "Through these roles, I have developed strong skills in program development, youth engagement, event planning.",
    ],
    images: [
     {
        src:"/img/programming/children/vbcstmarks.jpg",
        caption: "",
      }, 
      {
        src:"/img/programming/children/summercampuhc.jpg",
        caption: "",
      }, 
      {
        src:"/img/programming/children/zoo2youuhc.jpg",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub.jpg",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub2.jpg",
        caption: "",
      },
      {
        src:"/img/programming/children/kidsclub3.jpg",
        caption: "",
      },
      {
        src:"/img/programming/children/lemonadefoodbank.jpg",
        caption: "",
      },  
    ],
  },];

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
   
      </main>
    </>
  );
}
