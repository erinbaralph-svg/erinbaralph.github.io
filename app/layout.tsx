import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

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
      <body className="bg-[url(/img/wallpaper.jpg)] bg-cover bg-no-repeat bg-fit bg-fixed flex justify-center overflow-y-auto">
        <div className="w-full flex justify-center h-fit">
          <div className="rounded-lg border border-gray-300 shadow-lg flex flex-col w-full m-8 overflow-hidden">
            <div className="bg-gradient-to-b from-blue-300 to-blue-100 flex items-center gap-2 px-3 py-3 font-bold border-b border-gray-300 border-opacity-7">
              <Image
                src="/img/dish.png"
                alt="Satellite dish icon"
                width={32}
                height={32}
                className="w-8 h-8 pixelated"
              />
              <p>About Me</p>
            </div>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
