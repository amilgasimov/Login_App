import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../screens/Register'
import LoginScreen from '../screens/Login'
import Confirm from '../screens/Confirm'
import Profile from '../screens/Profile'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='login' component={LoginScreen} />
                <Stack.Screen name='register' component={Register} />
                <Stack.Screen name='confirm' component={Confirm} />
                <Stack.Screen name='profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})