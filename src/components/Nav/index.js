export function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a href="/" className="inline-block text-primary">
                    Ishan Shah
                </a>
            </div>
            <div className="flex items-center w-auto">
                <div className="text-sm md:flex-grow">
                    <a href="/projects" className="inline-block mr-4 text-primary hover:text-indigo-400">
                        Projects
                    </a>
                    <a href="https://ishan.coffee" className="inline-block mr-4 text-primary hover:text-indigo-400">
                        Writing
                    </a>
                    <a target="_blank" href="/static/pdf/resume.pdf" className="inline-block mr-4 text-primary hover:text-indigo-400">
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    )
}