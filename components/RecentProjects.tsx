"use client";
/* eslint-disable */
import { projects } from "../data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-[#eddcd2] bg-gradient-to-b dark:from-[#006d77] from-[#219ebc] dark:to-[#4a4e69] to-[#3d405b] text-transparent bg-clip-text">
          Recent Projects
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-8 mt-10 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32.5rem] flex items-center justify-center sm:w-[35.6rem] w-[80dvw]"
          >
            <PinContainer title={link} href={link} className="bg-white dark:bg-black">
              <div className="flex items-center justify-center relative sm:w-[35.6rem] w-[80dvw] overflow-hidden h-[30dvh] sm:h-[40dvh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 rotate-3 p-2"
                />
              </div>
              <h1 className="font-bold lg:text-xl sm:mb-2 mb-1 dark:text-neutral-300 text-black sm:text-base text-sm line-clamp-1">
                {title}
              </h1>
              <p className="sm:text-sm lg:font-normal dark:text-neutral-400 text-neutral-700 font-light text-xs line-clamp-2">
                {des}
              </p>
              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, idx) => (
                    <div
                      id={`${idx}`}
                      style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                      className="border border-white/[0.2] dark:bg-neutral-950 bg-neutral-600 rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img
                        src={icon}
                        alt={icon}
                        className="p-2 h-full w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
