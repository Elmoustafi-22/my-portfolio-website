"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { hankenGrotesk, poppins } from "@/styles/fonts";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.02 });
  

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container pt-12 mt-24 h-[90vh] mb-0"
    >
      <div className="flex flex-col gap-8 text-center">
        <motion.h1
          className={`text-center text-7xl font-bold text-gray-700 dark:text-darkText ${poppins.className}`}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I am{" "}
          <span className="text-sky-600 dark:text-darkTextDeep">Mustopha.</span>
        </motion.h1>
        <motion.h2
          className="text-center text-4xl font-bold text-gray-600 dark:text-darkText"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A Software Engineer.
        </motion.h2>
        <motion.p
          className={`max-w-2xl mx-auto text-[24pz] text-gray-600 dark:text-darkTextLight ${hankenGrotesk.className}`}
          initial={{ opacity: 0, x: 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Web App Developer skilled in React, Next.js, TypeScript, and Tailwind
          CSS. Passionate about building responsive and user-focused web
          applications. Experienced with modern front-end practices such as
          state management, API integration, and performance optimization using
          the latest technologies like Next.js App Router and React Hooks.
        </motion.p>
        <motion.div
          className=" flex items-center justify-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            className={`relative bg-white px-8 py-5 border-[1.5px] cursor-pointer border-sky-600 dark:border-darkTextDeep overflow-hidden group dark:bg-darkBg ${hankenGrotesk.className}`}
            href="https://drive.google.com/file/d/1_m2YQpUpusE_Bcoz-zHWfE28WuU3N7Ku/view?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            <span className="relative text-[18px] font-semibold text-sky-600 dark:text-darkText z-10 group-hover:text-white dark:group-hover:text-darkBgDeep transition-colors duration-300">
              resume
            </span>
            <div className="absolute inset-0 w-full bg-sky-600 dark:bg-darkTextDeep -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in"></div>
          </a>
          {[
            { href: "https://github.com/Elmoustafi-22", icon: "github" },
            { href: "https://linkedin.com/in/elmoustafi", icon: "linkedin" },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-600 dark:after:bg-darkTextDeep hover:after:w-full pb-2 transition-all after:duration-300 group"
              aria-label={icon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="text-gray-600 dark:text-darkText size-8 hover:text-sky-600 dark:group-hover:text-darkTextDeep duration-300 transition"
              >
                {icon === "github" ? (
                  <path
                    fill="currentColor"
                    d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0"
                  />
                ) : (
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
