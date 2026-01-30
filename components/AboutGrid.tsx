import { cn } from "@/lib/utils";
import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { img } from "motion/react-client";

export function AboutGrid() {
  return (
    <section id="about" className="py-5">
      <BentoGrid className="max-w-5xl px-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
const items = [
  {
    id:1,
    title: "My tech stack",
    description: "I constantly try to improve",
    img: "/earthb1.svg",
    className: "md:col-span-2",
  },
  {
    id:2,
    title: "Product Thinking",
    description: "I build with users, metrics and business goal in mind to achieve scalable, accessible and pixel perfect products.",
    img: "/pixelPerfect.svg",
    className: "md:col-span-1",
  },
  {
    id:3,
    title: "Performance and Optimization",
    description: "Optimized builds, clean architecture, and maintainable codebases are my priorities.",
    img: "/codeBase.png",
    className: "md:col-span-1",
  },
 {id: 4,
  title: "My focus",
  description: [
    "Clean, maintainable codebases",
    "Attention to detail in UI and UX",
    "Thoughtful API and state management",
    "Clear communication and ownership",
    "Focus on long-term quality"
  ],
  img: "/earthb1.svg",
  className: "md:col-span-2",
},

];
