import * as motion from "motion/react-client";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Josh Goldsmith",
  description: "Full-Stack Developer",
};

export default function LandingPage() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-[calc(100dvh-10rem)] flex-col-reverse justify-center sm:grid sm:grid-cols-2">
        <div className="my-8 flex flex-col items-center justify-center">
          <p className="text-center text-xl text-balance">Hello, my name is</p>
          <h1 className="text-center text-6xl font-bold text-balance">Josh Goldsmith</h1>
          <p className="mb-6 text-center text-xl text-balance">Full-Stack Developer</p>
          <div className="flex w-full justify-center gap-8">
            <Button size="lg" asChild animate>
              <a href="/GoldsmithResume.pdf" download>
                <Download />
                Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild animate>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-0">
          <div className="relative h-64 w-64 rounded-full border-4 border-primary sm:h-96 sm:w-96 md:h-128 md:w-128">
            <Image
              src="/me.png"
              alt="Picture of Josh Goldsmith"
              fill
              priority
              className="rounded-full object-cover drop-shadow-xl drop-shadow-primary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
