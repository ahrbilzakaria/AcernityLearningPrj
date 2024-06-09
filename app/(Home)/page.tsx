import React from "react";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import { BackgroundBeams } from "./components/background-beams";
import Services from "./components/services";
import Ispiring from "./components/ispiring";
export default function page() {
  return (
    <div className="min-h-screen ">
      <div className="relative">
        <div className="w-[90%] h-screen mx-auto">
          <NavBar />
          <Header />
        </div>
        <BackgroundBeams className=" absolute -z-10 " />
      </div>
      <div className="w-[90%] h-screen mx-auto overflow-hidden ">
        <Services />
        <Ispiring />
      </div>
    </div>
  );
}
