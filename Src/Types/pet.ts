export type Species = 'Dog' | 'Cat' | 'Other';
export type Gender = 'Male' | 'Female';
export type Size = 'Small' | 'Medium' | 'Large';

export interface Pet {
  id: string;
  name: string;
  species: Species;
  breed: string;
  age: string;
  gender: Gender;
  size: Size;
  description: string;
  imageUrl: string;
  shelterId: string;
  shelterName: string;
  isVaccinated: boolean;
  isNeutered: boolean;
}