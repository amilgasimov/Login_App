import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };

    const handleCreateAccount = () => {
        // Implement your create account logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.card}>
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.card}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('register')}>
                    <Text style={styles.createAccountButtonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8420B2',
        justifyContent:'center'
    },
    formContainer: {
        marginHorizontal: 20,
        marginTop: 50,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
        padding: 10,
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#B0C4DE',
    },
    loginButton: {
        backgroundColor: '#5A0283',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    createAccountButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    createAccountButtonText: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
