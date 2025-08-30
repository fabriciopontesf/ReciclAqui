import { mockUsuarios, mockLotes } from "@/lib/data";
import PerfilRestaurante from "@/components/PerfilRestaurante";
import PerfilAssociacao from "@/components/PerfilAssociacao";

export default function PerfilPage() {
  // --- SIMULAÇÃO DE LOGIN ---
  // Em uma aplicação real, você teria um sistema de autenticação.
  // Aqui, vamos apenas escolher qual usuário está "logado" mudando o índice do array.
  // Mude para mockUsuarios[1] para ver o perfil da Associação.
  const usuarioLogado = mockUsuarios[1]; // 0 = Restaurante, 1 = Associação

  return (
    <div className="container mx-auto flex flex-col items-center py-10 px-4">
      {usuarioLogado.tipo === 'restaurante' ? (
        <PerfilRestaurante usuario={usuarioLogado} />
      ) : (
        <PerfilAssociacao usuario={usuarioLogado} lotes={mockLotes} />
      )}
    </div>
  );
}