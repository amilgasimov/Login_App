import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { Auth } from '../store/thunk/AuthThunk';

const RegisterScreen = ({ navigation }: any) => {
    const { loading } = useSelector((state: RootState) => state.authSlice);
    const [email, setEmail] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const registerHandler = () => {
        dispatch(Auth(email)).then(res => {
            navigation.navigate('confirm');
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TextInput onChangeText={setEmail} style={styles.input} placeholder="Email" />
                <TouchableOpacity style={styles.button} onPress={registerHandler}>
                    {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>Register</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate("login")}>
                    <Text style={styles.createAccountButtonText}>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8420B2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
        padding: 20,
        marginTop: 40,
        width: '90%',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#5A0283',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    createAccountButton: {
        marginTop: 20,
    },
    createAccountButtonText: {
        color: '#8420B2',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
