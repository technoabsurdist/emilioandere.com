import { ProjectData } from '../data/projects'
import Link from 'next/link';

function Project({ name, date, tools, tagline, description, tag, links }) {
  return (
    <div className="py-1" id={name.replaceAll(" ", "-")}>
      <div className="grid grid-cols-10 gap-4">
        <h1 className="col-span-4">{name}</h1>
        <p className="col-span-5 text-right">{tagline}</p>
        <p className="col-span-1">{date.split(" ")[1]}</p>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <div>
      <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth">
        <div className="mx-auto w-full max-w-3xl pb-52">
          {ProjectData.projectsList.map((project, index) => {
            return <Project
              key={index}
              name={project.name}
              date={project.date}
              tools={project.tools}
              tagline={project.tagline}
              description={project.description}
              tag={project.tag}
              website={project.website}
              github={project.github}
              links={project.links}
            />
          })}
        </div>
      </div>
    </div>
  )
}