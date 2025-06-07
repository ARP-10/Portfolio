import Ale from "../assets/Ale.jpg";

export default function Header() {
  return (
    <header id="about" className="bg-primary flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      <div>
        <img
          src={Ale}
          alt="Alejandra"
          className="w-48 md:w-64 border-4 border-secondary rounded-lg"
        />
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-2xl text-secondary font-bold">Alejandra Rodríguez</h1>
        <p className="text-white mt-2 max-w-xl">
          Desarrolladora Full Stack con enfoque en crear soluciones web y móviles funcionales, accesibles y escalables. Apasionada por la tecnología, el aprendizaje continuo y la construcción de productos que mejoran la experiencia del usuario.
        </p>
      </div>
    </header>
  );
}
