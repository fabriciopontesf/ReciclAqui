// app/perfil/page.tsx
import { mockUsuarios } from "@/lib/data";
import PerfilRestaurante from "@/components/PerfilRestaurante";
import PerfilAssociacao from "@/components/PerfilAssociacao";

// No App Router, searchParams é async — precisamos aguardar
type PageProps = {
  searchParams: Promise<{ tipo?: "restaurante" | "associacao" | string }>;
};

export default async function PerfilPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const tipoParam = params?.tipo?.toLowerCase();

  // default para "restaurante" se o param vier vazio/errado
  const tipoDeUsuario: "restaurante" | "associacao" =
    tipoParam === "associacao" || tipoParam === "restaurante"
      ? (tipoParam as "restaurante" | "associacao")
      : "restaurante";

  const usuarioLogado =
    mockUsuarios.find((u) => u.tipo === tipoDeUsuario) || mockUsuarios[0];

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950">
      <section className="container mx-auto flex flex-col items-center py-10 px-4">
        {usuarioLogado.tipo === "restaurante" ? (
          <PerfilRestaurante usuario={usuarioLogado} />
        ) : (
          <PerfilAssociacao usuario={usuarioLogado} />
        )}
      </section>
    </main>
  );
}