import {
  SiTailwindcss, SiClerk, SiNpm, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiExpress,
  SiPhp, SiVite, SiDart, SiKotlin, SiFlutter, SiFirebase, SiApachetomcat,
  SiMysql, SiPostgresql, SiSpring, SiHibernate, SiSqlite, SiPython, SiMongodb, SiMariadb,
  SiGodotengine, SiGithubpages, SiVercel, SiSonarqube, SiVagrant, SiVirtualbox, SiJira,
  SiSlack, SiMiro, SiAstro
} from "react-icons/si";
import {
  FaReact, FaNodeJs, FaBootstrap, FaAngular, FaJava, FaAndroid, FaUnity,
  FaGithub, FaGit, FaDocker, FaFigma
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Technology {
  icon: IconType;
  label: string;
}

const frontendTechnologies: Technology[] = [
  { icon: FaReact, label: "React" },
  { icon: SiAstro, label: "Astro" },
  { icon: FaAngular, label: "Angular" },
  { icon: FaBootstrap, label: "Bootstrap" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: SiFlutter, label: "Flutter" },
];

const backendTechnologies: Technology[] = [
  { icon: FaJava, label: "Java" },
  { icon: SiPhp, label: "PHP" },
  { icon: SiPython, label: "Python" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiMariadb, label: "MariaDB" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiSqlite, label: "SQLite" },
  { icon: SiSpring, label: "Spring" },
  { icon: SiHibernate, label: "Hibernate" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiApachetomcat, label: "Apache Tomcat" },
];

const mobileTechnologies: Technology[] = [
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiDart, label: "Dart" },
  { icon: SiKotlin, label: "Kotlin" },
  { icon: FaAndroid, label: "Android" },
];

const gameTechnologies: Technology[] = [
  { icon: FaUnity, label: "Unity" },
  { icon: SiGodotengine, label: "Godot" },
];

const otherTechnologies: Technology[] = [
  { icon: FaGithub, label: "GitHub" },
  { icon: SiGithubpages, label: "GitHub Pages" },
  { icon: FaGit, label: "Git" },
  { icon: FaDocker, label: "Docker" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiSonarqube, label: "SonarQube" },
  { icon: SiVagrant, label: "Vagrant" },
  { icon: SiVirtualbox, label: "VirtualBox" },
  { icon: SiJira, label: "Jira" },
  { icon: SiSlack, label: "Slack" },
  { icon: SiMiro, label: "Miro" },
  { icon: FaFigma, label: "Figma" },
  { icon: SiClerk, label: "Clerk" },
  { icon: SiNpm, label: "NPM" },
  { icon: SiVite, label: "Vite" },
];

const TechnologyGroup = ({
  title,
  items,
}: {
  title: string;
  items: Technology[];
}) => (
  
    <div className="flex flex-col items-center gap-4 max-w-xs m-3 ">
      <h3 className="text-lg font-semibold text-center text-primary/80">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6 mt-3">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="relative group flex flex-col items-center"
          >
            <span className="absolute -top-6 text-sm text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
            <Icon
              title={label}
              className="text-secondary hover:text-tertiary transition-all transform hover:scale-110 cursor-pointer"
              aria-label={label}
            />
          </div>
        ))}
      </div>
    </div>

);

export default function Technologies() {
  return (
    <div className="w-full m-0 p-0 bg-secondary/10">
    <section className="p-8 technologies-container px-4 ">
      <h2 className="text-3xl font-bold text-center text-primary mb-10 relative">
        Stack tecnológico
        <span className="block w-24 h-1 bg-tertiary rounded mx-auto mt-2"></span>
      </h2>

      <div className="flex flex-wrap gap-10 justify-center text-4xl">
        <TechnologyGroup title="Frontend" items={frontendTechnologies} />
        <TechnologyGroup title="Backend" items={backendTechnologies} />
        <TechnologyGroup title="Mobile" items={mobileTechnologies} />
        <TechnologyGroup title="Game" items={gameTechnologies} />
        <TechnologyGroup title="Otros" items={otherTechnologies} />
      </div>
    </section>
</div>
  );
}
