import { Metadata } from "next";
import { RiNextjsLine } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import {
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiSpringboot,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { Card, CardContent, FlipCard, TimeLine } from "@/components";
import * as motion from "motion/react-client";

const techStack = [
  {
    name: "ReactJS",
    icon: <SiReact className="text-7xl" aria-label="ReactJS" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine className="text-7xl" aria-label="Next.js framework" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-7xl" aria-label="TailwindCSS" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-7xl" aria-label="Express framework" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-7xl" aria-label="Spring Boot" />,
  },
  {
    name: "Apache Kafka",
    icon: <SiApachekafka className="text-7xl" aria-label="Apache Kafka" />,
  },
  {
    name: "Redis",
    icon: <DiRedis className="text-7xl" aria-label="Redis" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-7xl" aria-label="MongoDB" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-7xl" aria-label="PostgreSQL" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-7xl" aria-label="MySQL" />,
  },
];

function TechStack() {
  return (
    <>
      <div className="px-4 pt-16 pb-8 text-center text-foreground">
        <motion.h1
          className="mb-6 text-4xl font-light drop-shadow-lg md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Tech Stack
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          This is what I&pos;m comfortable building with. I&pos;m always looking to learn new things, so if you see
          something here that you think I should know, let me know!
        </motion.p>
      </div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Card className="w-5xl">
          <CardContent>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
              {techStack.map(({ name, icon }) => (
                <div key={name} className="flex items-center justify-center">
                  <FlipCard key={name} front={icon} back={name} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

export const metadata: Metadata = {
  title: "About | Josh Goldsmith",
  description: "A timeline of Josh Goldsmith's life",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="mb-16 flex min-h-[calc(100dvh-10rem)] flex-col gap-16">
        <TechStack />
      </div>
      <TimeLine />
    </div>
  );
}
