import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Mifooter() {
    return (
        <footer id="contact" className="bg-primary text-gray-200 py-6 text-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Texto de copyright */}
                <p className="text-sm">&copy; 2025 Alejandra Rodríguez. Todos los derechos reservados.</p>

                {/* Enlaces a redes sociales */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://github.com/arp-10" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl text-gray-200 hover:text-secondary" />
                    </a>
                    <a href="https://www.linkedin.com/in/alejandra-rodr%C3%ADguez-pe%C3%B1a-36436918b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl text-gray-200 hover:text-secondary" />
                    </a>
                    <a href="mailto:alejandrarodriguezp97gmail.com">
                        <FaEnvelope className="text-3xl text-gray-200 hover:text-secondary" />
                    </a>

                </div>
            </div>
        </footer>


    );
}