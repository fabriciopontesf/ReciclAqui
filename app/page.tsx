export default function Home() {
  return (
    <div className="container mx-auto flex items-center justify-center text-center px-4" style={{ minHeight: 'calc(100vh - 150px)' }}>
      <section className="py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          A ponte entre o seu resíduo e a reciclagem.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Nossa plataforma conecta restaurantes com excesso de recicláveis a associações de coleta que transformam resíduos em recursos.
        </p>

        <div className="mt-10 flex justify-center gap-4 md:gap-6 flex-wrap">
          <a
            href="/perfil"
            className="inline-block bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Sou um Restaurante
          </a>
          <a
            href="/perfil"
            className="inline-block bg-gray-200 text-gray-800 font-bold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            Sou uma Associação
          </a>
        </div>
      </section>
    </div>
  );
}