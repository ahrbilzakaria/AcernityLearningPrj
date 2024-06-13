import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/wavy-background";
import { FlipWords } from "@/components/flip-words";

export default function Inspiring() {
  const words = ["Better", "Cute", "Amazing", "Modern"];
  return (
    <div className="overflow-hidden h-[80%]  ">
      <WavyBackground className="max-w-4xl mx-auto max-h-screen flex justify-center items-center flex-col overflow-hidden   pb-40">
        <div className="flex items-center text-6xl font-bold">
          Build
          <FlipWords words={words} />
          Projects with us
        </div>

        <p className="  text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          All you need in one place
        </p>
      </WavyBackground>
    </div>
  );
}
