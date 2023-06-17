import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './navigation/MainStack'
import store from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})