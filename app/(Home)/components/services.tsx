import { HoverEffect } from "@/components/card-hover-effect";
import { TypewriterEffect } from "@/components/typewriter-effect";
import React from "react";

export default function Services() {
  const words = [
    {
      text: "Discover",
    },
    {
      text: "Our",
    },
    {
      text: "Services.",
      className: "text-blue-400 dark:text-blue-500",
    },
  ];
  const projects = [
    {
      title: "Web Development",
      description: "Creating responsive and modern web applications",
      link: "https://stripe.com",
      imageUrl: "/imgs/img2.jpg",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly and aesthetically pleasing interfaces",
      link: "https://netflix.com",
      imageUrl: "/imgs/img1.jpg",
    },
    {
      title: "SEO Optimization",
      description: "Improving your website's visibility on search engines",
      link: "https://google.com",
      imageUrl: "/imgs/img1.jpg",
    },
  ];
  return (
    <div>
      <TypewriterEffect words={words} />
      <HoverEffect items={projects} />
    </div>
  );
}
