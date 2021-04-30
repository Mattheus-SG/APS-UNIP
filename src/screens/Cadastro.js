import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'

export default function App() {
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView style={styles.view1}>
            <TouchableOpacity>
                <Icon style={styles.icon} name="leftcircleo" size={38} />
            </TouchableOpacity>
            <Text style={styles.title}>CADASTRAR</Text>
        </KeyboardAvoidingView>
            
        <KeyboardAvoidingView style={styles.view2}>
          <View style={styles.inputs}>
            <Text style={styles.textInput}>Nome: </Text>
            <TextInput 
            style={styles.input}
            />

            <Text style={styles.textInput}>Email: </Text>
            <TextInput 
            style={styles.input}
            />

            <Text style={styles.textInput}>Senha: </Text>
            <TextInput 
            style={styles.input}
            />

            <Text style={styles.textInput}>Confirma senha: </Text>
            <TextInput 
            style={styles.input}
            />

          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    marginTop: '10%'
  },
  textInput: {
    fontSize: 16,
    color: 'grey',
  },
  view1: {
      flex: 1/13,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      width: '80%',
      marginBottom: '15%'
  },
  icon: {
    color: '#225051',
  },
  title: {
    color: '#225051',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: '13%'
  },
  view2: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
  },
  inputs: {
    marginTop: '5%',
    width: '100%',
  },
  view3: {
      flex: 1/4,
      width: '100%',
      alignItems: 'center',
  },
  textInput: {
    fontSize: 17,
    color: '#969696',
  },
  input: {
    fontSize: 16,
    padding: 10,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#8a8a8a',
    fontSize: 18,
    marginBottom: '7%'
  },
  button: {
      width: '58%',
      alignItems: 'center',
      padding: 17,
      backgroundColor: '#225051',
      borderRadius: 50,
      marginBottom: '15%',
      marginTop: '5%'
  },
  textButton: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold'
  },
});
