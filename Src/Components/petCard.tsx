import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Pet } from '../Types/pet';
import { Ionicons } from '@expo/vector-icons'; 

interface PetCardProps {
  pet: Pet;
  onPress: () => void;
}

export function PetCard({ pet, onPress }: PetCardProps) {
  const isMale = pet.gender === 'Male';
  const genderIcon = isMale ? 'male-outline' : 'female-outline';
  const genderColor = isMale ? '#4A90E2' : '#E056FD';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />
      
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{pet.name}</Text>
          <Ionicons name={genderIcon} size={20} color={genderColor} />
        </View>

        <Text style={styles.breed}>{pet.breed}</Text>
        
        <View style={styles.footerRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{pet.age}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: '#E8F5E9' }]}>
            <Text style={[styles.badgeText, { color: '#2E7D32' }]}>{pet.size}</Text>
          </View>
        </View>

        <View style={styles.shelterRow}>
          <Ionicons name="location-outline" size={14} color="#666" />
          <Text style={styles.shelterText} numberOfLines={1}>
            {pet.shelterName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 140,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  breed: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  footerRow: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
  badge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#555',
    fontWeight: '600',
  },
  shelterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  shelterText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    flex: 1,
  },
});