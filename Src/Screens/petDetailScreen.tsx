import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../Types/navigation';
import { mockPets } from '../Data/mockPets'; 

type petDetailRouteProp = RouteProp<RootStackParamList, 'PetDetail'>;

export function PetDetailsScreen() {
  const route = useRoute<petDetailRouteProp>();
  const navigation = useNavigation();
  const { petId } = route.params;
  const pet = mockPets.find((p) => p.id === petId);

 
  if (!pet) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Animal não encontrado.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={{ color: '#E53935' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleAdoptPress = () => {
    const message = `Olá, ${pet.shelterName}! Tenho interesse em adotar o(a) ${pet.name}.`;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl).catch(() => {
      alert('Certifique-se de que o WhatsApp está instalado no dispositivo.');
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: pet.imageUrl }} style={styles.image} />
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{pet.name}</Text>
            <Ionicons name={pet.gender === 'Male' ? 'male' : 'female'} size={24} color={pet.gender === 'Male' ? '#4A90E2' : '#E056FD'} />
          </View>

          <View style={styles.tagsContainer}>
            <View style={styles.tag}><Text style={styles.tagText}>{pet.breed}</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>{pet.age}</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>{pet.size}</Text></View>
          </View>

          <Text style={styles.sectionTitle}>Sobre mim</Text>
          <Text style={styles.description}>{pet.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.adoptButton} onPress={handleAdoptPress}>
          <Text style={styles.adoptButtonText}>Quero Adotar</Text>
          <Ionicons name="paw" size={20} color="#FFF" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  image: { width: '100%', height: 350, resizeMode: 'cover' },
  backButton: { position: 'absolute', top: 50, left: 20, backgroundColor: '#FFF', padding: 8, borderRadius: 20, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  content: { padding: 24, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: '#FFF', marginTop: -30 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  tagsContainer: { flexDirection: 'row', gap: 10, marginTop: 12 },
  tag: { backgroundColor: '#F0F0F0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  tagText: { color: '#555', fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 20, marginBottom: 10 },
  description: { fontSize: 15, color: '#666', lineHeight: 22 },
  footer: { padding: 24, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#EEE' },
  adoptButton: { backgroundColor: '#E53935', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 16, borderRadius: 16 },
  adoptButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});