import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404: Not found",
};

export default function NotFound() {
  return (
    <main className="absolute inset-0 h-svh w-screen bg-[url(/img/wallpaper.jpg)] bg-cover bg-no-repeat bg-fit bg-fixed">
      <div className="w-full h-full text-white bg-[#0000AC]/50 font-mono flex flex-col justify-center items-center">
        <h1 className="bg-white text-[#0000AC] px-2 py-1 mb-4">
          404: page not found :(
        </h1>
        <p className="mb-8 max-w-[45ch] text-center">
          This page does not exist or is being updated. Click to go back to
          home.
        </p>
        <Link
          href="/"
          className="bg-white text-[#0000AC] px-4 py-3 underline shadow-[8px_8px_0px_0px_rgba(0,_0,_0,_0.5)]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
