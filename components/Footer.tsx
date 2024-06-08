"use client";
import { socialMedia } from "../data";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 w-full text-sm mb-2 md:font-normal flex flex-wrap-reverse justify-between sm:gap-10 gap-4 items-center font-light text-stone-300">
      <span>Copyright &copy; 2024 Developer Choudhary</span>
      <span className="flex justify-center gap-4 items-center">
        {socialMedia.map((profile) => (
          <span
            key={profile.id}
            className="cursor-pointer flex justify-center items-center"
            onClick={() => window.open(profile.src, "_blank")}
          >
            <Image
              src={profile.img}
              alt={profile.img}
              width={16}
              height={16}
              className="opacity-80"
            />
          </span>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
