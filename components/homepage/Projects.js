/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import Image from "next/image"

const projects = [
  {
    id: 0,
    image: "/assets/projects/tiktok.png",
    link: "https://next-tiktok-clone-zeta.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 1,
    image: "/assets/projects/twitter.png",
    link: "https://next-twitter-clone-sandy.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 1,
    image: "/assets/projects/youtube.png",
    link: "https://next-youtube-clone-rho.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 2,
    image: "/assets/projects/instagram.png",
    link: "https://next-insta-clone-three.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 3,
    image: "/assets/projects/bigbeat.png",
    link: "https://bigbeat-next-sanity.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
      "/assets/technologies/sanity.png",
      "/assets/technologies/headless.png",
    ],
  },
  {
    id: 4,
    image: "/assets/projects/cakebar.png",
    link: "https://cakebar-next-sanity.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
      "/assets/technologies/sanity.png",
      "/assets/technologies/headless.png",
    ],
  },
]

const Projects = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <ul className="mt-8 flex flex-wrap gap-4 justify-center gap-y-6">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ul>
    </div>
  )
}

export default Projects

const Project = ({ link, image, technologies }) => {
  return (
    <li className=" rounded-lg overflow-hidden flex flex-col">
      <Link
        href={link}
        className="overflow-hidden"
        target="_blank max-h-[400px]"
      >
        <div className="">
          <Image
            src={image}
            className="rounded-xl mb-1 h-full w-full border border-gray-100"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </Link>
      <div className="flex items-center justify-between dark:bg-neutral-800 rounded-r-lg border border-gray-100 rounded-lg">
        <div className="p-4 items-center gap-3 flex justify-center w-full">
          {technologies.map((tech) => (
            <img
              key={tech.id}
              src={tech}
              className="w-8 object-contain"
              alt=""
            />
          ))}
        </div>
      </div>
    </li>
  )
}
