import Link from 'next/link';

export function Nav() {
  function toggleTheme() {
    if (localStorage.theme === 'light') {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
    } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
    }
}

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 md:p-6">
      <div className="flex items-center flex-shrink-0 ml-0 md:ml-4 mr-6">
        <Link href="/">
          <a className="inline-block text-primary text-xl md:text-2xl font-semibold hover:text-indigo-500">
            Ishan Shah
          </a>
        </Link>
        <button className="items-center bg-off-white font-bold ml-2 rounded dark:bg-off-black focus:outline-none " onClick={toggleTheme}>
          <svg width="24" height="24" strokeWidth="1.5" className="inline-block stroke-current text-off-black dark:text-off-white hover:text-indigo-500 dark:hover:text-indigo-500 transition duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.82843C19.25 9.29799 19.0393 8.78929 18.6642 8.41421L15.5858 5.33579C15.2107 4.96071 14.702 4.75 14.1716 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25Z"/>
            <path d="M8.75 19V15.75C8.75 15.1977 9.19772 14.75 9.75 14.75H14.25C14.8023 14.75 15.25 15.1977 15.25 15.75V19"/>
            <path d="M8.75 5V8.25"/>
          </svg>

        </button>
      </div>
      <div className="flex items-center w-auto">
        <div className="text-sm md:text-base font-normal md:font-medium md:flex-grow">
          <Link href="/projects">
            <a className="inline-block mr-3 md:mr-8 text-primary hover:text-indigo-500">
              Projects
            </a>
          </Link>
          <Link href="https://ishan.coffee">
            <a target="_blank" rel="noopener noreferrer" className="inline-block mr-3 md:mr-8 text-primary hover:text-indigo-500">
              Writing
            </a>
          </Link>
          <Link href="/static/pdf/resume.pdf">
            <a target="_blank" rel="noopener noreferrer" className="inline-block mr-3 text-primary hover:text-indigo-500">
              Resume
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}