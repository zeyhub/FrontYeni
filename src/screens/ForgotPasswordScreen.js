import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AuthService from '../services/auth';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleForgotPassword = async () => {
        if (email.trim() === '') {
            setErrorMessage('Lütfen e-posta adresinizi girin.');
            return;
        }
        
        try {
            const response = await AuthService.forgotPassword(email);
            console.log('Şifre sıfırlama bağlantısı gönderildi:', response);
            alert('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Şifre sıfırlama hatası:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Şifremi Unuttum</Text>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="E-posta adresi"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleForgotPassword}
            >
                <Text style={styles.buttonText}>Şifre Sıfırlama Bağlantısı Gönder</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
};

export default ForgotPasswordScreen;