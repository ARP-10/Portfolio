import { useState, useEffect } from "react";
import {
  SiTailwindcss, SiClerk, SiNpm, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiExpress,
  SiPhp, SiVite, SiDart, SiKotlin, SiFlutter, SiFirebase, SiApachetomcat,
  SiMysql, SiPostgresql, SiSpring, SiHibernate, SiSqlite, SiPython, SiMongodb, SiMariadb,
  SiGodotengine, SiGithubpages, SiVercel, SiSonarqube, SiVagrant, SiVirtualbox, SiJira,
  SiSlack, SiMiro
} from "react-icons/si";

import {
  FaReact, FaNodeJs, FaBootstrap, FaAngular, FaJava, FaAndroid, FaUnity,
  FaGithub, FaGit, FaDocker, FaFigma
} from "react-icons/fa";
import type { IconType } from "react-icons";

// Define the shape of each technology item
interface Technology {
  icon: IconType;
  label: string;
}

export default function Technologies() {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Get the bounding box of the component's container
      const container = event.currentTarget.getBoundingClientRect();
      // Calculate position relative to the container
      const x = event.clientX - container.left;
      const y = event.clientY - container.top;
      setMousePosition({ x, y });
    };

    // Attach event listener to the container
    const container = document.querySelector(".technologies-container") as HTMLElement;
    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on unmount
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Define technology arrays with explicit types
  const frontendTechnologies: Technology[] = [
    { icon: SiTailwindcss, label: "Tailwind CSS" },
    { icon: SiClerk, label: "Clerk" },
    { icon: FaReact, label: "React" },
    { icon: FaNodeJs, label: "Node.js" },
    { icon: SiNpm, label: "NPM" },
    { icon: FaBootstrap, label: "Bootstrap" },
    { icon: FaAngular, label: "Angular" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiHtml5, label: "HTML5" },
    { icon: SiCss3, label: "CSS3" },
    { icon: SiExpress, label: "Express" },
    { icon: SiPhp, label: "PHP" },
    { icon: SiVite, label: "Vite" },
  ];

  const backendTechnologies: Technology[] = [
    { icon: FaJava, label: "Java" },
    { icon: SiDart, label: "Dart" },
    { icon: SiKotlin, label: "Kotlin" },
    { icon: FaAndroid, label: "Android" },
    { icon: SiFlutter, label: "Flutter" },
    { icon: SiFirebase, label: "Firebase" },
    { icon: SiApachetomcat, label: "Apache Tomcat" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiSpring, label: "Spring" },
    { icon: SiHibernate, label: "Hibernate" },
    { icon: SiSqlite, label: "SQLite" },
    { icon: SiPython, label: "Python" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiMariadb, label: "MariaDB" },
    { icon: FaUnity, label: "Unity" },
    { icon: SiGodotengine, label: "Godot" },
  ];

  const otherTechnologies: Technology[] = [
    { icon: FaGithub, label: "GitHub" },
    { icon: SiGithubpages, label: "GitHub Pages" },
    { icon: SiVercel, label: "Vercel" },
    { icon: FaGit, label: "Git" },
    { icon: FaDocker, label: "Docker" },
    { icon: SiSonarqube, label: "SonarQube" },
    { icon: SiVagrant, label: "Vagrant" },
    { icon: SiVirtualbox, label: "VirtualBox" },
    { icon: SiJira, label: "Jira" },
    { icon: SiSlack, label: "Slack" },
    { icon: SiMiro, label: "Miro" },
    { icon: FaFigma, label: "Figma" },
  ];

  return (
    <div className="relative flex gap-10 justify-center text-4xl my-6 text-primary technologies-container">
      {/* Pointer element */}
      <div
        className="absolute w-4 h-4 bg-primary/35 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        aria-hidden="true"
      />

      {/* Frontend */}
      <div className="flex flex-wrap justify-center gap-6 max-w-xs">
        {frontendTechnologies.map(({ icon: Icon, label }) => (
          <Icon
            key={label}
            title={label}
            className="text-secondary hover:text-primary transition-colors cursor-pointer"
            aria-label={label}
          />
        ))}
      </div>

      {/* Backend */}
      <div className="flex flex-wrap justify-center gap-6 max-w-xs">
        {backendTechnologies.map(({ icon: Icon, label }) => (
          <Icon
            key={label}
            title={label}
            className="text-secondary hover:text-primary transition-colors cursor-pointer"
            aria-label={label}
          />
        ))}
      </div>

      {/* Otros */}
      <div className="flex flex-wrap justify-center gap-6 max-w-xs">
        {otherTechnologies.map(({ icon: Icon, label }) => (
          <Icon
            key={label}
            title={label}
            className="text-secondary hover:text-primary transition-colors cursor-pointer"
            aria-label={label}
          />
        ))}
      </div>
    </div>
  );
}