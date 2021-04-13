import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
import { height } from './Login';

export default function App() {
  return (
    <>
      <View style={styles.viewTitle}>
        <View style={styles.viewTitleBox}>
          <TouchableOpacity>
            <Icon style={styles.icon} name="leftcircleo" size={38} />
          </TouchableOpacity>
          <Text style={styles.mainText}>ESQUECI MINHA SENHA</Text>
        </View>
      </View>
      <KeyboardAvoidingView style={styles.container}>

        <Text style={styles.title}>Informe e-mail cadastrado: </Text>
        <TextInput
            style={styles.input}
          />
        <TouchableOpacity style={styles.btnEnviar}>
          <Text style={styles.btnText}>ENVIAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: height
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
    marginBottom: 10
  },
  btnEnviar: {
    width: '50%',
    backgroundColor: '#225051',
    padding: 20,
    marginTop: '15%',
    borderRadius: 50,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  mainText: {
    fontSize: 18,
    color: '#285556',
    fontWeight: 'bold',
  },
  viewTitle: {
    marginTop: 42,
    width: '90%',
    alignItems: 'center'
  },
  viewTitleBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: '#225051',
    marginRight: 20
  },
  input: {
    borderColor: '#8a8a8a',
    borderBottomWidth: 2,
    padding: 8,
    fontSize: 18,
    width: '75%'
  },
});
