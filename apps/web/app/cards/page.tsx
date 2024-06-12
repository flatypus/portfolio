interface Challenge {
  type: "cursed!" | "challenge" | "multi-challenge";
  title: string;
  description: string;
  coins: number;
}

const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const challenges: Challenge[] = [
  {
    type: "challenge",
    title: "Interest a Cow",
    description: "Find and capture a cow’s attention for 20 seconds.",
    coins: 600,
  },
  {
    type: "challenge",
    title: "Find Helvetica in Helvetia",
    description: "Locate the Helvetica font in its country of origin.",
    coins: 700,
  },
  {
    type: "challenge",
    title: "Pet a St. Bernard",
    description: "Find and pet a St. Bernard dog.",
    coins: 650,
  },
  {
    type: "challenge",
    title: "Stay neutral in a conflict",
    description: "Mediate a conflict by listening and staying neutral.",
    coins: 750,
  },
  {
    type: "challenge",
    title: "Create a Swiss Army Knife",
    description:
      "Craft a multitool with at least two functions using store supplies.",
    coins: 800,
  },
  {
    type: "challenge",
    title: "Jump in a lake",
    description: "Jump into a lake.",
    coins: 700,
  },
  {
    type: "challenge",
    title: "Yodel in the mountains",
    description: "Yodel a song in the Swiss mountains for at least 10 seconds.",
    coins: 600,
  },
  {
    type: "challenge",
    title: "Watch Dealer",
    description:
      "Find a watch shop. Guess the price of the most expensive watch to the nearest 25%.",
    coins: 600,
  },
  {
    type: "challenge",
    title: "Do a cheese taste test",
    description:
      "Blindfolded, taste two different cheeses and guess their varieties.",
    coins: 650,
  },
  {
    type: "challenge",
    title: "Epic Landscapes",
    description:
      "Produce art of the local scenery. The art must have at least two colors and take at least 5 minutes to create.",
    coins: 700,
  },
  {
    type: "challenge",
    title: "William Tell",
    description:
      "Knock an apple off your teammate’s head from a distance of 3 meters.",
    coins: 800,
  },
  {
    type: "challenge",
    title: "Invoke Patriotism",
    description:
      "You must memorize and sing the first verse of the Swiss National Anthem. You have unlimited attempts.",
    coins: 750,
  },
  {
    type: "challenge",
    title: "Make a Swiss Flag",
    description: "Create a Swiss flag using supermarket ingredients.",
    coins: 700,
  },
  {
    type: "challenge",
    title: "Translate a sign",
    description:
      "Translate a sign with at least five words accurately without Google Translate.",
    coins: 750,
  },
  {
    type: "challenge",
    title: "Find a Canadian Flag",
    description: "Find a Canadian flag.",
    coins: 550,
  },
  {
    type: "challenge",
    title: "Imitate a Statue",
    description: "Mimic a statue for at least five minutes.",
    coins: 600,
  },
  {
    type: "challenge",
    title: "Geoguess yourself",
    description:
      "Without using your phone’s location, find out where you are on Google Maps.",
    coins: 800,
  },
  {
    type: "challenge",
    title: "Estimate a mountain’s height",
    description: "Estimate a mountain's height within 25% accuracy.",
    coins: 750,
  },
  {
    type: "challenge",
    title: "Make fondue",
    description: "Purchase supplies and make fondue.",
    coins: 700,
  },
  {
    type: "challenge",
    title: "Find a Swiss Bunker",
    description: "Locate and document a Swiss bunker.",
    coins: 650,
  },
  {
    type: "multi-challenge",
    title: "Do cartwheels in a Swiss Meadow",
    description: "In 60 seconds, each successful cartwheel earns 10 coins.",
    coins: 50,
  },
  {
    type: "multi-challenge",
    title: "Make a Cheese Board",
    description:
      "In the next 5 minutes, find as many different varieties of cheese as you can. Each variety earns 100 coins.",
    coins: 100,
  },
  {
    type: "multi-challenge",
    title: "Where's The Time?",
    description:
      "In the next 5 minutes, find as many different Swiss clocks as you can. Each clock earns 50 coins.",
    coins: 100,
  },
  {
    type: "cursed!",
    title: "No Google Maps",
    description: "You may not use Google Maps for the rest of the run.",
    coins: 1000,
  },
  {
    type: "cursed!",
    title: "Random Next Train",
    description: "You must take the next train that arrives at a station.",
    coins: 1000,
  },
  {
    type: "cursed!",
    title: "Left Hand",
    description: "You can only use your left hand for the rest of the run",
    coins: 1000,
  },
  {
    type: "cursed!",
    title: "No E",
    description: "You may not use the letter E.",
    coins: 1000,
  },
];

const color = {
  challenge: "#2531d1",
  "cursed!": "rgb(107 33 168)",
  "multi-challenge": "#ffe100",
};

function Card({ challenge }: { challenge: Challenge }): JSX.Element {
  return (
    <div
      className="border-[20px]"
      style={{
        aspectRatio: 8.5 / 11,
        backgroundColor: color[challenge.type],
        borderColor: color[challenge.type],
        color: "white",
      }}
    >
      <div
        className="grid h-full w-full place-items-center rounded-xl border-[1px] border-[#ffffff] p-4 text-center shadow-2xl"
        style={{
          background: `url('/switzerland.png') no-repeat`,
          backgroundSize: `100% 100%`,
          backgroundColor: `#000000`,
        }}
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">
            {capitalize(challenge.type)}
            {challenge.type !== "cursed!" ? ":" : ""} {challenge.title}
          </h2>
          <p className="text-base font-medium">{challenge.description}</p>
          <p className="text-xl font-semibold">
            This challenge is worth {challenge.coins}
            {challenge.type === "multi-challenge" ? "x" : ""} coins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page(): JSX.Element {
  return (
    <div className="grid place-items-center font-sf">
      <div className="grid grid-cols-3">
        {challenges.map((challenge) => (
          <Card challenge={challenge} key={challenge.title} />
        ))}
      </div>
    </div>
  );
}
