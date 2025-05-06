import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PetService from "../services/pet";
import { useState } from "react";

const AddPetScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');

    const handleAddPet = async () => {
        try {
            await PetService.addPet(name, breed, age);
            navigation.goBack();
        } catch (error) {
            console.error('Error adding pet:', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yeni Dost Ekle</Text>
            <TextInput
                style={styles.input}
                placeholder="Dostunuzun Adı"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Dostunuzun Türü"
                value={breed}
                onChangeText={setBreed}
            />
            <TextInput
                style={styles.input}
                placeholder="Yaşı"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddPet}>
                <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#EADCF8',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#6A5ACD',
        paddingVertical: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
};

export default AddPetScreen;