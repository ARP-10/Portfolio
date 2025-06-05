import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Mifooter() {
    return (
        <footer className="bg-primary text-gray-200 py-6 text-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Texto de copyright */}
                <p className="text-sm">&copy; 2025 Alejandra Rodríguez. Todos los derechos reservados.</p>

                {/* Enlaces a redes sociales */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://github.com/arp-10" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl text-gray-200 hover:text-secondary" />
                    </a>
                    <a href="https://linkedin.com/in/tunombre" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl text-gray-200 hover:text-secondary" />
                    </a>
                    <a href="mailto:contacto@miportfolio.com">
                        <FaEnvelope className="text-3xl text-gray-200 hover:text-secondary" />
                    </a>

                </div>
            </div>
        </footer>


    );
}