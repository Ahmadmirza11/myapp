import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './screens';
import GetStarted from './screens/getStarted';
import Page3 from './screens/get2';
import Login from './screens/login';
import Signup from './screens/signup';
import otp from './screens/otp';
import success from './screens/success';
import forget from './screens/forget';
import Chat from './screens/chat';
import messages from './screens/messages';
import Home from './screens/home';

const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Index}  options={{headerShown:false}}/>
      <Stack.Screen name='page2' component={GetStarted }  options={{headerShown:false}}/>
      <Stack.Screen name='page3' component={Page3}  options={{headerShown:false}}/>
      <Stack.Screen name='page4' component={Login}  options={{headerShown:false}}/>
      <Stack.Screen name='signup' component={Signup}  options={{headerShown:false}}/>
      <Stack.Screen name='otp' component={otp}  options={{headerShown:false}}/>
      <Stack.Screen name='success' component={success}  options={{headerShown:false}}/>
      <Stack.Screen name='forgot' component={forget}  options={{headerShown:false}}/>
      <Stack.Screen name='home' component={Home}  options={{headerShown:false}}/>
      <Stack.Screen name='chat' component={Chat}  options={{headerShown:false}}/>
      <Stack.Screen name='message' component={messages}  options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})