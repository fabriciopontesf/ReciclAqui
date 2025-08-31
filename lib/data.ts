// 1. Definindo os "tipos" dos nossos dados para usar com TypeScript
export type Usuario = {
  id: number;
  nome: string;
  tipo: 'restaurante' | 'associacao';
  endereco: string;
  contato: string;
};

export type Lote = {
  id: number;
  nomeRestaurante: string;
  material: string;
  quantidade: string;
  observacao: string;
};

// 2. Criando os dados fictícios
export const mockUsuarios: Usuario[] = [
  {
    id: 1,
    nome: 'Restaurante Toca do Cabloco',
    tipo: 'restaurante',
    endereco: 'Rua das Pizzas, 123 - Centro',
    contato: 'contato@restaurante.com.br',
  },
  {
    id: 2,
    nome: 'Associação Recicla Futuro',
    tipo: 'associacao',
    endereco: 'Avenida da Coleta, 456 - Bairro Boa Vista',
    contato: 'contato@reciclafuturo.org.br',
  },
];

export const mockLotes: Lote[] = [
  {
    id: 101,
    nomeRestaurante: 'Cantina da Nona',
    material: 'Garrafas de Vidro',
    quantidade: 'Aprox. 3 caixas',
    observacao: 'Vidros de azeite e vinho, higienizados.',
  },
  {
    id: 102,
    nomeRestaurante: 'Sushi Bar Peixe Dourado',
    material: 'Papelão e Plástico',
    quantidade: 'Aprox. 15 kg',
    observacao: 'Embalagens de delivery.',
  },
  {
    id: 103,
    nomeRestaurante: 'Hamburgueria Fogo na Grelha',
    material: 'Óleo de Cozinha Usado',
    quantidade: '20 litros',
    observacao: 'Armazenado em galões.',
  },
];