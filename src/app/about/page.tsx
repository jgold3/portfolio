import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Josh Goldsmith",
  description: "About Josh Goldsmith",
};

export default function AboutPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>About Page</h1>
    </div>
  );
}
