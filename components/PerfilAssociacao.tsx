import { Usuario, Lote } from '@/lib/data'; // Importa os tipos

// Este componente recebe dados do usuário e a lista de lotes
export default function PerfilAssociacao({ usuario, lotes }: { usuario: Usuario; lotes: Lote[] }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Painel da Associação</h2>
      <p className="text-gray-600 mb-6">Bem-vindo, {usuario.nome}!</p>

      {/* Seção de Lotes Disponíveis */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Lotes Disponíveis para Coleta</h3>
        <div className="space-y-4">
          {lotes.map((lote) => (
            <div key={lote.id} className="border p-4 rounded-md bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">{lote.material}</p>
                <p className="text-sm text-gray-600">
                  Gerado por: {lote.nomeRestaurante} | Quantidade: {lote.quantidade}
                </p>
                <p className="text-sm text-gray-500 mt-1">Obs: {lote.observacao}</p>
              </div>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Tenho Interesse
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}