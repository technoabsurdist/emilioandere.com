const projectsList = [
// TODO: Add mahowald/HAI lab research projects
//  {
//     name: "Smart Exercise",
//     date: "Fall 2021",
//     tools: ["Python", "PyTorch", "React", "Node.js", "MongoDB"],
//     tagline: "A smart exercise app",
//     description: `
//       Smart Exercise is a web app that uses computer vision to track your exercise form and
//       provide real-time feedback. I built this with a team of 4 other students for our
//       final project in CS 329E. I worked on the frontend, backend, and computer vision
//       components of the project.
//     `,
//     tag: "School",
//     links: {
//       "Website": "https://smart-exercise.herokuapp.com/",
//       "GitHub": "https://github.com"
//     }
//   },
  {
    name: "Audio Wiki",
    date: "Fall 2022",
    tools: ["FastAPI", "Next.js", "BeautifulSoup", "Railway"],
    tagline: "Listen to Wikipedia",
    description: `
      Audio Wiki is an Unreal Speech project that uses our in-house text-to-speech engine to
      let you listen to Wikipedia articles. I built the entire backend for this project,
      including the Wikipedia scraper and parser and our FastAPI server. We're working on more
      apps that use our text-to-speech engine, so stay tuned!
    `,
    tag: "Work",
    links: {
      "Website": "https://dev.audio.wiki/",
    }
  },
  {
    name: "Unreal Speech",
    date: "Fall 2022",
    tools: ["PyTorch", "AWS S3", "AWS DynamoDB", "Firebase", "Railway"],
    tagline: "A text-to-speech startup",
    description: `
      Unreal Speech is a text-to-speech startup that I'm currently building. So far,
      I've worked on a model evaluation pipeline using Amazon Mechanical Turk,
      rebuilt our landing page and demos, and migrated 500 users from Firebase to
      AWS DynamoDB. The goal is cheaper and more realistic models than our competitors!
    `,
    tag: "Work",
    links: {
      "Website": "https://unrealspeech.up.railway.app/",
    }
  },
  {
    name: "Real Analysis Textbook",
    date: "Fall 2022",
    tools: ["LaTeX"],
    tagline: "A real analysis textbook",
    description: `
      I wanted to get really good at LaTeX, so I decided to take notes for Real Analysis (M 361K)
      in the form of a typeset textbook. Writing this in realtime during lectures was really hard
      at first, but after a few classes I noticed I was getting way faster. Having a 140 WPM typing
      speed also helped quite a bit 😄.
    `,
    tag: "School",
    links: {
      "Textbook": "/static/pdf/real-analysis.pdf",
      "GitHub": "https://github.com/ishan0102/m-361k"
    }
  },
  {
    name: "Ishan's Cafe",
    date: "Summer 2022",
    tools: ["Hugo", "Quartz"],
    tagline: "Home to my thoughts",
    description: `
        I built Ishan's Cafe using Quartz, a template developed by Jacky Zhao. The site supports
        "Control + K" for quick search, Markdown for individual posts, and an interactive knowledge
        graph that lets you see how notes are connected. I love the setup because it's designed
        to make the writing experience as flexible, yet effortless as possible.
      `,
    tag: "Personal",
    links: {
      "Website": "https://ishan.coffee",
      "GitHub": "https://github.com/ishan0102/thoughts",
    },
  },
  {
    name: "Personal Website",
    date: "Summer 2022",
    tools: ["Next.js", "Tailwind CSS", "Netlify"],
    tagline: "What you're looking at",
    description: `
        This website is written in Next.js with reusable components styled with Tailwind CSS.
        Originally, I wrote my personal website in pure HTML but decided to redesign it now
        that I have more web dev experience.
      `,
    tag: "Personal",
    links: {
      "Website": "/",
      "GitHub": "https://github.com/ishan0102/ishanshah.me",
    },
  },
  {
    name: "Pictionary",
    date: "Spring 2022",
    tools: ["TensorFlow", "GANs", "Computer Vision"],
    tagline: "Play Pictionary against a computer",
    description: `
        This is my final project for Computer Vision (EE 379V). This project uses computer vision 
        to recreate a computer-based game of Pictionary, in which a human player draws an image 
        and the computer attempts to guess the drawing. The model was trained on Google's Quick, 
        Draw! dataset, which contains over 50 million sketches. This recurrent neural network
        was then implemented in a React app that can efficiently classify sketches of common
        objects with ~40% accuracy.
      `,
    tag: "School",
    links: {
      "Paper": "/static/pdf/pictionary.pdf",
      "GitHub": "https://github.com/ishan0102/pictionary",
    },
  },
  {
    name: "Commentary",
    date: "Spring 2022",
    tools: ["Python", "NLTK", "Scikit-learn", "XGBoost", "Twitter API", "FastAPI"],
    tagline: "Critique on OpenAI's latest model",
    description: `
        For my final project in Data Science Principles (EE 461P), I trained a model to
        predict what the sentiment of a tweet's replies would look like given a tweet.
        I got to explore natural language processing tools like NLTK and TF-IDF and
        learned how to script API requests that follow rate limits. I also created and
        deployed a website using Google Cloud Platform to demo the app.
      `,
    tag: "School",
    links: {
      "Website": "https://twittercommentary.netlify.app",
      "GitHub": "https://github.com/ishan0102/commentary",
      "Poster": "/static/pdf/commentary.pdf",
    },
  },
  {
    name: "Exploring Bias in GPT-3",
    date: "Fall 2021",
    tools: ["GPT-3", "NLP"],
    tagline: "Critique on OpenAI's latest model",
    description: `
        I wrote this paper for Computational Linguistics (LIN 313).
        In it, I explore potential biases of a popular language model, GPT-3.
        I experimented by feeding the model input like "The doctor was a..."
        and analyzing the probability distribution of the output (male, female, etc.).
      `,
    tag: "Research",
    links: {
      "Paper": "/static/pdf/gpt3.pdf",
    },
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
    links: {
      "Website": "https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html",
    },
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
    links: {
    },
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
    tag: "Work",
    links: {
    },
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
    tag: "Personal",
    links: {
      "Website": "https://devpost.com/software/vitali",
      "GitHub": "https://github.com/ishan0102/vitali",
    },
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
    links: {
      "GitHub": "https://github.com/JimothyGreene/EE461L-Group2-FinalProject",
    },
  },
  {
    name: "Day in Review",
    date: "Fall 2020",
    tools: ["Scikit-learn", "NLP", "Electron JS", "Node.js", "React"],
    tagline: "Email summarizer",
    description: `
        This is a desktop/web app that shows summaries of your inbox using BERT,
        a neural network that uses extractive summarization and language modeling.
        It was created out of frustration with unnecessarily long emails.
      `,
    tag: "Personal",
    links: {
      "Website": "http://dayinreview.org/",
      "GitHub": "https://github.com/DayInReview/day-in-review",
    },
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
    tag: "Personal",
    links: {
      "Website": "https://devpost.com/software/nlp-speech-analysis",
      "GitHub": "https://github.com/ishan0102/hacktx-20",
    },
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
    links: {
    },
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
    links: {
      "GitHub": "https://github.com/ishan0102/runkeeper",
    },
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
    links: {
      "Website": "https://www.youtube.com/watch?v=mLqsLVLjyEE",
      "GitHub": "https://github.com/ishan0102/t-rex-run",
    },
  },
]

export const ProjectData = {
  projectsList,
}