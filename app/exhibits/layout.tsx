import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibits - Erin Ralph",
};

export default async function ExhibitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
