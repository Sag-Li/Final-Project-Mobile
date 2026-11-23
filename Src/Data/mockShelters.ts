export interface Shelter {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  city: string; 
  phone: string;
  latitude: number;
  longitude: number;
}

export const mockShelters: Shelter[] = [
  {
    id: 'abrigo-1',
    name: 'Pet Help Recife - Unidade 2',
    address: 'Av. Conselheiro Aguiar, 1200',
    neighborhood: 'Boa Viagem',
    city: 'Recife',
    phone: '(81) 98877-6655',
    latitude: -8.1250,
    longitude: -34.9010,
  },
  {
    id: 'abrigo-2',
    name: 'Abrigo São Francisco de Assis',
    address: 'Rua da Hora, 450',
    neighborhood: 'Espinheiro',
    city: 'Recife',
    phone: '(81) 99123-4567',
    latitude: -8.0425,
    longitude: -34.8952,
  },
  {
    id: 'abrigo-3',
    name: 'Associação Amigos dos Animais',
    address: 'Av. Getúlio Vargas, 890',
    neighborhood: 'Bairro Novo',
    city: 'Olinda',
    phone: '(81) 98765-4321',
    latitude: -8.0125,
    longitude: -34.8485,
  },
  {
    id: 'abrigo-4',
    name: 'Lar Doce Lar Patinhas',
    address: 'Rua Real da Torre, 1020',
    neighborhood: 'Madalena',
    city: 'Recife',
    phone: '(81) 99444-3322',
    latitude: -8.0540,
    longitude: -34.9120,
  },
  {
    id: 'abrigo-5',
    name: 'Patas Unidas - Jaboatão',
    address: 'Av. Bernardo Vieira de Melo, 2300',
    neighborhood: 'Piedade',
    city: 'Jaboatão dos Guararapes',
    phone: '(81) 98111-2233',
    latitude: -8.1620,
    longitude: -34.9180,
  },
  {
    id: 'abrigo-6',
    name: 'Anjos de Quatro Patas',
    address: 'Rua Estr. do Arraial, 2800',
    neighborhood: 'Casa Amarela',
    city: 'Recife',
    phone: '(81) 99777-8899',
    latitude: -8.0280,
    longitude: -34.9210,
  },
  {
    id: 'abrigo-7',
    name: 'Refúgio Animal Várzea',
    address: 'Av. Polidoro, 550',
    neighborhood: 'Várzea',
    city: 'Recife',
    phone: '(81) 98666-5544',
    latitude: -8.0480,
    longitude: -34.9530,
  },
  {
    id: 'abrigo-8',
    name: 'Associação Pet Paulista',
    address: 'Rua Siqueira Campos, 120',
    neighborhood: 'Centro',
    city: 'Paulista',
    phone: '(81) 99222-1100',
    latitude: -7.9420,
    longitude: -34.8730,
  },
  {
    id: 'abrigo-9',
    name: 'Gatinhos do Recife (ZN)',
    address: 'Rua Arraial, 140',
    neighborhood: 'Parnamirim',
    city: 'Recife',
    phone: '(81) 98333-7711',
    latitude: -8.0350,
    longitude: -34.9020,
  },
  {
    id: 'abrigo-10',
    name: 'Resgate RMR - Bairro do Recife',
    address: 'Av. Alfredo Lisboa, 500',
    neighborhood: 'Recife Antigo',
    city: 'Recife',
    phone: '(81) 99888-0011',
    latitude: -8.0625,
    longitude: -34.8715,
  },
];