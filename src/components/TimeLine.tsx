"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    title: "Robotics class and RobotC",
    date: "August 2014",
    description:
      "I started my programming journey with Robotics class and RobotC. My code was horrible—no variables, no functions, just vibes. However, I loved the idea of just typing some stuff and seeing something move. This was the start of my love for programming",
  },
  {
    title: "First Computer Science Class",
    date: "August 2016",
    description:
      "I was still in highschool at the time, and our school finally offered a com sci class in my last year. This is where I finally learned about functions, variables, for loops, recursion, OOP, etc. Wish I knew this while doing robotics. This class was self-taught, and because of that, I was able to learn at my own pace, and I was able to learn a lot of things that I wouldn't have learned otherwise.",
  },
  {
    title: "Going to College",
    date: "August 2016",
    description:
      "Due to how much I enjoyed robotics, I decided to go to college for Computer Science. I wasn't sure exactly what I wanted to do at the time, but I knew I like programming, and I knew I would like to do it for a career. It was at college that I really fell in love with computer science. I loved abstraction, encapsulation, learning how everything worked at a low level, and believe it or now my algorithms class—it was hard as hell, but rewarding. I also got some internships through the Department of Technology, which is where I learned the first bits of web development.",
  },
  {
    title: "Graduating",
    date: "December 2021",
    description:
      "By the time I graduated, I knew I wanted to work on full-stack development. I really liked the idea of being able to create something from scratch, seeing some pretty things on the screen, and being able to work on all the things that make an application an application. I also love learning, so it seemed like the best spot to learn as much as possible. And full-stack is so versatile that I could easily pivot into more niche things as I learn.",
  },
  {
    title: "First Job—Interclypse",
    date: "January 2022",
    description:
      "WOOT! I got my first job! I was so excited to start working on real projects and learn from other people. I also got to work with some really cool technologies like React, React Native, MUI, Redux, Spring Boot, and MongoDB. I also got to work with some really cool people, and I learned a lot from them. Jin, Derek, Elijah, Matt—If you're (for some reason) reading this, I'm so grateful for the time I got to spend with you all. I learned a lot from you all, and I'm so grateful for the time I got to spend with you all. I have ya'll to thank for where I am today.",
  },
  {
    title: "Where I am now—Booz Allen Hamilton",
    date: "September 2022",
    description:
      "As hard as it was to leave Interclypse, I had the opportunity to work for Booz Allen Hamilton in their Civil Services division. It was too good to pass up, so I jumped on it. At Booz, I've been on the Department of Labor's Foreign Labor Application Gateway (FLAG) project, which is a web application that allows users to apply for foreign labor certifications. It felt great to work on something that is so important and life-changing for so many people. Plus, I got to level up my skills even more with ReactJS, Next.js, GraphQL, Express, Redis, Kafka, Azure, Docker, and more.",
  },
  {
    title: "What's Next?",
    date: "2025",
    description:
      "It's no secret that generative AI will transform what I do, and how I develop. I'm still weary about having AI do the work for me, as I still love learning and building things from scratch. However, I'm excited to see what the future holds, and I'm excited to see what I can build with AI. Currently, I'm working on a project that uses AI to scrape websites and extract data to a user-desired format and location. I've also been looking for ways to get into the AI space, and I'm excited to see what the future holds.",
  },
];

function TimelineItem({ item, index }: { item: (typeof timelineItems)[number]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <Card
      className={cn(
        "relative mb-12 ml-10 max-w-md md:mr-0 md:ml-0 lg:max-w-md",
        isEven ? "md:mr-auto" : "md:ml-auto",
        index === timelineItems.length - 1 ? "mb-0" : ""
      )}
    >
      <CardHeader>
        <CardTitle className="w-full">{item.title}</CardTitle>
        <CardDescription>{item.date}</CardDescription>
      </CardHeader>
      <CardContent>{item.description}</CardContent>
    </Card>
  );
}

export function TimeLine() {
  const containerRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
    //offset: ["start start", "end end"],
  });

  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="mb-8">
      <div className="px-4 py-16 text-center text-foreground">
        <motion.h1
          className="mb-6 text-4xl font-light drop-shadow-lg md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Programming Journey
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          It&apos;s a long story... (not really)
        </motion.p>
      </div>
      <div className="relative mx-auto max-w-5xl py-16 md:py-24" ref={containerRef}>
        <div className="absolute top-16 bottom-16 left-4 w-1 rounded-full bg-border sm:left-8 md:left-1/2">
          <motion.div
            className="absolute top-0 left-0 w-full origin-top rounded-full bg-primary"
            style={{ height: progressHeight }}
          />
        </div>
        <div className="relative">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[index] = el;
              }}
            >
              <TimelineItem item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
