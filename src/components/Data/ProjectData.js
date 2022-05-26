const projectsList = [
  {
    name: "Exploring Bias in GPT-3",
    date: "Fall 2021",
    tools: ["NLP", "GPT-3"],
    tagline: "Critique on OpenAI's latest model",
    description: `
        I wrote this paper for Computational Linguistics (LIN 313).
        In it, I explore potential biases of a popular language model, GPT-3.
        I experimented by feeding the model input like "The doctor was a..."
        and analyzing the probability distribution of the output (male, female, etc.).
      `,
    tag: "School",
    website: "/static/pdf/gpt3-report.pdf",
    github: "~",
  },
  {
    name: "Pintos",
    date: "Fall 2021",
    tools: ["C", "Makefile", "Operating Systems"],
    tagline: "An operating system built from scratch",
    description: `
        Pintos is a semester-long project for Operating Systems (EE 461S) adopted from Stanford.
        Over the semester, I developed architecture to run programs (argument parsing,
        system calls, user memory), a virtual memory system (paging, swapping, stack growth,
        eviction, synchronization), and a file system (file growth, indexed files, subdirectories).
      `,
    tag: "School",
    website: "https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html",
    github: "~",
  },
  {
    name: "Yash",
    date: "Fall 2021",
    tools: ["C", "Operating Systems"],
    tagline: "Yet Another Shell",
    description: `
        Yash is a rudimentary shell written entirely from scratch in C for Operating Systems (EE 461S).
        I implemented all standard shell features like file redirection, pipes, signals, and job control.
        It was a challenge designing the software from scratch but it was a great introduction to
        deeply understanding low-level computing.
      `,
    tag: "School",
    website: "~",
    github: "~",
  },
  {
    name: "PeerNet",
    date: "Spring 2021",
    tools: ["React", "Node.js", "Firebase", "Twilio", "Material UI", "Sass"],
    tagline: "Peer-to-peer tutoring for universities",
    description: `
        PeerNet is a tutoring initiative I co-led for the Roden Leadership Program.
        The platform allows university students to give and receive class-specific help.
        This project taught me a lot about full-stack web development and how to interface
        with Firebase.
      `,
    tag: "Personal",
    website: "~",
    github: "~",
  },
  {
    name: "Vitali",
    date: "Spring 2021",
    tools: ["React", "Material UI"],
    tagline: "Visualize patient data",
    description: `
        This is a React app that allows doctors to see a patient's data in real-time
        given a data source. It's intended to improve viability of in-home dialysis.
        We built it for the DaVita Product Management Hackathon and won first place.
      `,
    tag: "Other",
    github: "https://github.com/ishan0102/vitali",
    website: "https://devpost.com/software/vitali"
  },
  {
    name: "Longhorn Computing Services",
    date: "Spring 2021",
    tools: ["Flask", "React"],
    tagline: "Cloud computing manager",
    description: `
        This was a semester-long project for Software Engineering Lab (EE 461L).
        I worked on the APIs for a service that allows users to manage their cloud
        computing resources.
      `,
    tag: "School",
    github: "https://github.com/JimothyGreene/EE461L-Group2-FinalProject",
    website: "~"
  },
  {
    name: "Personal Website",
    date: "Winter 2021",
    tools: ["Tailwind CSS", "HTML", "Jekyll"],
    tagline: "What you're looking at",
    description: `
        This website is written in pure HTML and styled with Tailwind. It's hosted
        on GitHub pages. All of the design and development was done by me.
      `,
    tag: "Personal",
    github: "~",
    website: "/"
  },
  {
    name: "Day in Review",
    date: "Fall 2021",
    tools: ["Scikit-learn", "NLP", "Electron JS", "Node.js", "React"],
    tagline: "Email summarizer",
    description: `
        This is a desktop/web app that shows summaries of your inbox using BERT,
        a neural network that uses extractive summarization and language modeling.
        It was created out of frustration with unnecessarily long emails.
      `,
    tag: "Personal",
    github: "https://github.com/DayInReview/day-in-review",
    website: "http://dayinreview.org/"
  },
  {
    name: "HackTX 2020",
    date: "Fall 2020",
    tools: ["Google Cloud", "NLP", "Node.js", "React"],
    tagline: "Speech analysis with NLP",
    description: `
        HackTX 2020 challenged us to use Google Cloud Platform to create something
        unique. We decided to use GCP's NLP services to improve users' speaking
        skills by providing feedback on tone and speech style.
      `,
    tag: "Other",
    github: "https://github.com/ishan0102/hacktx-20",
    website: "https://devpost.com/software/nlp-speech-analysis"
  },
  {
    name: "Silk Road",
    date: "Fall 2020",
    tools: ["Java", "Apache Derby", "JavaFX", "Gson"],
    tagline: "Multithreaded auction server",
    description: `
        This was my final project for Data Structures (EE 422C). It allowed multiple
        clients to bid on auction items simultaneously. I learned how to interface
        client threads with a server using the observer pattern and experienced writing
        a full-stack app with a database from scratch.
      `,
    tag: "School",
    github: "~",
    website: "~"
  },
  {
    name: "Runkeeper",
    date: "Summer 2020",
    tools: ["Python", "Tkinter", "OpenPyXL"],
    tagline: "Track running statistics",
    description: `
        During quarantine, I wanted an easy way to track my running statistics. Not knowing 
        how databases worked, I wrote everything using a simple Python GUI library and Excel. 
        This was a great way to introduce myself to Python and understand what goes into 
        making an app.
      `,
    tag: "Personal",
    github: "https://github.com/ishan0102/runkeeper",
    website: "~"
  },
  {
    name: "T-Rex Run",
    date: "Spring 2020",
    tools: ["C++", "C", "ARM Assembly"],
    tagline: "Google's dinosaur game",
    description: `
        This was my final project for Embedded Systems (EE 319H). I implemented Google's
        dinosaur running game on the TM4C microcontroller. The game featured multiple LEDs,
        a slide potentiometer for controls, an LCD, and a DAC for sound.
      `,
    tag: "School",
    github: "https://github.com/ishan0102/t-rex-run",
    website: "https://www.youtube.com/watch?v=mLqsLVLjyEE"
  },
]

export const ProjectData = {
  projectsList,
}