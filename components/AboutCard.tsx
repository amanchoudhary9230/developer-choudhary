"use client";
/* eslint-disable */
import { cn } from "../lib/utils";
import { GridGlob } from "./ui/GridGlob";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../data/confetti.json";
import ShimmerBtn from "./ui/ShimmerBtn";
import { IoCopyOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";

export const AboutCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[8rem] grid-cols-1 md:grid-cols-3 md:gap-7 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const AboutCardItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText("amanjaat7668@gmail.com")
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          fallbackCopyTextToClipboard("amanjaat7668@gmail.com");
        });
    } else {
      fallbackCopyTextToClipboard("amanjaat7668@gmail.com");
    }
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    document.body.removeChild(textArea);
  };
  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
        className
      )}
    >
      <div
        className={`${
          id === 6 && "flex justify-center items-center h-full w-full"
        }`}
      >
        <div className="h-full w-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
              loading="lazy"
            />
          )}
        </div>
        {spareImg && (
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && "w-full opacity-80"
            }`}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={"object-cover, object-center w-full h-full"}
                loading="lazy"
              />
            )}
          </div>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 w-full flex flex-col px-5 p-4 lg:p-8"
          )}
        >
          <div className="font-sans font-extralight text-[#42424a] text-xs dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold lg:text-2xl max-w-96 z-10">
            {title}
          </div>
          {id === 2 && <GridGlob />}
          {id === 3 && (
            <div className="flex gap-1 md:gap-5 w-fit absolute right-2">
              <div className="flex flex-col gap-2 md:gap-3 overflow-auto">
                {[
                  "React.js",
                  "Next.js",
                  "TailwindCss",
                  "Express.js",
                  "TypeScript",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="py-1 lg:py-2 px-1 text-xs lg:text-base dark:text-[#86898d] text-[#424445de] opacity-50 lg:opacity-100 text-center rounded-lg dark:bg-[#42444651] bg-[#b0b5bc51]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="relative mt-12">
              <div className="absolute w-full -bottom-5">
                {copied && (
                  <Lottie
                    options={{
                      loop: 0,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                )}
                <ShimmerBtn
                  value={copied ? "Email Copied" : "Copy my Email"}
                  icon={copied ? <LuCopyCheck /> : <IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
