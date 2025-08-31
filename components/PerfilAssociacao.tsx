"use client";

import { useEffect, useState } from "react";
import { Usuario, Lote } from "@/lib/data";

type Props = {
  usuario: Usuario;
  lotes?: Lote[]; // opcional
};

export default function PerfilAssociacao({ usuario, lotes }: Props) {
  const [storedLotes, setStoredLotes] = useState<Lote[]>([]);

  // Carregar lotes do localStorage quando montar
  useEffect(() => {
    const data = localStorage.getItem("lotes");
    if (data) {
      try {
        setStoredLotes(JSON.parse(data));
      } catch (err) {
        console.error("Erro ao parsear lotes do localStorage", err);
      }
    }
  }, []);

  // Badge por material
  const badgeClasses = (m: string) => {
    const base =
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1";
    switch (m?.toLowerCase()) {
      case "metal":
        return `${base} bg-yellow-500/15 text-yellow-300 ring-yellow-400/30`;
      case "vidro":
        return `${base} bg-emerald-500/15 text-emerald-300 ring-emerald-400/30`;
      default:
        return `${base} bg-neutral-500/15 text-neutral-300 ring-neutral-400/30`;
    }
  };

  // número fixo do restaurante (protótipo)
  const numberWhats = "5535998872650";

  const mkWhatsMsg = (l: Lote) =>
    encodeURIComponent(
      `Olá, aqui é da associação! Temos interesse em coletar o lote #${l.id}.
Restaurante: ${l.nomeRestaurante}
Material: ${l.material ?? "-"}`
    );

  const whatsHref = (l: Lote) =>
    `https://wa.me/${numberWhats}?text=${mkWhatsMsg(l)}`;

  // Decide o que mostrar: props > localStorage
  const data = lotes && lotes.length ? lotes : storedLotes;

  // Helper para destacar label + valor
  const Line = ({
    label,
    value,
  }: {
    label: string;
    value: string | number | undefined | null;
  }) => (
    <p className="text-sm text-neutral-300">
      <span className="text-neutral-400">{label}: </span>
      <span className="font-medium text-white">{value ?? "-"}</span>
    </p>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 py-10 px-4">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl">
          {/* Header */}
          <div className="p-8 sm:p-10 border-b border-white/10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Painel da Associação
            </h2>
            <p className="mt-2 text-neutral-300">
              Bem-vindo, <span className="font-semibold">{usuario.nome}</span>!
            </p>
          </div>

          {/* Lista de lotes */}
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Lotes Disponíveis para Coleta
            </h3>

            {data.length ? (
              <ul className="grid gap-5 md:grid-cols-2">
                {data.map((lote) => (
                  <li
                    key={lote.id}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        {/* Badge + ID */}
                        <div className="flex items-center gap-2">
                          <span className={badgeClasses(lote.material)}>
                            {lote.material}
                          </span>
                          <span className="text-xs text-neutral-400">
                            #{lote.id}
                          </span>
                        </div>

                        {/* Restaurante */}
                        <p className="mt-2 text-sm text-neutral-300">
                          <span className="font-semibold text-white">
                            {lote.nomeRestaurante}
                          </span>
                        </p>

                        {/* Material explícito + Arquivo (antes era Quantidade) */}
                        <div className="mt-1 space-y-1">
                          <Line label="Arquivo" value={lote.quantidade} />
                          {lote.observacao && (
                            <p className="text-xs text-neutral-400">
                              Obs: {lote.observacao}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={whatsHref(lote)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#7ed957] px-5 text-sm font-bold text-black shadow-lg shadow-[#7ed957]/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#7ed957]/40"
                      >
                        Avisar Restaurante
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-8 text-center">
                <p className="text-neutral-300">
                  Nenhum lote disponível no momento.
                </p>
                <p className="text-neutral-400 text-sm">
                  Assim que um restaurante publicar um novo lote, ele aparecerá
                  aqui.
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Dica: priorize lotes próximos para reduzir custo e tempo de coleta.
        </p>
      </div>
    </div>
  );
}