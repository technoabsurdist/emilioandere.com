import { ProjectData } from '../data/projects'
import Link from 'next/link';

function Project({ name, date, tools, tagline, description, tag, links }) {
  return (
    <div className="py-1" id={name.replaceAll(" ", "-")}>
      <div className="grid grid-cols-10 gap-4 text-primary">
        <strong className="col-span-4 flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500">{name}</strong>
        <p className="col-span-5 text-right mr-2">{tagline}</p>
        <p className="col-span-1">{date.split(" ")[1]}</p>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth px-8">
      <div className="mx-auto w-full max-w-2xl mt-8 mb-32">
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
  )
}