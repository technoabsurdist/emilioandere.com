import Image from 'next/image'
import { Detail } from './Detail'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 text-sm font-semibold text-primary md:text-right md:text-base 
                 md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

function SectionContent(props) {
  return (
    <div className="col-span-10" {...props} />
  )
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-4 group text-xs sm:text-sm md:text-base"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex-none text-gray-700 group-hover:text-indigo-600 
                      dark:text-gray-100 dark:group-hover:text-indigo-500">
        {title}
      </span>
      <span className="w-full border-t border-gray-300 border-dashed shrink 
                      dark:border-gray-800" />
      {subtitle && (
        <span className="flex-none text-tertiary text-[10px] sm:text-xs md:text-sm">
          {subtitle}
        </span>
      )}
      {date && (
        <span className="flex-none font-mono text-quaternary hidden md:flex">
          {date}
        </span>
      )}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 md:grid-cols-12 gap-1.5 sm:gap-2 md:gap-6"
      {...props}
    />
  )
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        {/* Avatar */}
        <div className="justify-center flex mt-2 sm:mt-3 md:mt-5 mb-3 sm:mb-4 md:mb-6 md:ml-20">
          <Image
            src="/static/img/gustav-courbet.png"
            alt="Emilio"
            width={421}
            height={281}
            quality={100}
            className="rounded-md w-11/12 sm:w-4/5 md:w-auto mt-2 sm:mt-3 md:mt-5"
          />
        </div>

        <div className="pb-12 sm:pb-16 md:pb-24 space-y-6 sm:space-y-8 md:space-y-16 dark:mt-8">
          {/* Bio */}
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="prose mt-2 sm:mt-3 md:mt-5 -mb-4 sm:-mb-6 md:-mb-8 text-xs sm:text-sm md:text-base">
                <p>
                  Hey, I'm Emi! I'm a senior at UChicago studying Mathematics. {" "}
                  I like engineering efficient systems, math, and deep learning.
                </p>

                <p>
                  I also work part-time as an ML research engineer at{" "}
                  <a href="https://en.wikipedia.org/wiki/Argonne_National_Laboratory" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Argonne
                  </a>,
                  scaling transformer-based{" "}
                  <a href="https://tung-nd.github.io/stormer/" 
                     target="_blank"
                     rel="noopener noreferrer">
                    weather prediction models
                  </a>
                  .
                </p>

                <p className="-mb-1 mt-3 sm:mt-4 md:mt-6">
                  In the past, I've done:
                </p>

                <div className="flex flex-col space-y-1.5 sm:space-y-2 md:space-y-3 mt-2 sm:mt-3 md:mt-4">
                  <TableRow
                    href="https://elicit.com"
                    title="Various fullstack features at Elicit"
                    subtitle="Software Engineer Intern"
                  />
                  <TableRow
                    href="https://spherepay.co/ramp"
                    title="On/off-ramp infrastructure at Sphere"
                    subtitle="Software Engineer Intern"
                  />
                  <TableRow
                    href="https://arxiv.org/abs/2206.10673v1"
                    title="Natural Backdoor Datasets (NeurIPS 2022)"
                    subtitle="Research Assistant"
                  />
                  <TableRow
                    href="https://app.impossible.finance"
                    title="Rewards & liquidity pools at IF"
                    subtitle="Software Engineer Intern"
                  />
                  <TableRow
                    href="https://glip.gg"
                    title="Automating data pipelines at Glip"
                    subtitle="Software Engineer Intern"
                  />
                  <TableRow
                    href="https://schoolhouse.world/"
                    title="Calculus + CS tutor"
                    subtitle="Founding Tutor"
                  />
                </div>

                <p className="-mb-2 mt-3 sm:mt-4 md:mt-6">
                  Find my personal projects in my{" "}
                  <a href="/portfolio">portfolio</a>.
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle></SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-1.5 sm:space-y-2 md:space-y-3">
                <TableRow
                  href="mailto:andere@uchicago.edu"
                  title="Email"
                  subtitle="Send"
                />
                <TableRow
                  href="https://github.com/technoabsurdist"
                  title="GitHub"
                  subtitle="Follow"
                />
                <TableRow
                  href="https://x.com/technoabsurdist"
                  title="X"
                  subtitle="Follow"
                />
                <TableRow
                  href="https://scholar.google.com/citations?user=qhHsPrgAAAAJ&hl=en&authuser=1"
                  title="Scholar"
                  subtitle="Follow"
                />
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}