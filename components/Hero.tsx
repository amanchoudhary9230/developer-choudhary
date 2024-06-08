"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import ShimmerBtn from "./ui/ShimmerBtn";
import { MdWifiCalling3 } from "react-icons/md";
import { FlipWords } from "./ui/FlipWord";

const Hero = () => {
  return (
    <div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-32 md:-left-20 h-[100dvh]"
          fill="#caf0f8"
        />
        <Spotlight
          className="top-10 left-full h-[80dvh] w-[50dvw]"
          fill="#00b4d8"
        />
        <Spotlight
          className="top-28 left-80 h-[80dvh] w-[50dvw]"
          fill="#264653"
        />
      </div>
      <div className="h-[100dvh] w-full dark:bg-black bg-white  dark:bg-grid-[white]/[0.03] bg-grid-black/[0.2] absolute top-0 right-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89dvw] md:max-w-2xl lg:max-w-[60dvw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Introduction
          </h2>
          <h1 className="text-center md:text-[35px] text-[30px] my-4">
            <span className="dark:text-white text-black font-bold">
              Hey, I'm{" "}
              <span className="text-[#eddcd2] bg-gradient-to-b from-[#005f73] to-[#8d99ae] text-transparent bg-clip-text">
                Aman Choudhary
              </span>
              , from the vibrant and diverse land of{" "}
              <FlipWords words={["India", "Rajasthan"]} duration={5000} />
            </span>
          </h1>
          <p className="text-center md:tracking-wider text-blue-100 mb-6 text-sm md:text-lg lg:text-xl">
            I specialize as a full stack website developer
          </p>
          <a href="#contact">
            <ShimmerBtn
              value={"Hire Me"}
              icon={<MdWifiCalling3 />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
