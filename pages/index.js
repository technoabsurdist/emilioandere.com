import Head from 'next/head'
import Image from 'next/image'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-1000 group-hover:text-indigo-500 text-gray-100">
        {title}
      </strong>
      <span className="w-full border-t border-dashed shrink border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
      {date && (
        <span className="flex-none font-mono text-quaternary">{date}</span>
      )}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
      {...props}
    />
  )
}

const workHistory = [
  {
    href: 'https://github.com/mobile',
    title: 'Google',
    subtitle: 'Software Engineering Intern',
    date: 'May 2022 - Present\u00a0',
  },
  {
    href: 'https://designdetails.fm',
    title: 'UT Austin ECE',
    subtitle: 'Teaching Assistant',
    date: 'Aug 2021 - Dec 2021',
  },
  {
    href: 'https://designdetails.fm',
    title: 'Capital One',
    subtitle: 'Software Engineering Intern',
    date: 'May 2021 - Aug 2021',
  },
  {
    href: 'https://facebook.com',
    title: 'AAK Telescience',
    subtitle: 'Software Engineering Intern',
    date: 'May 2020 - Aug 2020',
  },
]

const research = [
  {
    href: 'https://designdetails.fm',
    title: 'UT Human-AI Interaction Lab',
    subtitle: 'Research Assistant',
    date: 'Aug 2021 - Dec 2021',
  },
  {
    href: 'https://designdetails.fm',
    title: 'UT Dallas NanoTech Institute',
    subtitle: 'Research Assistant',
    date: 'Jun 2018 - Aug 2018',
  },
]

const organizations = [
  {
    href: 'https://github.com/mobile',
    title: 'Roden Leadership Program',
    subtitle: 'Project Lead',
    date: 'Feb 2019 - Present\u00a0',
  },
  {
    href: 'https://github.com/mobile',
    title: 'IEEE UT Austin',
    subtitle: 'Corporate Director',
    date: 'Sep 2019 - May 2022',
  },
  {
    href: 'https://designdetails.fm',
    title: 'The Daily Texan',
    subtitle: 'Opinion Columnist',
    date: 'Jan 2020 - May 2020',
  },
]

export default function Home() {
  return (
    <div className="mx-96 my-24 space-y-16">
      {/* Work */}
      <SectionContainer>
        <SectionTitle>Work</SectionTitle>
        <SectionContent>
          <div className="flex flex-col space-y-3">
            {workHistory.map((job) => (
              <TableRow
                href={job.href}
                title={job.title}
                subtitle={job.subtitle}
                date={job.date}
                key={job.href}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContainer>

      {/* Research */}
      <SectionContainer>
        <SectionTitle>Research</SectionTitle>
        <SectionContent>
          <div className="flex flex-col space-y-3">
            {research.map((org) => (
              <TableRow
                href={org.href}
                title={org.title}
                subtitle={org.subtitle}
                date={org.date}
                key={org.href}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContainer>

      {/* Organizations */}
      <SectionContainer>
        <SectionTitle>Organizations</SectionTitle>
        <SectionContent>
          <div className="flex flex-col space-y-3">
            {organizations.map((org) => (
              <TableRow
                href={org.href}
                title={org.title}
                subtitle={org.subtitle}
                date={org.date}
                key={org.href}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </div>
  )
}
