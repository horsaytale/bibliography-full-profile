import { useReducer } from "react";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "green",
  },
];

const projects = [
  {
    name: "Currency Converter",
    image: [
      "./pictures/bling-money.png",
      "./pictures/money-bag.png",
      "./pictures/money-up.png",
    ],
    github: "https://github.com/horsaytale/currency-converter-challenge",
    website: "https://horsaytale.github.io/currency-converter-app/",
  },
  {
    name: "Eat-N-Split",
    image: [
      "./pictures/bibimbap.png",
      "./pictures/burger.png",
      "./pictures/cake.png",
    ],
    github: "https://github.com/horsaytale/eat-and-split-challenge",
    website: "https://horsaytale.github.io/eat-and-split-app/",
  },
  {
    name: "React Bank Account",
    image: [
      "./pictures/bank.png",
      "./pictures/money.png",
      "./pictures/card.png",
    ],
    github: "https://github.com/horsaytale/bank-account-project",
    website: "https://horsaytale.github.io/react-bank-account-app/",
  },
  {
    name: "Pizza Menu",
    image: [
      "./pictures/pizza.png",
      "./pictures/pizza-2.png",
      "./pictures/pizza-3.png",
    ],
    github: "https://github.com/horsaytale/pizza-menu",
    website: "https://horsaytale.github.io/pizza-menu-web",
  },
  {
    name: "Guess My Number",
    image: [
      "./pictures/num-6.png",
      "./pictures/question-mark.png",
      "./pictures/num-2.png",
    ],
    github: "https://github.com/horsaytale/guess-my-number",
    website: "https://horsaytale.github.io/guess-my-number/",
  },
  {
    name: "Pig Game",
    image: [
      "./pictures/pig.png",
      "./pictures/playstation.png",
      "./pictures/sword.png",
    ],
    github: "https://github.com/horsaytale/pig-game",
    website: "https://horsaytale.github.io/pig-game/",
  },
  {
    name: "Python Projects",
    image: [
      "./pictures/snake.png",
      "./pictures/python-symbol.png",
      "./pictures/code.png",
    ],
    github: "https://github.com/horsaytale/Python-Projects",
    website: "",
  },
];

const initialState = {
  status: "home",
};

function reducer(state, action) {
  switch (action.type) {
    case "firstPage":
      return { ...state, status: "home" };

    case "secondPage":
      return { ...state, status: "portfolio" };

    case "thirdPage":
      return { ...state, status: "skills" };

    default:
      return;
  }
}

export default function App() {
  const [{ status }, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="card">
      <NavBar dispatch={dispatch} />

      <div>
        <Avatar />
        <div className="data">
          {status === "home" && <Intro />}
          {status === "portfolio" && <Portfolio />}
          {status === "skills" && <SkillList />}
        </div>
      </div>
    </div>
  );
}

function NavBar({ dispatch }) {
  return (
    <div>
      <ul className="nav">
        <li onClick={() => dispatch({ type: "firstPage" })}>About</li>
        <li onClick={() => dispatch({ type: "secondPage" })}>Portfolio</li>
        <li onClick={() => dispatch({ type: "thirdPage" })}>Skills</li>
      </ul>
    </div>
  );
}

function Avatar() {
  return (
    <img src="./pictures/self-bio.jpg" className="avatar" alt="Name of Bio" />
  );
}

function Intro() {
  return (
    <div>
      <div className="intro-profile">
        <h1>Amber Lim</h1>
        <img src="./pictures/home-background.png" />
      </div>
      <p>Eager to Learn & Explore .</p>
      <p>
        When not coding, I enjoy listening to songs, play some cool RPG games
        and read some spooky horror story books.
      </p>
      <p className="hands-on">Completed / Published / Work-In-Progress:</p>
      <div className="completed-project">
        <div>
          <p>AMB Website</p>
          <img src="./pictures/arrow.png" />
          <a href="https://www.ambpiramid.com.my/">[ LINK ]</a>
        </div>
        <div>
          <p>AEM Website</p>
          <img src="./pictures/arrow.png" />
          <a href="https://www.aemabr.com.my/">[ LINK ]</a>
        </div>
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <>
      <h2>Skill List</h2>
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        ))}
      </div>
      <h2 className="language">Language</h2>
      <div className="language-details">
        <div>English</div>
        <div>Bahasa Melayu</div>
      </div>
    </>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "💪"}
        {level === "advanced" && "👍"}
      </span>
    </div>
  );
}

function Portfolio() {
  return (
    <ul>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
}

function Project({ project }) {
  return (
    <li className="project">
      <div className="name-details">
        <p>{project.name}</p>
        {project.image.map((img) => (
          <img src={img} />
        ))}
      </div>
      <div>
        <a href={project.github}>Git Hub</a>
        {project.website !== "" && (
          <a className="dark-button" href={project.website}>
            Website
          </a>
        )}
      </div>
    </li>
  );
}
