import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { ConfirmUser } from '../store/thunk/AuthThunk';

const Confirm = ({ navigation }: any) => {
    const [code, setCode] = useState('');
    const email = useSelector((state: RootState) => state.authSlice.user.email)
    const dispatch = useDispatch<AppDispatch>()

    const confirmHandle = () => {
        dispatch(ConfirmUser({
            email: email,
            code: code
        })).then(res => {
            if (res) {
                navigation.navigate("profile")
            } else {
                Alert.alert("Səhvdir!!!!!!!!!!!!!!!!!!!!")
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' }}
                />
            </View>
            <Text style={styles.title}>Two-Factor Authentication</Text>
            <Text style={styles.description}>
                Enter the code sent to your email to complete the login process.
            </Text>
            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Code"
                    keyboardType="number-pad"
                    value={code}
                    onChangeText={setCode}
                    maxLength={6}
                />
                <TouchableOpacity style={styles.button} onPress={confirmHandle}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8420B2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    logoContainer: {
        overflow: 'hidden',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    description: {
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    card: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        shadowColor: '#00CED1',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#000',
    },
    button: {
        backgroundColor: '#5A0283',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Confirm;
