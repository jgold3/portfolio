import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Josh Goldsmith",
  description: "Contact Josh Goldsmith",
};

export default function ContactPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <h1>Contact Page</h1>
    </div>
  );
}
