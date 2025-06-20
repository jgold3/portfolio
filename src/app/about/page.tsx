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
import { Card, CardContent, CardHeader, CardTitle, FlipCard, TimeLine } from "@/components";

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

export const metadata: Metadata = {
  title: "About | Josh Goldsmith",
  description: "A timeline of Josh Goldsmith's life",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="flex flex-col gap-8">
        <TimeLine />
        <Card>
          <CardHeader>
            <CardTitle>My Tech Stack</CardTitle>
          </CardHeader>
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
      </div>
    </div>
  );
}
