import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <TouchableOpacity>
                <Icon style={styles.icon} name="leftcircleo" size={38} />
            </TouchableOpacity>
            <Text style={styles.title}>ESQUECI MINHA SENHA</Text>
        </View>

        <View style={styles.view2}>
          
        </View>

        <View style={styles.view3}>
            <Text style={styles.textInput}>Informe o e-mail cadastrado: </Text>
            <TextInput 
            style={styles.input}
            />

        <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
        </View>

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
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  view1: {
      flex: 1/15,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      width: '80%',
  },
  icon: {
    color: '#225051',
  },
  title: {
    color: '#225051',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%'
  },
  view2: {
    flex: 1/2.5,
    width: '100%',
  },
  view3: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
  },
  textInput: {
    fontSize: 17,
    color: '#969696',
    alignSelf: 'center',
    marginTop: '10%'
  },
  input: {
    fontSize: 16,
    padding: 12,
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: '#8a8a8a',
    fontSize: 18,
    marginBottom: '15%'
  },
  button: {
      width: '54%',
      alignItems: 'center',
      padding: 17,
      backgroundColor: '#225051',
      borderRadius: 50,
      marginBottom: '10%'
  },
  textButton: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold'
  },
});