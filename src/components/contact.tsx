export default function Contact() {
  return (
    <section id="contact" className="bg-polka-dots text-primary py-8 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6 relative inline-block">
          Contacto
          <span className="block w-20 h-1 bg-tertiary rounded mx-auto mt-2"></span>
        </h2>
        <p className="text-primary mb-10">
          ¿Quieres trabajar conmigo? ¡Escríbeme!
        </p>
        
        <form 
          className="bg-secondary/80 p-8 rounded-lg shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Mensaje enviado!");
          }}
        >
          <label className="block mb-3 text-primary text-left font-medium" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full p-3 rounded border border-primary/50 bg-secondary text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-tertiary mb-6"
          />

          <label className="block mb-3 text-primary text-left font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="w-full p-3 rounded border border-primary/50 bg-secondary text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-tertiary mb-6"
          />

          <label className="block mb-3 text-primary text-left font-medium" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            required
            className="w-full p-3 rounded border border-primary/50 bg-secondary text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-tertiary mb-6 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-transparent text-primary font-bold py-3 px-6 rounded w-full border-2 border-primary hover:bg-tertiary hover:border-tertiary transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
