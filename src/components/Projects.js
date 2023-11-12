import { ProjectData } from '../data/projects'
import Link from 'next/link';

function Project({ name, date, tools, tagline, description, tag, links }) {
  return (
    <div className="px-2 md:px-8 py-4" id={name.replaceAll(" ", "-")}>
      {/* Name and Tag */}
      <div className="flex">
        <p className="text-3xl font-semibold max-w-max dark:text-gray-200">
          {name}
        </p>
      </div>

      {/* Tagline and Date */}
      <p className="text-xl py-1 dark:text-gray-300">
        {tagline} <b>•</b> {date.split(" ")[1]}
      </p>
    </div>
  )
}

export function Projects() {
  return (
    <div>
      <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth">
        <div className="mx-auto w-full max-w-7xl px-4 pb-52 md:px-8">
          <div className="mt-6">
            <div className="grid mt-4 gap-4">
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
      </div>
    </div>
  )
}