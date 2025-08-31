"use client";

import { useState, FormEvent, useMemo } from "react";
import { Usuario, Lote } from "@/lib/data";

type Props = { usuario: Usuario };

export default function PerfilRestaurante({ usuario }: Props) {
  const [material, setMaterial] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [enviando, setEnviando] = useState(false);

  const preview = useMemo(() => {
    if (!arquivo) return "";
    return URL.createObjectURL(arquivo);
  }, [arquivo]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!material || !arquivo) return alert("Preencha os campos.");

    try {
      setEnviando(true);

      // Recupera lotes existentes
      const existing = localStorage.getItem("lotes");
      let lotes: Lote[] = existing ? JSON.parse(existing) : [];

      // Novo lote
      const novoLote: Lote = {
        id: Date.now(), // id simples
        material,
        nomeRestaurante: usuario.nome,
        quantidade: arquivo.name, // por enquanto só o nome do arquivo
        observacao: `Tamanho ${(arquivo.size / 1024 / 1024).toFixed(2)} MB`,
      };

      // Salva no localStorage
      lotes.push(novoLote);
      localStorage.setItem("lotes", JSON.stringify(lotes));

      alert("Lote registrado e salvo no navegador ✅");

      // Reset do formulário
      setMaterial("");
      setArquivo(null);
      (document.getElementById("registro") as HTMLInputElement).value = "";
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 py-10 px-4">
      <div className="mx-auto w-full max-w-5xl">
        {/* CARD */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl">
          {/* HEADER */}
          <div className="p-8 sm:p-10 border-b border-white/10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Painel do restaurante
            </h2>
            <p className="mt-2 text-neutral-300">
              Bem-vindo, <span className="font-semibold">{usuario.nome}</span>!
            </p>
          </div>

          {/* CONTENT */}
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Cadastrar novo lote para coleta
            </h3>

            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              {/* Tipo de Material */}
              <div className="md:col-span-1">
                <label
                  htmlFor="material"
                  className="block text-sm font-medium text-neutral-200"
                >
                  Tipo de Material
                </label>
                <div className="mt-2 relative">
                  <select
                    id="material"
                    name="material"
                    className="peer w-full appearance-none rounded-xl border border-white/15 bg-white/10 text-white placeholder-neutral-400 px-4 py-3 pr-10 shadow-sm outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    required
                  >
                    <option value="" disabled className="bg-neutral-800">
                      Selecione um material
                    </option>
                    <option value="metal" className="bg-neutral-900">
                      Metal
                    </option>
                    <option value="plastico" className="bg-neutral-900">
                      Plástico
                    </option>
                    <option value="papelao" className="bg-neutral-900">
                      Papelão
                    </option>
                    <option value="vidro" className="bg-neutral-900">
                      Vidro
                    </option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-400">
                    ▼
                  </span>
                </div>
              </div>

              {/* Upload + Preview */}
              <div className="md:col-span-1">
                <label
                  htmlFor="registro"
                  className="block text-sm font-medium text-neutral-200"
                >
                  Registro (imagem do lote)
                </label>
                <label
                  htmlFor="registro"
                  className="mt-2 flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-8 text-center transition hover:border-emerald-400/50 hover:bg-white/10"
                >
                  <div>
                    <div className="text-sm font-medium text-white">
                      Clique para selecionar
                    </div>
                    <div className="text-xs text-neutral-400">
                      JPG, PNG ou HEIC — até ~10MB
                    </div>
                  </div>
                </label>
                <input
                  id="registro"
                  name="registro"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) =>
                    setArquivo(e.target.files ? e.target.files[0] : null)
                  }
                  required
                />

                {arquivo && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={preview}
                      alt="Pré-visualização"
                      className="h-16 w-16 rounded-lg object-cover ring-1 ring-white/20"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">
                        {arquivo.name}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {(arquivo.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="md:col-span-2 flex justify-start">
                <button
                  type="submit"
                  disabled={enviando}
                  className="inline-flex items-center justify-center rounded-xl bg-[#7ed957] px-6 py-3 text-base font-bold text-emerald-950 shadow-lg shadow-[#7ed957]/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#7ed957]/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {enviando ? "Enviando..." : "Disponibilizar Lote"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Dica: mantenha a imagem nítida e bem iluminada para facilitar a
          validação da coleta.
        </p>
      </div>
    </div>
  );
}