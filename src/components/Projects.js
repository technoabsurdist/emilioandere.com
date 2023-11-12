import { useState } from 'react';
import Link from 'next/link';
import { ProjectData } from '../data/ProjectData'

function Project({ name, date, tools, tagline, description, tag, links }) {
  return (
    <div className="px-2 md:px-8 py-4" id={name.replaceAll(" ", "-")}>
      {/* Name and Tag */}
      <div className="flex">
        <p className="text-3xl font-semibold max-w-max dark:text-gray-200">
          {name}
        </p>
        <div className="my-auto">
          <p className={`h-5 w-5 ml-3 rounded-sm ${tag == "Personal" ? "bg-sky-500" : tag == "School" ? "bg-violet-500" : tag == "Work" ? "bg-rose-500" : "bg-emerald-500"}`}>
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
      <p className="text-md text-gray-600 pb-4 dark:text-gray-400">
        {description}
      </p>

      {/* Links */}
      <div className="flex flex-wrap pt-1">
        {Object.entries(links).map(([key, value], index) => (
          <div key={index}>
            <Link href={value}>
              <a className={"bg-off-white border border-off-black hover:bg-off-black hover:text-off-white font-medium text-sm py-2 px-3 mr-2 rounded text-center dark:bg-off-black dark:text-off-white dark:hover:bg-off-white dark:border-off-white dark:hover:text-off-black"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {key}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

function generateButton(key, label, color) {
  return (
    <button
      key={key}
      className={`p-2 sm:px-4 sm:py-2 mx-6 text-sm font-medium rounded ${filter[key] ? `bg-${color}-500 border-${color}-500 text-gray-100` : 'bg-inherit bg-off-white border border-off-black dark:border-off-white text-off-black dark:text-off-white'} focus:outline-none border-2`}
      onClick={() => handleFilter(key)}
    >
      {label}
    </button>
  );
}

export function Projects() {
  const [filter, setFilter] = useState({
    "School": true,
    "Personal": true,
    "Work": true,
    "Research": true,
  })

  const handleFilter = (filterKey) => {
    // Toggle the state of the clicked filter
    setFilter((prevState) => ({
      ...prevState,
      [filterKey]: !prevState[filterKey],
    }));
  };

  const filters = [
    { key: 'Work', color: 'rose' },
    { key: 'Research', color: 'emerald' },
    { key: 'Personal', color: 'sky' },
    { key: 'School', color: 'violet' },
  ];

  return (
    <div>
      <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth">
        <div className="mx-auto w-full max-w-7xl px-4 pb-52 md:px-8">
          {/* Filtering */}
          <div className="flex justify-center mt-4">
            <div className="bg-neutral-50 dark:bg-off-black border border-gray-200 dark:border-none rounded-2xl shadow-xl p-4">
              <p className="text-xl font-medium text-center dark:text-gray-200 mb-2">Filters</p>
              <div className="flex justify-center pt-2">
                {filters.map(filterItem => (
                  <button
                    key={filterItem.key}
                    className={`p-2 sm:px-4 sm:py-2 mx-2 text-sm font-medium rounded border-2 ${filter[filterItem.key] ? `bg-${filterItem.color}-500 border-transparent text-gray-100` : 'bg-inherit bg-off-white border border-off-black dark:border-off-white text-off-black dark:text-off-white'}`}
                    onClick={() => handleFilter(filterItem.key)}
                  >
                    {filterItem.key}
                  </button>
                ))}
              </div>
              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">Try deselecting all filters!</p>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-6">
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-4">
              {ProjectData.projectsList.map((project, index) => {
                if (filter[project.tag]) {
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
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}