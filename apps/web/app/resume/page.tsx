import Link from "next/link";
import { Blobs } from "@components/applications/welcome/blobs";

const contact = {
  name: "Hinson Chan",
  address: "Vancouver, BC",
  phone: "(236)-979-9236",
  email: "yhc3141@gmail.com",
  site: "https://flatypus.me",
  image: "/images/hinson.jpg",
  tag: "Software Developer with a knack for perfection, building tomorrow's solutions today.",
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
      <h1 className="text-resume-purple mb-2 text-5xl font-bold">
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
    date: "May 2022 - Present",
    description: [
      "Directed a UN-accredited edtech startup dev team with a $5M valuation",
      "Created an AI-driven learning platform and successfully deployed it to over $1B+ companies and 50K+ students across the globe",
      "Conducted product feedback interviews with teachers from Canada to Singapore",
      "Helped establish the Japan wing of the startup and taught courses in Jakarta in association with an Indonesian charity",
    ],
  },
  {
    title: "AI Research Team Lead",
    company: "EduBeyond Education Inc.",
    date: "July 2023 - Present",
    description: [
      "Lead the research initiative in Natural Language Processing, creating personalized language models to enhance education",
      "Collaborated with researchers at Berkeley AI Research Lab",
      "Presented findings in University of Michigan AI Symposium",
    ],
  },
];

const extracurriculars = [
  {
    title: "YouTube Filmmaker and Education Communicator",
    description: [
      "Garnered over 120,000 views and 1,200 subscribers illuminating on homemade engineering projects and educational videos",
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
      <div className="text-resume-purple mb-2 text-xl font-bold">
        Experience
      </div>
      <div className="flex flex-col gap-y-6">
        {experience.map((item) => (
          <div key={item.title}>
            <div className="mb-2 flex flex-row justify-between">
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="font-semibold">{item.company}</div>
              </div>
              <div className="font-bold">{item.date}</div>
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
      <div className="text-resume-purple mb-2 text-xl font-bold">
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

const awards = [
  {
    title: "Rise For The World, Global Finalist",
    description: [
      "Recognized as 1 in 500 of the world’s brightest teenagers from 170+ countries by Schmidt Futures and the Rhodes Trust",
      "Competed against 80,000+ students in the 100-day Rise competition, dedicated over 300 hours to project detailing",
    ],
  },
  {
    title: "Canadian Computing Competition, Junior Division Honour Roll",
    description: [
      "Placed 22th/4000 globally (top 0.5%)",
      "Prepared extensively using past contest problems, conducted biweekly training sessions online for school club members",
    ],
  },
  {
    title: "Crescendo International Music Competition 2020-21, 1st Place",
    description: [
      "Selected as a winner from 5,000+ global applicants",
      "Dedication towards practicing 2 pieces for 3 months; scored 29/30",
    ],
  },
];

function Awards(): JSX.Element {
  return (
    <div className="mt-6 text-xs">
      <div className="text-resume-purple mb-2 text-xl font-bold">Awards</div>
      <div className="flex flex-col gap-6">
        {awards.map((item) => (
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
      <div className="text-resume-purple mb-2 text-xl font-bold">Volunteer</div>
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
      <div className="text-resume-purple mb-2 text-xl font-bold">Skills</div>
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
          <Awards />
          <Volunteer />
        </div>
        <Skills />
      </div>
    </>
  );
}

export default function Resume(): JSX.Element {
  // uncomment for printing
  // return <Content />;
  return (
    <div className="relative grid h-full min-h-screen w-full place-items-center bg-white text-left text-black">
      <div className="opacity-40">
        <Blobs />
      </div>
      <div className="absolute z-[100] flex h-full w-full flex-row">
        <div className="h-full flex-1 bg-black opacity-10" />
        <div className="h-screen w-full max-w-[1000px] shrink-0 overflow-y-scroll p-20 shadow-lg">
          <Content />
        </div>
        <div className="h-full flex-1 bg-black opacity-10" />
      </div>
    </div>
  );
}
