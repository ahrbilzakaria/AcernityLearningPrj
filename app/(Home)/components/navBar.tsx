import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function NavBar() {
  const links = [
    {
      name: "LinkedIn",
      link: "/",
      icons: FaLinkedin,
    },
    {
      name: "Instagram",
      link: "/",
      icons: FaSquareInstagram,
    },
    {
      name: "Github",
      link: "/",
      icons: FaGithub,
    },
    {
      name: "Email",
      link: "/",
      icons: IoMail,
    },
  ];
  return (
    <div className="h-[20vh] pt-6 flex justify-between align-middle">
      <h1 className="font-bold text-2xl">
        A<span className="font-light">cernityPrj</span>
      </h1>
      <div className="flex align-middle gap-2">
        {links.map((link, index) => {
          const Icon = link.icons;
          return (
            <Link href={link.link} key={index} aria-label={link.name}>
              <Icon size={28} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
