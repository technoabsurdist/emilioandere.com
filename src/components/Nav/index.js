import Link from 'next/link';

export function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 ml-0 md:ml-4 mr-6">
        <Link href="/">
          <a className="inline-block text-primary text-xl md:text-2xl font-semibold hover:text-indigo-500">
            Ishan Shah
          </a>
        </Link>
      </div>
      <div className="flex items-center w-auto">
        <div className="text-sm md:text-base font-normal md:font-medium md:flex-grow">
          <Link href="/projects">
            <a className="inline-block mr-4 md:mr-8 text-primary hover:text-indigo-500">
              Projects
            </a>
          </Link>
          <Link href="https://ishan.coffee">
            <a target="_blank" rel="noopener noreferrer" className="inline-block mr-4 md:mr-8 text-primary hover:text-indigo-500">
              Writing
            </a>
          </Link>
          <Link href="/static/pdf/resume.pdf">
            <a target="_blank" rel="noopener noreferrer" className="inline-block mr-4 text-primary hover:text-indigo-500">
              Resume
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}