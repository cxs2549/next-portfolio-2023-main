/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1111,
    image: "/assets/projects/tidal.png",
    link: "https://next-wave-music.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 1,
    image: "/assets/projects/youtube.png",
    link: "https://next-youtube-clone-v2.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 0,
    image: "/assets/projects/expedia.png",
    link: "https://expedia-clone-lime.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 0,
    image: "/assets/projects/spotify.png",
    link: "https://spotify-clone-khaki-xi.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
      "/assets/technologies/gpt.png",
    ],
  },
  {
    id: 0,
    image: "/assets/projects/airbnb.png",
    link: "https://airbnb-clone-mu-seven.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
      "/assets/technologies/gpt.png",
    ],
  },
  {
    id: 0,
    image: "/assets/projects/netflix.png",
    link: "https://netflix-clone-one-lac.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: 444,
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
    id: 2,
    image: "/assets/projects/instagram.png",
    link: "https://next-insta-clone-three.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
]

const Projects = () => {
  return (
    <div className="max-w-6xl p-4 mx-auto">
      <ul className="flex flex-wrap justify-center gap-4 mt-8 gap-y-6">
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
    <li className="flex flex-col overflow-hidden rounded-lg ">
      <Link href={link} className="overflow-hidden" target="_blank">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image}
            className="object-contain w-full h-full mb-1 rounded-xl"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </Link>
      <div className="flex items-center justify-between rounded-lg rounded-r-lg">
        <div className="flex items-center justify-center w-full gap-3 p-4">
          {technologies.map((tech) => (
            <img
              key={tech.id}
              src={tech}
              className={`w-8 object-contain ${
                tech.includes("next") && "dark:invert"
              }`}
              alt=""
            />
          ))}
        </div>
      </div>
    </li>
  )
}
