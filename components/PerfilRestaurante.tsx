import { Usuario } from '@/lib/data'; // Importa o tipo 'Usuario'

// O componente recebe os dados do usuário como uma "propriedade" (prop)
export default function PerfilRestaurante({ usuario }: { usuario: Usuario }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Painel do Restaurante</h2>
      <p className="text-gray-600 mb-6">Bem-vindo, {usuario.nome}!</p>

      {/* Seção de Cadastro de Lote */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Cadastrar Novo Lote para Coleta</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="material" className="block text-sm font-medium text-gray-700">Tipo de Material</label>
            <input type="text" id="material" name="material" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="Ex: Garrafas PET, Papelão, Óleo" />
          </div>
          <div>
            <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">Quantidade Aproximada</label>
            <input type="text" id="quantidade" name="quantidade" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="Ex: 10 kg, 5 caixas, 20 litros" />
          </div>
          <button type="submit" className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
            Disponibilizar Lote
          </button>
        </form>
      </div>
    </div>
  );
}