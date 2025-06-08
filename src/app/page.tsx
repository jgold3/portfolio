import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="flex h-[calc(100svh-5rem)] flex-col-reverse justify-center sm:grid sm:h-[calc(100vh-5rem)] sm:grid-cols-2 sm:px-16">
      <div className="my-8 flex flex-col items-center justify-center">
        <p className="text-center font-primary text-xl tracking-wide text-balance text-primary">Hello, my name is</p>
        <h1 className="text-center font-primary text-6xl font-bold tracking-wide text-balance text-primary">
          Josh Goldsmith
        </h1>
        <p className="mb-6 text-center font-primary text-xl tracking-wide text-balance text-primary">
          Full-Stack Developer
        </p>
        <div className="flex w-full justify-center gap-16">
          <button className="rounded-md border border-primary px-4 py-2 font-primary text-primary transition-colors active:bg-secondary sm:hover:bg-secondary">
            Resume
          </button>
          <Link
            href="/contact"
            className="rounded-md border border-primary px-4 py-2 font-primary text-primary transition-colors active:bg-secondary sm:hover:bg-secondary"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:mt-0">
        <div className="relative h-64 w-64 rounded-full border-4 border-primary sm:h-128 sm:w-128">
          <Image src="/me.png" alt="Picture of Josh Goldsmith" fill priority className="rounded-full" />
        </div>
      </div>
    </section>
  );
}
