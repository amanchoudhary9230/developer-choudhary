"use client";
import Hero from "../components/Hero";
import { Navbar } from "../components/ui/Navbar";
import { navItems } from "../data/navItems";
import RecentProjects from "../components/RecentProjects";
import About from "../components/About";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import { Approach } from "../components/Approach";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

// type Coords = {
//   x: number;
//   y: number;
// };

export default function Home() {
  // const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });
  // const animationTimeoutId = useRef<NodeJS.Timeout | null>(null);

  // useEffect(() => {
  //   // Create 50 div elements with the class 'circle'
  //   for (let i = 0; i < 50; i++) {
  //     const div = document.createElement("div");
  //     div.className = "circle bg-gradient-to-b from-[#005f73] to-[#8d99ae]";
  //     document.body.appendChild(div);
  //   }

  //   const handleMouseMove = (e: MouseEvent) => {
  //     setCoords({
  //       x: e.clientX + window.scrollX,
  //       y: e.clientY + window.scrollY,
  //     });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   const circles = document.querySelectorAll<HTMLDivElement>(".circle");
  //   circles.forEach((circle) => {
  //     (circle as any).x = 0;
  //     (circle as any).y = 0;
  //   });

  //   return () => {
  //     const circles = document.querySelectorAll(".circle");
  //     circles.forEach((circle) => circle.remove());
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const mouseMoveAnimation = () => {
  //     let x = coords.x;
  //     let y = coords.y;
  //     const circles = document.querySelectorAll<HTMLDivElement>(".circle");

  //     circles.forEach((circle, index) => {
  //       circle.style.left = `${x - 2}px`;
  //       circle.style.top = `${y - 2}px`;

  //       circle.style.scale = `${(circles.length - index) / 10}`;
  //       // Assign custom properties
  //       (circle as any).x = x;
  //       (circle as any).y = y;

  //       const nextCircle = circles[index + 1] || circles[0];
  //       x += ((nextCircle as any).x - x) * 0.3;
  //       y += ((nextCircle as any).y - y) * 0.3;
  //     });

  //     // Clear any existing timeout
  //     if (animationTimeoutId.current) {
  //       clearTimeout(animationTimeoutId.current);
  //     }

  //     // Set a new timeout
  //     animationTimeoutId.current = setTimeout(() => {
  //       mouseMoveAnimation();
  //     }, 10);
  //   };
  //   mouseMoveAnimation();
  // }, [coords]);

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10 w-[100dvw]">
      <div className="w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        {/* <Clients /> */}
        {/* <Experience /> */}
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
