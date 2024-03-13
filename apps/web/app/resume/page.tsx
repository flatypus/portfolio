import Link from "next/link";
import { Blobs } from "@components/applications/welcome/blobs";

const contact = {
  name: "Hinson Chan",
  address: "Vancouver, BC",
  phone: "(236)-979-9236",
  email: "yhc3141@gmail.com",
  site: "https://flatypus.me",
  image: "/images/hinson.jpg",
  tag: "Software developer building tomorrow's solutions today.",
};

function Contact(): JSX.Element {
  return (
    <div className="ml-auto mt-6 flex flex-col text-xs">
      <div>{contact.email}</div>
      <div>{contact.address}</div>
      <div>{contact.phone}</div>
      <Link href={contact.site}>{contact.site}</Link>
    </div>
  );
}

function Title(): JSX.Element {
  return (
    <div className="col-span-2">
      <h1 className="mb-2 text-5xl font-bold text-resume-purple">
        {contact.name}
      </h1>
      <p className="text-xs">{contact.tag}</p>
    </div>
  );
}

const experience = [
  {
    title: "Founding Software Engineer",
    company: "EduBeyond Education Inc.",
    date: "July 2023 - Present",
    link: "https://edubeyond.ai",
    description: [
      "Conducting B2B sales and deploying globally to No.1 Taiwan-based IT services provider, Southeast Asia’s largest pharmaceutical company, Indonesia's largest telecommunications company, and international private school chains.",
      "Working with Canada's leading education research facility, InnovED @U of Toronto",
      "Helped establish Japan branch teaching 150+ students",
      "Taught in Jakarta alongside Indonesian charity, Tengan Pengharapan",
    ],
  },
  {
    title: "AI Research Team Lead",
    company: "EduBeyond Education Inc.",
    date: "July 2023 - Present",
    link: "https://edubeyond.ai",
    description: [
      "Lead the research initiative in Natural Language Processing, creating personalized language models to enhance education",
      "Collaborated with researchers at Berkeley AI Research Lab",
      "Presented findings in University of Michigan AI Symposium",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "EduBeyond Education Inc.",
    date: "May 2022 - July 2023",
    link: "https://edubeyond.ai",
    description: [
      "Directed professional development team at UN accredited high impact ed-tech startup to build AI-driven learning platform.",
      "Built EduBeyond's frontend Nextjs site, designed real-time websocket messaging architecture and backend Express api.",
      "Interviewed teachers from Canada to Singapore to develop better curriculum",
      "Contributed to winning 1st at Moonshot awards, finalist for Samsung's Solve for Tomorrow Canada, and semifinalist for MIT Solve[ED].",
    ],
  },
];

const extracurriculars = [
  {
    title: "YouTube Filmmaker and Education Communicator",
    description: [
      "Garnered over 150,000 views and 1,500 subscribers illuminating on homemade engineering projects and educational videos",
      "Conducted extensive research on ‘Land Checkerboarding’; presented findings via self-produced documentary",
    ],
  },
  {
    title: "Pianist",
    description: [
      "Achieved RCM 10 certificate & ARCT Harmony with honors after a classical training of 13 years",
      "Independently orchestrated ‘Piano for Covid’ fundraiser, raising over $1,000",
      "Studying Jazz piano, lead pianist for school jazz band.",
    ],
  },
  {
    title: "Co-president, UBC Physics Olympics team",
    description: [
      "Worked extensively to design working vacuum pump using only homemade parts",
      "Led and mentored team to 9th place in annual Physics Olympics competition",
    ],
  },
  {
    title: "President of Programming Club",
    description: [
      "Expanded the club from a niche group of five to a community of 30+ members",
      "Led programming club integration with Hack Club, a global network of high school coding clubs",
      "Organized weekly meetings discussing programming topics, studying common algorithms and strategies",
    ],
  },
  {
    title: "Executive of Math Club",
    description: [
      "Achieved 1st place provincially and regionally for three consecutive years at the Canadian Math Challengers Society",
    ],
  },
  {
    title: "Badminton Athlete",
    description: [
      "Competed in numerous state and high school tournaments, past 4th rank in junior provincial B doubles and contributed to consecutive wins for high school team",
    ],
  },
  {
    title: "Club executive of Reach for the Top",
    description: [
      "Won four consecutive provincial 1st place trivia titles and 4th in Canada-wide trivia competition",
    ],
  },
];

function Experience(): JSX.Element {
  return (
    <div className="mt-6 text-xs">
      <div className="mb-2 text-xl font-bold text-resume-purple">
        Experience
      </div>
      <div className="flex flex-col gap-y-6">
        {experience.map((item) => (
          <div key={item.title}>
            <Link
              className="mb-2 flex flex-row justify-between"
              href={item.link}
              target="_blank"
            >
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="font-semibold">{item.company}</div>
              </div>
              <div className="font-bold">{item.date}</div>
            </Link>
            {item.description.map((desc) => (
              <div className="ml-2 mt-1" key={desc}>
                - {desc}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Extracurriculars(): JSX.Element {
  const rowLeft = extracurriculars.filter((_, index) => index % 2 === 0);
  const rowRight = extracurriculars.filter((_, index) => index % 2 === 1);

  const extracurricularMap = (l: typeof extracurriculars): JSX.Element => (
    <>
      {l.map((item) => (
        <div key={item.title}>
          <div className="mb-1">
            <div className="font-bold">{item.title}</div>
          </div>
          {item.description.map((desc) => (
            <div className="ml-2 mt-1" key={desc}>
              - {desc}
            </div>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <div className="mt-6 text-xs">
      <div className="mb-2 text-xl font-bold text-resume-purple">
        Extracurriculars
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">{extracurricularMap(rowLeft)}</div>
        <div className="flex flex-col gap-6">
          {extracurricularMap(rowRight)}
        </div>
      </div>
    </div>
  );
}

const publications = [
  {
    title: "Multimodal Retrieval Augmented Generation Evaluation Benchmark",
    date: "Mar 11, 2024",
    publisher:
      "IEEE Vehicular Technology Society - 99th Vehicular Technology Conference 2024",
    description:
      "Created a multimodal evaluation platform for assessing the performance of Retrieval Augmented Generation (RAG) systems used in Large Language Models.",
    link: "https://drive.google.com/file/d/1O0b3Ey9JenLECOfOSXBiD8maGSvG-oFE/view?usp=sharing",
  },
];

function Publications(): JSX.Element {
  return (
    <div className="mt-6 text-xs">
      <div className="mb-2 text-xl font-bold text-resume-purple">
        Publications
      </div>
      <div className="flex flex-col gap-6">
        {publications.map((item) => (
          <div key={item.title}>
            <div className="mb-1">
              <Link className="font-bold" href={item.link} target="_blank">
                {item.title}
              </Link>
              <div className="text-[10px] font-light">
                {item.date} · {item.publisher}
              </div>
            </div>
            <div className="mt-1">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const awards = [
  {
    title: "Rise For The World, Global Finalist",
    link: "https://eu.credential.net/09f3e14f-26e8-408e-8cc9-581dfe473117#gs.5tnfe5",
    description: [
      "Recognized as 1 in 500 of the world’s brightest teenagers from 170+ countries by Schmidt Futures and the Rhodes Trust",
      "Competed against 80,000+ students in the 100-day Rise competition, dedicated over 300 hours to project development",
    ],
  },
  {
    title: "Canadian Computing Competition, Junior Division Honour Roll",
    link: "https://www.cemc.uwaterloo.ca/contests/past_contests/2022/2022CCCResults.pdf",
    description: [
      "Placed 22th/4000 globally (top 0.5%)",
      "Prepared extensively using past contest problems, conducted biweekly training sessions online for school club members",
    ],
  },
  {
    title: "Crescendo International Music Competition 2020-21, 1st Place",
    link: "https://drive.google.com/file/d/1hQwXhnZvks5wY1Z0V6WvNisAenflW4U2/view?usp=sharing",
    description: [
      "Selected as a winner from 5,000+ global applicants; scored 29/30",
    ],
  },
];

function Awards(): JSX.Element {
  return (
    <div className="mt-6 text-xs">
      <div className="mb-2 text-xl font-bold text-resume-purple">Awards</div>
      <div className="flex flex-col gap-6">
        {awards.map((item) => (
          <div key={item.title}>
            <Link className="mb-1" href={item.link} target="_blank">
              <div className="font-bold">{item.title}</div>
            </Link>
            {item.description.map((desc) => (
              <div className="ml-2 mt-1" key={desc}>
                - {desc}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const volunteer = [
  {
    title: "Junior Instructor - UBC Geering Up",
    time: "July 2022, 139 hours",
    description: [
      "Assisted in teaching youth a STEM-themed curriculum",
      "Worked closely with instructors to manage the teaching process, designed hands-on activities",
    ],
  },
];

function Volunteer(): JSX.Element {
  return (
    <div className="mt-6 text-xs">
      <div className="mb-2 text-xl font-bold text-resume-purple">Volunteer</div>
      <div className="flex flex-col gap-6">
        {volunteer.map((item) => (
          <div key={item.title}>
            <div className="mb-1">
              <div className="font-bold">{item.title}</div>
              <div className="font-semibold">{item.time}</div>
            </div>
            {item.description.map((desc) => (
              <div className="ml-2 mt-1" key={desc}>
                - {desc}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const skills = {
  Languages: ["Python", "TypeScript/JavaScript", "HTML/CSS", "Rust", "SQL"],
  Frameworks: [
    "React/Next.js",
    "TailwindCSS",
    "Node.js",
    "Express",
    "Flask",
    "Fastapi",
    "PostgreSQL",
    "MongoDB",
  ],
  Platforms: ["Git", "Github", "Railway", "Fly", "Vercel", "Docker", "Figma"],
  Social: [
    "Team building",
    "Product development",
    "Instruction and teaching",
    "Research & development",
  ],
  Other: ["Fluent in English and Cantonese", "Basic Mandarin and French"],
};

function Skills(): JSX.Element {
  return (
    <div className="mt-6 text-xs">
      <div className="mb-2 text-xl font-bold text-resume-purple">Skills</div>
      <div className="flex flex-col gap-6">
        {Object.entries(skills).map(([title, items]) => (
          <div key={title}>
            <div className="mb-1">
              <div className="font-bold">{title}</div>
            </div>
            <div className="ml-2 mt-1 text-[10px]">{items.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Content(): JSX.Element {
  return (
    <>
      <div className="grid w-full grid-cols-4">
        <Title />
        <div />
        <Contact />
      </div>
      <Experience />
      <Extracurriculars />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <Publications />
          <Awards />
          <Volunteer />
        </div>
        <Skills />
      </div>
    </>
  );
}

export function Resume(): JSX.Element {
  // uncomment for printing
  // return <Content />;
  return (
    <div className="h-full bg-white text-left text-black">
      <div className="opacity-40">
        <Blobs />
      </div>
      <div className="absolute z-[100] flex h-full w-full flex-row">
        <div className="h-full flex-1 bg-black opacity-10" />
        <div className="h-full w-full max-w-[1000px] shrink-0 overflow-y-scroll p-20 shadow-lg">
          <Content />
        </div>
        <div className="h-full flex-1 bg-black opacity-10" />
      </div>
    </div>
  );
}

export default function Site(): JSX.Element {
  return (
    <div className="h-full min-h-screen w-full">
      <Resume />
    </div>
  );
}
