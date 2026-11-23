import { useState, useMemo } from 'react';
import { Pet } from '../Types/pet';

export function usePetSearch(initialPets: Pet[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPets = useMemo(() => {
    if (!searchQuery.trim()) {
      return initialPets;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    return initialPets.filter((pet) => 
      pet.name.toLowerCase().includes(lowerCaseQuery) ||
      pet.breed.toLowerCase().includes(lowerCaseQuery) ||
      pet.species.toLowerCase().includes(lowerCaseQuery) ||
      pet.shelterName.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery, initialPets]);

  return {
    searchQuery,
    setSearchQuery,
    filteredPets,
  };
}