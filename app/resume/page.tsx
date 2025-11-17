import { Navbar } from "../Navbar";

export default function ResumePage() {
  return (
    <>
      <Navbar currentPageHref="/resume" />
      <main className="h-svh bg-[#552500]">
        <embed
          src="/ErinRalph.pdf"
          className="p-4 w-full h-full"
          type="application/pdf"
        />
      </main>
    </>
  );
}
