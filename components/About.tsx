"use client";
import React from "react";
import { AboutCard, AboutCardItem } from "./AboutCard";
import { gridItems } from "../data";

const About = () => {
  return (
    <section id="about" className="py-10">
      <AboutCard>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <AboutCardItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </AboutCard>
    </section>
  );
};

export default About;
