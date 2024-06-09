import ShimButton from "@/components/shimButton";
import React from "react";

export default function Header() {
  return (
    <div className="px-8 flex justify-between items-center">
      <div className="pt-4 flex flex-col gap-4">
        <div>
          <h2 className="font-bold text-6xl">
            Welcome to <span className="text-blue-500">AcernityPrj</span>
          </h2>
          <p className=" pt-1 font-light text-xl">
            We provide the best solutions for your business
          </p>
        </div>
        <ShimButton text="Get Started" />
      </div>
      <div>
        <img
          src="https://ui.aceternity.com/logo.png"
          alt="ecernityui"
          className="w-[400px] object-fit py-10"
        />
      </div>
    </div>
  );
}
