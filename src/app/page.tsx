import Image from "next/image";

export default function LandingPage() {
  return (
    <section className="hidden sm:grid sm:h-[calc(100vh-5rem)] sm:grid-cols-2 sm:px-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center font-primary text-xl tracking-wide text-balance text-primary">Hello, my name is</p>
        <h1 className="text-center font-primary text-6xl font-bold tracking-wide text-balance text-primary">
          Josh Goldsmith
        </h1>
        <p className="mb-6 text-center font-primary text-xl tracking-wide text-balance text-primary">
          Full-Stack Developer
        </p>
        <div className="flex w-full justify-center gap-16">
          <button className="rounded-md border border-primary px-4 py-2 font-primary text-primary transition-colors hover:bg-secondary">
            Resume
          </button>
          <button className="rounded-md border border-primary px-4 py-2 font-primary text-primary transition-colors hover:bg-secondary">
            Contact
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-128 w-128 rounded-full border-4 border-primary">
          <Image src="/me.png" alt="Pic of Josh" fill className="rounded-full" />
        </div>
      </div>
    </section>
  );
}
