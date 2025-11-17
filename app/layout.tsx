import type { Metadata } from "next";
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
      <body className="bg-[url(/img/wallpaper.avif)] bg-cover bg-no-repeat bg-fit bg-fixed flex justify-center overflow-y-auto">
        <div className="w-full flex justify-center h-fit">
          <div className="rounded-lg border border-gray-300 shadow-lg flex flex-col w-full m-2 sm:m-8 overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
