import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

const sliderData = [
  {
    id: '1',
    //image: require('../../assets/images/slider1.jpg'),
    title: 'Veteriner Randevunuzu Kolayca Alın',
  },
  {
    id: '2',
    //image: require('../../assets/images/slider2.jpg'),
    title: 'Evde Veteriner Hizmeti',
  },
];

const HomePageScreen = () => {
  const renderSliderItem = ({ item }) => (
    <View style={styles.sliderItem}>
      <Image source={item.image} style={styles.sliderImage} />
      <Text style={styles.sliderText}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}>{'< Geri'}</Text>
        <Text style={styles.logoText}>🐾 FurEverCare</Text>
      </View>

      <FlatList
        data={sliderData}
        renderItem={renderSliderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      />

      <Text style={styles.sectionTitle}>HİZMETLERİMİZ</Text>

      <View style={styles.buttonContainer}>
        <CustomButton text="Veteriner Randevusu Al" />
        <CustomButton text="Evde Bakım Randevusu Al" />
        <CustomButton text="Kuaför Randevusu Al" />
        <CustomButton text="Evde Kuaför Randevusu Al" />
        <CustomButton text="Otel Rezervasyonu Yap" />
        <CustomButton text="Bireysel Bakıcı Bul" />
      </View>
    </ScrollView>
  );
};

const CustomButton = ({ text }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default HomePageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  back: {
    fontSize: 16,
    color: '#333',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
  },
  slider: {
    marginBottom: 20,
  },
  sliderItem: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  sliderImage: {
    width: 280,
    height: 140,
    borderRadius: 12,
  },
  sliderText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#222',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#A86DFF',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 8,
    width: '85%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#7C3AED',
    fontSize: 16,
    fontWeight: '500',
  },
});