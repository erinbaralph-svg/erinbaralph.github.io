import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const font = localFont({ src: "./fonts/w95fa.woff2" });

export const metadata: Metadata = {
  title: "Erin Ralph",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-[url(/img/wallpaper.avif)] bg-cover bg-no-repeat bg-fit bg-fixed flex justify-center overflow-y-auto`}
      >
        <div className="w-full flex justify-center h-fit">
          <div className="flex flex-col w-full m-2 sm:m-8 overflow-hidden bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-black border-r-black">
            <div className="border-2 border-t-[#DFDFDF] border-l-[#DFDFDF] border-b-[#7E7E7E] border-r-[#7E7E7E]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
