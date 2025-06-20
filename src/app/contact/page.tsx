import { ContactForm } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Josh Goldsmith",
  description: "Contact Josh Goldsmith",
};

export default function ContactPage() {
  return (
    <div className="page-container">
      <div className="flex h-[calc(100dvh-10rem)] flex-col items-center justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
