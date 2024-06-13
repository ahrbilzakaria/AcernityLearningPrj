import React from "react";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import { BackgroundBeams } from "./components/background-beams";
import Services from "./components/services";
import Inspiring from "./components/inspiring";
import { Projects } from "./components/Projects";
import { WobbleCardDemo } from "./components/bento";

export default function page() {
  return (
    <div>
      <div className="relative">
        <div className="w-[90%] h-screen mx-auto">
          <NavBar />
          <Header />
        </div>
        <BackgroundBeams className=" absolute -z-10 " />
      </div>
      <div className="w-[90%] mx-auto  ">
        <Services />
        <Inspiring />
        <Projects />

        <WobbleCardDemo />
      </div>{" "}
      <p className="text-center my-10">Made by zeus</p>
    </div>
  );
}
