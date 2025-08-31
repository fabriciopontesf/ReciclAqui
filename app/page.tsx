// app/page.tsx (Home)
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950">
      {/* glow de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7ed957] opacity-20 blur-3xl" />
      </div>

      <section className="mx-auto w-full max-w-5xl px-4 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          A ponte entre o seu resíduo e a{" "}
          <span className="text-[#7ed957]">reciclagem</span>.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
          Conectamos restaurantes que separam materiais recicláveis a associações
          de coleta — transformando resíduos em recursos.
        </p>

        <div className="mt-10 flex justify-center gap-4 md:gap-6 flex-wrap">
          <Link
            href="/perfil?tipo=restaurante"
            className="inline-flex items-center justify-center rounded-xl bg-[#7ed957] px-7 py-3 text-base md:text-lg font-bold text-black shadow-lg shadow-[#7ed957]/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#7ed957]/40"
          >
            Disponibilzar lote
          </Link>

          <Link
            href="/perfil?tipo=associacao"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-base md:text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Retirar lote
          </Link>
        </div>

        {/* mini features */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm text-neutral-300">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            🔄 Logística simples
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            ✅ Registro com foto
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            ♻️ Incentivo à reciclagem
          </div>
        </div>
      </section>
    </main>
  );
}