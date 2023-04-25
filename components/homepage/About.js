/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Josefin_Sans } from "@next/font/google"
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "700" })

const About = () => {
  return (
    <div className="">
      <div className="pb-4 sm:pt-9 relative max-w-6xl mx-auto xl:pt-12 sm:flex  ">
        <div className="p-4 pb-0 mx-auto max-w-6xl relative flex-1">
          <div>
            <div className="text-4xl 
            lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-[-1px]">
              <div className={josefinSans.className}>
                meet <br />{" "}
                <span className="relative -top-1">cliff sanchez</span>
              </div>
            </div>
            <p className="mt-2 text-slate-700 dark:text-neutral-300 max-w-sm lg:text-lg lg:max-w-xl">
              A talented web developer from Los Angeles with over 7 years of
              experience in JavaScript & 5 years of experience in React{" "} <span className="inline-block">
                <img className="w-6 translate-y-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
              </span>
              <br /> <br />
            </p>
          </div>
          <div className="flex items-center gap-2.5 mt-2">
            <a href="mailto:sanchez.cliff.86@gmail.com">
              <button className="bg-black text-white dark:invert rounded-full font-bold lg:text-base h-9 px-4 text-sm">
                Contact
              </button>
            </a>
            <Link href={`https://github.com/cxs2549`} target="_blank">
              <AiFillGithub size={30} />
            </Link>
            <Link
              href={`https://www.linkedin.com/in/cliff-sanchez-b75a201bb/`}
              target="_blank"
            >
              <AiFillLinkedin size={30} />
            </Link>
          </div>
        </div>
        <div className="sm:w-5/12 md:w-6/12 hidden">
          <img src="./assets/aboutbg.png" className="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
