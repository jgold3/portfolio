import CsrfFormWrapper from "@/components/CsrfFormWrapper";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Josh Goldsmith",
  description: "Contact Josh Goldsmith",
};

export default function ContactPage() {
  return (
    <div className="flex h-[calc(100svh-5rem)] flex-col items-center justify-center p-8 sm:h-[calc(100vh-5rem)] sm:p-32">
      <CsrfFormWrapper>{(csrfToken) => <ContactForm csrfToken={csrfToken} />}</CsrfFormWrapper>
    </div>
  );
}
