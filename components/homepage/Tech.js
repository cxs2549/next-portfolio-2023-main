/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Josefin_Sans } from "@next/font/google"
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "700" })

const Tech = () => {
  return (
    <div className="p-4 mt-2 max-w-6xl mx-auto">
      <ul className=" flex flex-wrap gap-4 items-center justify-center">
        <li>
           <img src="./assets/technologies/html5.png" alt="" className="w-[4.2rem]" /> 
        </li>
        <li>
           <img src="./assets/technologies/css.png" alt="" className="w-12" /> 
        </li>
        <li>
           <img src="./assets/technologies/js.png" alt="" className="w-[4.5rem]" /> 
        </li>
        <li>
           <img src="./assets/technologies/node.png" alt="" className="w-[4.5rem]" /> 
        </li>
        <li>
           <img src="./assets/technologies/react.png" alt="" className="w-[3.5rem]" /> 
        </li>
        <li>
           <img src="./assets/technologies/next.png" alt="" className="w-[4rem] dark:invert" /> 
        </li>
        <li>
           <img src="./assets/technologies/tw.png" alt="" className="w-[4rem]" /> 
        </li>
      </ul>
    </div>
  )
}

export default Tech
