import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/wavy-background";
import { FlipWords } from "@/components/flip-words";

export default function Ispiring() {
  const words = ["Better", "Cute", "Amazing", "Modern"];
  return (
    <div className="overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto flex justify-center items-center flex-col overflow-hidden  pb-40">
        {/* <p className=" text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Hero waves are cool
        </p> */}
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
