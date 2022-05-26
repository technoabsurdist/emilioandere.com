import Link from 'next/link';
import { ProjectData } from '../Data/ProjectData'

function Project({ name, date, tools, tagline, description, tag, website, github }) {
  return (
    <div className="px-2 md:px-8 py-4">
      {/* Name and Tag */}
      <div className="flex">
        <p className="text-3xl font-semibold max-w-max dark:text-gray-200">
          {name}
        </p>
        <div className="my-auto">
          <p className={`h-5 w-5 ml-3 rounded-sm ${tag == "Personal" ? "bg-indigo-400" : tag == "School" ? "bg-green-400" : "bg-red-400"}`}>
          </p>
        </div>
      </div>

      {/* Tagline and Date */}
      <p className="text-xl py-1 dark:text-gray-300">
        {tagline} <b>•</b> {date}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap pt-1">
        {tools.map((tool, index) => (
          <div key={index} className="border border-off-black rounded-full px-3 py-1 mr-2 mb-2 dark:border-gray-300">
            <p className="text-xs font-medium text-center text-off-black dark:text-gray-300">
              {tool}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-md text-gray-500 pb-4 dark:text-gray-400">
        {description}
      </p>

      {/* Website */}
      <Link href={website}>
        <a className={`bg-off-white border border-off-black hover:bg-off-black hover:text-off-white font-medium text-sm py-2 px-4 mr-2 rounded text-center dark:bg-off-black dark:text-off-white dark:hover:bg-off-white dark:border-off-white dark:hover:text-off-black ${website == "~" ? "hidden" : "inline-block"}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Website
        </a>
      </Link>

      {/* GitHub */}
      <Link href={github}>
        <a className={`bg-off-white border border-off-black hover:bg-off-black hover:text-off-white font-medium text-sm py-2 px-4 rounded text-center dark:bg-off-black dark:text-off-white dark:hover:bg-off-white dark:border-off-white dark:hover:text-off-black ${github == "~" ? "hidden" : "inline-block"}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Link>
    </div>
  )
}

export function Projects() {
  return (
    <div className="relative flex max-h-screen w-full flex-col overflow-y-auto">
      <div className="mx-auto w-full max-w-7xl px-4 pb-52 md:px-8">
        {/* Filtering */}
        {/* <p className="flex justify-center pt-2 sm:pt-0 pb-1 text-xl font-medium dark:text-gray-200">Filters</p> */}
        <div className="justify-center flex pt-4 lg:pt-0">
          <button 
            id="personal" className="p-2 sm:px-4 sm:py-2 text-sm font-medium text-gray-100 rounded bg-indigo-400 focus:outline-none border-2 border-indigo-400"
            // onclick={toggleProjects(this.id)}
          >
            Personal
          </button>
          <button id="school" className="p-2 sm:px-4 sm:py-2 mx-6 text-sm font-medium text-gray-100 rounded bg-green-500 focus:outline-none border-2 border-green-500"
            // onclick={toggleProjects(this.id)}
          >
            School
          </button>
          <button id="other" className="p-2 sm:px-4 sm:py-2 text-sm font-medium text-gray-100 rounded bg-red-400 focus:outline-none border-2 border-red-400"
            // onclick={toggleProjects(this.id)}
          >
            Hackathon
          </button>
        </div>

        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-4">
          {ProjectData.projectsList.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              date={project.date}
              tools={project.tools}
              tagline={project.tagline}
              description={project.description}
              tag={project.tag}
              website={project.website}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  )
}