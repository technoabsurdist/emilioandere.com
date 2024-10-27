import Image from 'next/image'
import { MapPin } from 'react-feather'
import { Detail } from './Detail'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 text-lg font-semibold text-primary md:text-right md:text-base md:font-normal md:text-opacity-40"
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
      href={href}
      className="flex items-center space-x-4 group"
      target='_blank'
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
        {/* Avatar */}
        <div className="justify-center flex mt-5 mb-6 md:ml-20 mr-10">
          <Image
            src="/static/img/gustav-courbet.png"
            alt="Emilio"
            width={451}
            height={301}
            quality={100}
            className='rounded-md mt-5'
          />
        </div>

        <div className="pb-24 md:pb-4 space-y-12 md:space-y-16 dark:mt-8">
          {/* Bio */}
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="prose mt-5 -mb-8">
                <p>
                  Hey, I'm Emi! I'm a senior at UChicago studying Mathematics. <br /> 
                  I like engineering efficient systems, math, and deep learning.
                </p>
                <p className="-mb-2">
                  In the past, I've done:
                </p>
                <ul>
                  <li>various LLM features at <a href="https://elicit.com">Elicit</a></li>
                  <li><a href="https://spherepay.co/ramp" target="_blank">on/off-ramp</a> infra and <a href="https://docs.spherepay.co/api/bankAccount" target="_blank">payouts</a> API at <a href="https://spherepay.co/" target="_blank">Sphere Labs</a></li>
                  <li><a href="https://arxiv.org/abs/2206.10673v1" target="_blank">Natural Backdoor Datasets</a>; presented at NeurIPS 2022</li>
                  <li>rewards/liquidity pools at <a href="https://app.impossible.finance" target="_blank">Impossible Finance</a></li>
                  <li>content automation pipelines at <a href="https://glip.gg" target="_blank">Glip</a></li>
                  <li>founding tutor; taught calculus at <a href="https://schoolhouse.world/" target="_blank">Schoolhouse</a></li>
                </ul>
                <p className="-mb-2">
                  Find my personal projects in my <a href="/portfolio">portfolio</a>.
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle></SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'mailto:andere@uchicago.edu'}
                  title={'Email'}
                  subtitle={'Send'}
                  date={''}
                />
                <TableRow
                  href={'https://github.com/technoabsurdist'}
                  title={'GitHub'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'https://x.com/technoabsurdist'}
                  title={'X'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'https://scholar.google.com/citations?user=qhHsPrgAAAAJ&hl=en&authuser=1'}
                  title={'Scholar'}
                  subtitle={'Follow'}
                  date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Where */}
          {/* <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <Image
                priority
                src="/static/img/nyc.png"
                width={550}
                height={300}
                layout="responsive"
                className="rounded-xl"
                quality={100}
                alt="Map of NYC with blue location dot in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>NYC</span>
              </p>
            </SectionContent>
          </SectionContainer> */}

          {/* Spotify Widget */}
          {/* <SectionContainer>
            <SectionTitle>Music</SectionTitle>
            <SectionContent>
              <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/66p40tOGsUYyMmIfaBr1Mk?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </SectionContent>
          </SectionContainer> */}
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
