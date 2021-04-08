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
    <KeyboardAvoidingView style={styles.container}>
      <Text  style={styles.text1}>Bem-vindo</Text>
      <TouchableOpacity><Text style={styles.text}>Login</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Cadastro</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Esqueci Senha</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Codigo de Confirmação</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Pontos de Alagamentos</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Noticias</Text></TouchableOpacity>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  text: {
    marginTop: 3,
    fontSize: 16,
  },
});