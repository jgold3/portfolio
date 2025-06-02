import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Josh Goldsmith",
  description: "Experience Josh Goldsmith",
};

export default function ExperiencePage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <h1>Experience Page</h1>
    </div>
  );
}
