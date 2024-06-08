"use client";
/* eslint-disable */
import React from "react";
import { ClientCards } from "./ui/ClientCards";
import { companies, testimonials } from "../data";

const Clients = () => {
  return (
    <div id="clients">
      <h1 className="heading">
        Kind words from{" "}
        <span className="text-[#eddcd2] bg-gradient-to-b from-[#005f73] to-[#8d99ae] text-transparent bg-clip-text">
          Satisfied Clients
        </span>
      </h1>
      <div className="flex flex-col items-center">
        <ClientCards items={testimonials} direction="right" speed="slow" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} alt={name} className="md:w-10 w-5" />
            <img src={nameImg} alt={name} className="md:w-24 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
