"use client";
import { socialMedia } from "../data";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-sm mb-2 max-sm:mx-[2px] md:font-normal flex flex-wrap-reverse justify-between sm:gap-10 gap-4 items-center font-light dark:text-stone-300 text-black-100">
      <span>Copyright &copy; 2024 Developer Choudhary</span>
      <span className="flex justify-center gap-4 items-center">
        {socialMedia.map((profile) => (
          <span
            key={profile.id}
            className="cursor-pointer flex justify-center bg-black dark:bg-transparent bg-clip-content h-[17px] w-[17px] items-center"
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
