import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Josh Goldsmith",
  description: "Projects Josh Goldsmith",
};

export default function ProjectsPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <h1>Projects Page</h1>
    </div>
  );
}
