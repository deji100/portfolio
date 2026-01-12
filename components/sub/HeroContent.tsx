"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-5 md:px-20 mt-40 w-full z-[20] overflow-hidden"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-between md:justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          {/* <h1 className="Welcome-text text-[13px]">Fullstack Developers</h1> */}
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Delivering
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              top-notch{" "}
            </span>
            project experiences
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md md:text-lg text-gray-400 my-5 w-full md:max-w-[650px]"
        >
          We are an established enterprise with a broad focus across digital
          solutions, technology, and innovation. Backed by a strong portfolio of
          delivered projects and a diverse, cross-functional skill set, we
          operate beyond traditional website and software development.
          <br />
          <br />
          Our expertise spans strategy, design, engineering, and scalable
          digital systems—enabling us to solve complex challenges and deliver
          impactful, high-quality outcomes. Explore our work to discover the
          depth of our capabilities and the standards that define us.{" "}
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link
            href="https://www.linkedin.com/in/faruq-adeyemi-5b7a0a1a0/"
            target="_blank"
            className="px-2 py-2"
          >
            Learn More!
          </Link>
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden  md:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
