import { FaGithub, FaAndroid, FaReact, FaNodeJs, FaJava, FaBootstrap, FaAngular } from "react-icons/fa";
import { SiKotlin, SiFirebase, SiTailwindcss, SiClerk, SiTypescript, SiApachetomcat, SiMysql, SiPostgresql, SiSpring, SiNpm } from "react-icons/si";
import Colectif from "../assets/colectif.jpg";
import codepadawan from "../assets/codepadawan.png"
import manga from "../assets/manga.png"
import cuatico from "../assets/cuatico.jpg"


export default function Projects() {
    return (
        <div className="">
            {/* COLECTIF */}
            <div className="bg-secondary p-4 w-72 rounded-lg m-2">
                <div className="flex justify-center">
                    <img src={Colectif} alt="Colectif" className="rounded-lg w-40 border-4 border-primary" />

                </div>
                <p className="text-lg text-primary font-bold p-2">Colectif</p>
                <ul className="text-sm list-disc list-inside text-white p-2 space-y-2">
                    <li>Desarrollada con Kotlin en Android Studio.</li>
                    <li>Base de datos y autenticación mediante Firebase.</li>
                    <li>Permite compartir cuentas como Netflix o Spotify.</li>
                    <li>Enlace seguro entre usuarios conocidos y desconocidos.</li>
                </ul>
                {/* Tecnologías */}
                <div className="flex justify-center space-x-4 m-4">
                    <SiKotlin title="Kotlin" className="text-primary text-xl" />
                    <FaAndroid title="Andorid Studio" className="text-primary text-xl" />
                    <SiFirebase title="Firebase" className="text-primary text-xl" />
                </div>
                <div className="flex justify-end">
                    <a href="https://github.com/ARP-10/Colectif" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-primary hover:text-white rounded transition duration-250" />
                    </a>
                </div>
            </div>

            {/* CODE PADAWAN */}
            <div className="bg-secondary p-4 w-72 rounded-lg m-2">
                <div className="flex justify-center">
                    <img src={codepadawan} alt="CodePadawan" className="rounded-lg w-40 border-4 border-primary" />
                </div>
                <p className="text-lg text-primary font-bold p-2">Code Padawan</p>
                <ul className="text-sm list-disc list-inside text-white p-2 space-y-2">
                    <li>Desarrollada con React, TypeScript y Tailwind CSS.</li>
                    <li>Autenticación y gestión de usuarios mediante Clerk.</li>
                    <li>Base de datos y lógica backend con Firebase y Node.js.</li>
                    <li>Conecta aprendices y expertos a través de retos, blogs y rankings.</li>
                </ul>
                {/* Tecnologías */}
                <div className="flex justify-center space-x-4 m-4">
                    <SiTypescript title="Typescript" className="text-primary text-xl" />
                    <FaReact title="React" className="text-primary text-xl" />
                    <SiTailwindcss title="Tawilwind css" className="text-primary text-xl" />
                    <SiFirebase title="Firebase" className="text-primary text-xl" />
                    <FaNodeJs title="Nodejs" className="text-primary text-xl" />
                    <SiClerk title="Clerk" className="text-primary text-xl" />

                </div>
                <div className="flex justify-end">
                    <a href="https://github.com/itxintxu13/CodePadawan" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-primary hover:text-white rounded transition duration-250" />
                    </a>
                </div>
            </div>

            {/* MANGA */}
            <div className="bg-secondary p-4 w-72 rounded-lg m-2">
                <div className="flex justify-center">
                    <img src={manga} alt="Manga" className="rounded-lg w-40 border-4 border-primary" />

                </div>
                <p className="text-lg text-primary font-bold p-2">Biblioteca Manga</p>
                <ul className="text-sm list-disc list-inside text-white p-2 space-y-2">
                    <li>Desarrollada con Java utilizando Servlets y JSP.</li>
                    <li>Estructura MVC con DAO manual para acceso a base de datos.</li>
                    <li>Permite gestionar mangas, categorías y alquileres.</li>
                    <li>Alojada en Apache Tomcat con base de datos MySQL y diseño responsivo con Bootstrap.</li>
                </ul>
                {/* Tecnologías */}
                <div className="flex justify-center space-x-4 m-4">
                    <FaJava title="Java" className="text-primary text-3xl" />
                    <SiApachetomcat title="Tomcat" className="text-primary text-3xl" />
                    <SiMysql title="Mysql" className="text-primary text-3xl" />
                    <FaBootstrap title="Bootstrap" className="text-primary text-3xl" />
                </div>
                <div className="flex justify-end">
                    <a href="https://github.com/ARP-10/GestorBibliotecaManga" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-primary hover:text-white rounded transition duration-250" />
                    </a>
                </div>
            </div>

            {/* CUÁTICO */}
            <div className="bg-secondary p-4 w-72 rounded-lg m-2">
                <div className="flex justify-center">
                    <img src={cuatico} alt="Cuático" className="bg-white rounded-lg w-40 border-4 border-primary" />
                </div>
                <p className="text-lg text-primary font-bold p-2">ERM Cuático</p>
                <ul className="text-sm list-disc list-inside text-white p-2 space-y-2">
                    <li>Desarrollada con Angular y Tailwind CSS.</li>
                    <li>Campus virtual para gestión de cursos, alumnos y profesores.</li>
                    <li>Permite a los estudiantes comprar y cursar formaciones online.</li>
                    <li>Incluye panel administrativo para la gestión académica y operativa.</li>
                    <li>Backend en desarrollo con Spring Boot, Java y PostgreSQL.</li>
                </ul>
                {/* Tecnologías */}
                <div className="flex justify-center space-x-4 m-4">
                    <FaAngular title="Angular" className="text-primary text-xl" />
                    <SiTailwindcss title="Tailwind" className="text-primary text-xl" />
                    <SiTypescript title="typescript" className="text-primary text-xl" />
                    <FaJava title="Java" className="text-primary text-xl" />
                    <SiPostgresql title="Postgres" className="text-primary text-xl" />
                    <SiSpring title="Spring" className="text-primary text-xl" />
                    <SiNpm title="Spring" className="text-primary text-xl" />
                </div>
                <div className="flex justify-end">
                    <a href="https://github.com/elurg/cuatico-dev" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-primary hover:text-white rounded transition duration-250" />
                    </a>
                </div>
            </div>
        </div>
    );
}