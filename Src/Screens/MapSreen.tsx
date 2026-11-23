import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockShelters } from '../Data/mockShelters';

export function MapScreen() {
  const [selectedShelter, setSelectedShelter] = useState(mockShelters[0]);

  const openGoogleMaps = (lat: number, lng: number, name: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o aplicativo de mapas.');
    });
  };

  return (
    <View style={styles.container}>
      {/* Visualização de Mapa Simulado / Radar de Abrigos */}
      <View style={styles.mapHeader}>
        <View style={styles.radarContainer}>
          <Ionicons name="location-sharp" size={32} color="#E53935" />
          <Text style={styles.radarTitle}>Abrigos na Região Metropolitana do Recife</Text>
          <Text style={styles.radarSubtitle}>{mockShelters.length} abrigos mapeados perto de si</Text>
        </View>

        {/* Pin selecionado em destaque */}
        <View style={styles.activeCard}>
          <View style={styles.activeIcon}>
            <Ionicons name="home" size={24} color="#FFF" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.activeName}>{selectedShelter.name}</Text>
            <Text style={styles.activeAddress}>
              Lat: {selectedShelter.latitude} | Lng: {selectedShelter.longitude}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.directionsBtn}
            onPress={() => openGoogleMaps(selectedShelter.latitude, selectedShelter.longitude, selectedShelter.name)}
          >
            <Ionicons name="navigate-circle" size={32} color="#E53935" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista Interativa de Abrigos */}
      <Text style={styles.listTitle}>Selecione um abrigo no mapa:</Text>
      
      <FlatList
        data={mockShelters}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedShelter.id;
          return (
            <TouchableOpacity
              style={[styles.shelterCard, isSelected && styles.shelterCardSelected]}
              onPress={() => setSelectedShelter(item)}
            >
              <View style={[styles.badge, isSelected && styles.badgeSelected]}>
                <Ionicons name="location" size={18} color={isSelected ? '#FFF' : '#E53935'} />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.cardName, isSelected && styles.cardNameSelected]}>
                  {item.name}
                </Text>
                <Text style={styles.cardDetail}>Toque para centrar localização</Text>
              </View>
              {isSelected && <Ionicons name="checkmark-circle" size={22} color="#E53935" />}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F9' },
  mapHeader: {
    backgroundColor: '#1E50A2',
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  radarContainer: { alignItems: 'center', marginBottom: 16 },
  radarTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  radarSubtitle: { color: '#BBDEFB', fontSize: 13, marginTop: 2 },
  activeCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  activeIcon: {
    backgroundColor: '#E53935',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  activeName: { fontWeight: 'bold', fontSize: 15, color: '#333' },
  activeAddress: { fontSize: 12, color: '#666', marginTop: 2 },
  directionsBtn: { padding: 4 },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  listContainer: { paddingHorizontal: 20, paddingBottom: 20 },
  shelterCard: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  shelterCardSelected: {
    borderColor: '#E53935',
    backgroundColor: '#FFEBEE',
  },
  badge: {
    backgroundColor: '#FFEBEE',
    padding: 8,
    borderRadius: 10,
  },
  badgeSelected: {
    backgroundColor: '#E53935',
  },
  cardName: { fontSize: 14, fontWeight: '600', color: '#444' },
  cardNameSelected: { color: '#E53935', fontWeight: 'bold' },
  cardDetail: { fontSize: 12, color: '#888', marginTop: 2 },
});