import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Login from './src/screens/Login';
import CodeConfirm from './src/screens/CodeConfirm';
import EsqueceuSenha from './src/screens/EsqueceuSenha';

export default function App() {
  return (
    <Login />
  );
};

const styles = StyleSheet.create({});