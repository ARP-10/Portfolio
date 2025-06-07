import { useState } from "react";
import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import {
    SiKotlin,
    SiFirebase,
    SiTailwindcss,
    SiClerk,
    SiTypescript,
    SiApachetomcat,
    SiMysql,
    SiPostgresql,
    SiSpring,
    SiNpm,
} from "react-icons/si";
import {
    FaAndroid,
    FaReact,
    FaNodeJs,
    FaJava,
    FaBootstrap,
    FaAngular,
} from "react-icons/fa";

import Colectif from "../assets/colectif.jpg";
import codepadawan from "../assets/codepadawan.png";
import manga from "../assets/manga.png";
import cuatico from "../assets/cuatico.jpg";

interface Project {
    id: number;
    title: string;
    img: string;
    shortDesc: string;
    fullDesc: string[];
    techIcons: ReactElement[];
    github: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Colectif",
        img: Colectif,
        shortDesc: "Plataforma para compartir cuentas como Netflix o Spotify.",
        fullDesc: [
            "Desarrollada con Kotlin en Android Studio.",
            "Base de datos y autenticación mediante Firebase.",
            "Permite compartir cuentas de forma segura entre usuarios.",
        ],
        techIcons: [
            <SiKotlin key="kotlin" />,
            <FaAndroid key="android" />,
            <SiFirebase key="firebase" />,
        ],
        github: "https://github.com/ARP-10/Colectif",
    },
    {
        id: 2,
        title: "Code Padawan",
        img: codepadawan,
        shortDesc:
            "Conecta aprendices y expertos a través de retos, blogs y rankings.",
        fullDesc: [
            "Desarrollada con React, TypeScript y Tailwind CSS.",
            "Autenticación y gestión de usuarios mediante Clerk.",
            "Base de datos y backend con Firebase y Node.js.",
        ],
        techIcons: [
            <SiTypescript key="ts" />,
            <FaReact key="react" />,
            <SiTailwindcss key="tailwind" />,
            <SiFirebase key="firebase" />,
            <FaNodeJs key="nodejs" />,
            <SiClerk key="clerk" />,
        ],
        github: "https://github.com/itxintxu13/CodePadawan",
    },
    {
        id: 3,
        title: "Biblioteca Manga",
        img: manga,
        shortDesc: "Sistema para gestionar mangas, categorías y alquileres.",
        fullDesc: [
            "Desarrollada con Java utilizando Servlets y JSP.",
            "Estructura MVC con DAO manual para acceso a base de datos.",
            "Alojada en Apache Tomcat con base de datos MySQL y diseño responsivo con Bootstrap.",
        ],
        techIcons: [
            <FaJava key="java" />,
            <SiApachetomcat key="tomcat" />,
            <SiMysql key="mysql" />,
            <FaBootstrap key="bootstrap" />,
        ],
        github: "https://github.com/ARP-10/GestorBibliotecaManga",
    },
    {
        id: 4,
        title: "ERM Cuático",
        img: cuatico,
        shortDesc:
            "Campus virtual para gestión de cursos, alumnos y profesores.",
        fullDesc: [
            "Desarrollado con Angular y Tailwind CSS.",
            "Permite a estudiantes comprar y cursar formaciones online.",
            "Panel administrativo para gestión académica y operativa.",
            "Backend en desarrollo con Spring Boot, Java y PostgreSQL.",
        ],
        techIcons: [
            <FaAngular key="angular" />,
            <SiTailwindcss key="tailwind" />,
            <SiTypescript key="ts" />,
            <FaJava key="java" />,
            <SiPostgresql key="postgresql" />,
            <SiSpring key="spring" />,
            <SiNpm key="npm" />,
        ],
        github: "https://github.com/elurg/cuatico-dev",
    },
];

export default function Projects() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(id);
    };

    const closeModal = () => setExpandedId(null);

    const project = projects.find((p) => p.id === expandedId) ?? null;

    return (
        <div id="projects" className="bg-polka-dots text-primary p-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">

                {projects.map(({ id, title, img, shortDesc, techIcons, github }) => (
                    <div
                        key={id}
                        className="bg-secondary rounded-lg shadow-md w-96 flex flex-col justify-between p-4"
                    >
                        <div>
                            <img
                                src={img}
                                alt={title}
                                className="rounded-lg w-40 mx-auto border-4 border-primary"
                            />
                            <h3 className="text-lg font-bold text-primary text-center mt-3">
                                {title}
                            </h3>
                            <p className="text-white text-center mt-2">{shortDesc}</p>
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                            <div className="flex space-x-3 text-primary text-xl">
                                {techIcons.map((icon, i) => (
                                    <span key={i} className="hover:text-white transition">
                                        {icon}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-white bg-primary rounded-full p-2 hover:bg-primary/90 transition shadow-lg hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                        </div>

                        <button
                            onClick={() => toggleExpand(id)}
                            className="mt-4 w-full bg-primary text-secondary py-1 rounded hover:bg-primary/80 transition font-semibold"
                        >
                            Más info
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {project && (
                <Modal onClose={closeModal}>
                    <h2 className="text-2xl font-bold mb-4 text-primary">{project.title}</h2>
                    <img
                        src={project.img}
                        alt={project.title}
                        className="rounded-lg w-48 mx-auto border-4 border-primary mb-4"
                    />
                    <ul className="text-white list-disc list-inside space-y-2 mb-4">
                        {project.fullDesc.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                    <div className="flex space-x-4 text-primary text-2xl mb-4 justify-center">
                        {project.techIcons.map((icon, i) => (
                            <span key={i} className="hover:text-white transition">
                                {icon}
                            </span>
                        ))}
                    </div>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white underline block text-center"
                    >
                        Ver en GitHub
                    </a>
                    <button
                        onClick={closeModal}
                        className="mt-6 bg-primary text-secondary py-2 px-4 rounded hover:bg-primary/80 transition"
                    >
                        Cerrar
                    </button>
                </Modal>
            )}
        </div>
    );
}

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-secondary rounded-lg p-6 max-w-md w-full shadow-lg"
                onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click dentro
            >
                {children}
            </div>
        </div>
    );
}
