import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getMe } from '../store/thunk/AuthThunk';

const Profile = () => {
    const secretInfo = useSelector((state: RootState) => state.authSlice.secretInfo)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getMe())
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Jane Doe</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Secret Info:</Text>
                    <Text style={styles.infoValue}>{secretInfo && secretInfo}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8420B2',
        padding: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white'
    },
    infoContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    infoItem: {
        marginBottom: 20,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    infoValue: {
        marginTop: 5,
        fontSize: 16,
        color: '#666',
    },
});

export default Profile;
