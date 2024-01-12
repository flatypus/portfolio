import { useContext, useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { WindowContext } from "@stores/window.context";
import { Blobs } from "./blobs";
import { VerticalInnerShadow } from "./vertical-inner-shadow";

function AnimationDelay({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const [animationReady, setAnimationReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationReady(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return animationReady ? (
    <div className={`fade-in ${className}`}>{children}</div>
  ) : (
    <div className={`opacity-0 ${className}`}>{children}</div>
  );
}

function Card({
  image,
  title,
  description,
  link,
  delay,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}): JSX.Element {
  const [mouseHover, setMouseHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  const SCALE_X = 8;
  const SCALE_Y = 16;
  const cardRef = useRef<HTMLAnchorElement>(null);

  return (
    <AnimationDelay className="h-full w-full" delay={delay || 0}>
      <a
        className="grid h-full w-full transform-gpu place-items-center rounded-3xl bg-white/50 p-8 ring-1 ring-gray-900/10 backdrop-blur-lg transition-all duration-500 ease-out hover:bg-white/70"
        href={link}
        onBlur={() => {
          setMouseHover(false);
        }}
        onFocus={() => {
          setMouseHover(true);
        }}
        onMouseMove={(e) => {
          if (!mouseHover) return;
          const rect = cardRef.current?.getBoundingClientRect();
          if (!rect) return;
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setMousePosition({ x, y });
          setCardSize({
            width: cardRef.current?.offsetWidth || 0,
            height: cardRef.current?.offsetHeight || 0,
          });
        }}
        onMouseOut={() => {
          setMouseHover(false);
        }}
        onMouseOver={() => {
          setMouseHover(true);
        }}
        ref={cardRef}
        rel="noopener"
        style={{
          transform: mouseHover
            ? `perspective(1000px) rotateX(${
                (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
              }deg) rotateY(${
                (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
              }deg) translateZ(10px)`
            : "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
        }}
        target="_blank"
      >
        <Image
          alt={`${title}-image`}
          className="rounded-xl"
          height={48}
          src={image}
          width={48}
        />
        <div className="mt-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </a>
    </AnimationDelay>
  );
}

function Cards(): JSX.Element {
  const { subscribe } = useContext(WindowContext);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { width: lastWidth } = subscribe({
      breakpoint: { width: 800 },
      callback: (window) => {
        setWidth(window.width);
      },
    });
    setWidth(lastWidth);
  }, [subscribe]);

  return (
    <div
      className={`my-8 grid w-full grid-cols-1 place-items-center gap-4 ${
        width > 800 ? "md:grid-cols-2" : "md:grid-cols-1"
      }`}
    >
      <Card
        delay={600}
        description="Lead full-stack developer for UN accredited edtech startup, building an AI-driven learning platform"
        image="/images/edubeyond.png"
        link="https://edubeyond.org/"
        title="EduBeyond"
      />

      <Card
        delay={700}
        description="Channel for engineering and history videos about random projects. We're at 1,200 subscribers and 120k views!"
        image="/images/flatypus.png"
        link="https://youtube.com/flatypus"
        title="YouTube"
      />

      <Card
        delay={800}
        description="Developer-focused python library for building self-prompting agents. 3,000+ downloads!"
        image="/images/github.png"
        link="https://github.com/flatypus/flowchat"
        title="flowchat"
      />

      <Card
        delay={900}
        description="Personal website designed around my MacOS workstation. You're on it right now!"
        image="/images/github.png"
        link="https://github.com/flatypus/portfolio"
        title="Personal Site"
      />
    </div>
  );
}

function Icons(): JSX.Element {
  return (
    <span className="mt-[5px] flex flex-row gap-x-[2px] md:mt-[10px]">
      <AnimationDelay delay={500}>
        <a href="https://github.com/flatypus" rel="noopener" target="_blank">
          <FaGithub
            className="hover-scale-large mt-[2.6px] cursor-pointer"
            color="black"
            opacity={0.8}
            size={19}
          />
        </a>
      </AnimationDelay>

      <AnimationDelay delay={600}>
        <a
          href="https://linkedin.com/in/hinson-chan"
          rel="noopener"
          target="_blank"
        >
          <FaLinkedin
            className="hover-scale-large mt-[2.7px] cursor-pointer"
            color="#0077b5"
            opacity={0.8}
            size={20}
          />
        </a>
      </AnimationDelay>

      <AnimationDelay delay={700}>
        <a href="https://youtube.com/flatypus" rel="noopener" target="_blank">
          <FaYoutube
            className="hover-scale-large cursor-pointer"
            color="red"
            opacity={0.8}
            size={26}
          />
        </a>
      </AnimationDelay>
    </span>
  );
}

export default function Welcome(): JSX.Element {
  return (
    <div className="h-full w-full overflow-y-scroll bg-white">
      <VerticalInnerShadow />
      <Blobs />

      <div className="flex h-full items-center justify-center">
        <div className="grid h-full w-full max-w-[500px] place-items-center p-2 md:max-w-[800px]">
          <div className="p-8 md:p-16">
            <AnimationDelay
              className="flex flex-row justify-between text-left text-2xl font-bold md:text-4xl"
              delay={400}
            >
              <h1>Hi, I&apos;m Hinson.</h1>

              <Icons />
            </AnimationDelay>

            <AnimationDelay
              className="mt-4 text-left text-sm font-light text-gray-600 md:text-xl"
              delay={500}
            >
              Full Stack Developer, AI Researcher, Bubble Tea Enthusiast
            </AnimationDelay>

            <Cards />
            <AnimationDelay delay={1000}>
              <footer className="text-sm text-black text-opacity-90">
                Made with ❤️ by Hinson with Nextjs and TailwindCSS
              </footer>
            </AnimationDelay>
          </div>
        </div>
      </div>
    </div>
  );
}
