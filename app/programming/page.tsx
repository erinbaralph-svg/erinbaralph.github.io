import { Navbar } from "../Navbar";
import { Showcase, type ShowcaseData } from "@/components/Showcase";
import NotFound from "../not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming - Erin Ralph",
};

const programming: ShowcaseData[] = [
  {
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
        src: "/img/programming/children/vbcstmarks.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/summercampuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/zoo2youuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub2.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub3.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/lemonadefoodbank.avif",
        caption: "",
      },
    ],
  },  
  {
    title: "Adult Programming",
    date: "2022-2025",
    location: "",
    descriptionParagraphs: [
      "I also have extensive experience delivering adult programming. At the Uxbridge Historical Centre, I led workshops such as paint nights and linocut printmaking sessions, and assisted with the planning, marketing, and day-of delivery of these events. At St. Andrew's Community Foodbank, I planned, budgeted, and facilitated weekly drop-in programs providing refreshments for food bank clients, as well as volunteer-focused events including charity book sales, Canada Day celebrations, and carnival-style activities. More recently, I have supported a range of adult programming at the Lynde House Museum, including Christmas tours, Victorian teas, and regular guided tours.",
    ],
    images: [
      {
        src: "/img/programming/children/vbcstmarks.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/summercampuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/zoo2youuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub2.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub3.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/lemonadefoodbank.avif",
        caption: "",
      },
    ],
  }, 
  {
    title: "Large Events",
    date: "2022-2025",
    location: "",
    descriptionParagraphs: [
      "Throughout my career to date, I have been involved in budgeting, planning, and delivering large-scale events for audiences of 100+ attendees. For several years, I served on the Board of Directors of the Ontario Youth Parliament as Director of Youth Programs, where I helped plan annual four-day conferences attended by hundreds of participants. My responsibilities included program development, event budgeting, and booking hotels and accommodations. At the Uxbridge Historical Centre, I supported the implementation of large public events such as Kite Day and the Lucy Maud Montgomery Teas, as well as event setup for weddings and private functions. Additionally, at St. Andrew’s Community Food Bank, I budgeted for, procured supplies for, planned, and delivered two large “Summer Fun Fest” events serving both the wider community and food bank patrons.",
    ],
    images: [
      {
        src: "/img/programming/children/vbcstmarks.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/summercampuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/zoo2youuhc.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub2.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/kidsclub3.avif",
        caption: "",
      },
      {
        src: "/img/programming/children/lemonadefoodbank.avif",
        caption: "",
      },
    ],
  },
];

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
