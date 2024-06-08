"use client";
import { workExperience } from "../data";
import React from "react";
import { ExperienceCard } from "./ui/ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="py-10">
      <h1 className="heading">
        My{" "}
        <span className="text-[#eddcd2] bg-gradient-to-b from-[#005f73] to-[#8d99ae] text-transparent bg-clip-text">
          Work Experience
        </span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <ExperienceCard
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius="1.75rem"
            className="flex-1 border border-neutral-200 dark:border-stone-700"
          >
            <div className="flex lg:flex-row flex-col lg:items-center px-2 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </ExperienceCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
