'use client'
import React from "react";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
  <>
   <HeroHighlight>
    <Navbar/>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hello I am Adesh a  &#44; 
        <div className="p-5" >
        <Highlight className="text-black dark:text-white">
          Frontend Devloper.
        </Highlight>
        </div>
      </motion.h1>
   </HeroHighlight>
  <Projects/>
  </>
  );
}
