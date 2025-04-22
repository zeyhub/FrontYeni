import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummyPets = [
  {
    id: '1',
    name: 'Dostumun Adı',
    //image: require('../../assets/images/dog.png'), // kendi görselinle değiştir
  },
  {
    id: '2',
    name: 'Dostumun Adı',
    //image: require('../../assets/images/cat.png'), // kendi görselinle değiştir
  },
];

const SavedPetsScreen = () => {
  const renderPet = ({ item }) => (
    <View style={styles.petCard}>
      <Image source={item.image} style={styles.petImage} />
      <Text style={styles.petName}>{item.name}</Text>
      <Ionicons name="menu" size={24} color="#333" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyPets}
        keyExtractor={(item) => item.id}
        renderItem={renderPet}
        contentContainerStyle={{ paddingVertical: 20 }}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Yeni Dost Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedPetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    paddingHorizontal: 20,
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 30,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  petName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    fontWeight: '500',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#A259FF',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});