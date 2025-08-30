import { mockUsuarios, mockLotes } from "@/lib/data";
import PerfilRestaurante from "@/components/PerfilRestaurante";
import PerfilAssociacao from "@/components/PerfilAssociacao";

// A página agora recebe uma propriedade especial 'searchParams' do Next.js
export default function PerfilPage({ searchParams }: { searchParams: { tipo?: string } }) {
  
  // 1. Lemos o parâmetro 'tipo' da URL.
  // Ele pode ser 'restaurante', 'associacao', ou indefinido se o usuário acessar /perfil diretamente.
  const tipoDeUsuario = searchParams.tipo;

  // 2. Procuramos o usuário correspondente ao tipo recebido.
  // Se o tipo não for informado na URL, vamos usar o restaurante como padrão.
  const usuarioLogado = mockUsuarios.find(usuario => usuario.tipo === tipoDeUsuario) || mockUsuarios[0];

  // 3. A lógica de renderização condicional continua a mesma, mas agora é dinâmica!
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