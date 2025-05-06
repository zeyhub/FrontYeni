import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const VeterinaryAppointmentScreen = ({ navigation }) => {
    const pets = [
        { id: 1, name: 'Milo', type: 'Dog' },
        { id: 2, name: 'Whiskers', type: 'Cat' },
    ];
    const veterinarians = [
        { id: 1, name: 'Dr. Smith', specialty: 'Dogs' },
        { id: 2, name: 'Dr. Johnson', specialty: 'Cats' },
    ];
    const [selectedPet, setSelectedPet] = useState(null);
    const [selectedVeterinarian, setSelectedVeterinarian] = useState(null);
    const handleBack = () => {
        navigation.goBack();
    };
    
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Veterinary Appointment</Text>
        </View>
    );
    }

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#EADCF8',
    },
};

export default VeterinaryAppointmentScreen;