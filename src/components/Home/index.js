import Image from 'next/image'
import { MapPin } from 'react-feather'
import { Detail } from '../Detail'
import { HomeData } from '../../data/HomeData'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 text-lg font-semibold text-off-black dark:text-off-white md:text-right md:text-base md:font-normal md:text-opacity-40"
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
      <strong className="flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary text-sm md:text-base">{subtitle}</span>}
      {date && <span className="flex-none font-mono text-quaternary hidden md:flex">{date}</span>}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
      {...props}
    />
  )
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        <div className="pb-24 md:pb-4 space-y-12 md:space-y-16">
          {/* Bio */}
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="prose">
                <p>
                  Hey, I&apos;m Ishan. I&apos;m an engineer, student,{' '}
                  <a 
                    href="https://ishan.coffee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    writer
                  </a>
                  , and{' '}
                  <a 
                    href="https://github.com/ishan0102" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    software tinkerer
                  </a>
                  . I&apos;m currently working on video processing and ML infrastructure at YouTube
                  and studying Computer Engineering and Math at UT Austin.
                </p>
                <p>
                  Before Google, I developed a machine learning pipeline at Capital One 
                  to detect fraud in car dealerships using customer reviews. I&apos;ve also{' '}
                  <a 
                    href="https://hai.ischool.utexas.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    researched responsible AI
                  </a>
                  , built a tool to summarize emails with a large language model, and 
                  taught a data structures class.
                </p>
                <p>
                  I usually spend my time playing spikeball, exploring coffee shops, or 
                  wandering around national parks. Reach out if you&apos;d like to chat!
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'mailto:ishan0102@utexas.edu'}
                  title={'Email'}
                  subtitle={'Send'}
                  date={''}
                />
                <TableRow
                  href={'https://github.com/ishan0102'}
                  title={'GitHub'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'https://www.linkedin.com/in/ishan0102/'}
                  title={'LinkedIn'}
                  subtitle={'Connect'}
                  date={''}
                />
                <TableRow
                  href={'https://twitter.com/ishan0102'}
                  title={'Twitter'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'https://open.spotify.com/user/ishan0102?si=510c088c653249d2'}
                  title={'Spotify'}
                  subtitle={'Follow'}
                  date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Where */}
          <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <Image
                priority
                src="/static/img/sf.png"
                width={600}
                height={300}
                layout="responsive"
                className="rounded-xl"
                quality={100}
                alt="Map of San Bruno with blue location dot in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>San Bruno, CA</span>
              </p>
            </SectionContent>
          </SectionContainer>

          {/* Work */}
          <SectionContainer>
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {HomeData.workHistory.map((job) => (
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
                {HomeData.research.map((org) => (
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
                {HomeData.organizations.map((org) => (
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

          {/* Spotify Widget */}
          {/* <div class="pb-10 flex flex-col">
            <div class="flex justify-center">
              <iframe id="spotify-track" class="rounded-xl" src="https://open.spotify.com/embed/track/0utlOiJy2weVl9WTkcEWHy" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <button class="ml-4 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="rounded-md fill-current text-black hover:text-indigo-500 transition duration-300" viewBox="0 0 16 16">
                  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                </svg>
              </button>
            </div>
          </div> */}
          <SectionContainer>
            <SectionTitle>Music</SectionTitle>
            <SectionContent>
              <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/0y58YIsqNmmY5Bh3f4p0Vl?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
