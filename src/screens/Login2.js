import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
import { height } from './Login';

export default function App() {
  return (
    <>
      <View style={styles.viewTitle}>
        <View style={styles.viewTitleBox}>
          <Text style={styles.mainText}>LOGIN</Text>
        </View>
      </View>
      <KeyboardAvoidingView style={styles.container}>

        <View style={styles.inputs}>

        <Text style={styles.title}>Email: </Text>
        <TextInput
            style={styles.input}
          />

        <Text style={styles.title}>Senha: </Text>
        <TextInput
            style={styles.input}
            secureTextEntry={true}
         />
         </View>

         <View style={styles.viewBottom}>
        
        <TouchableOpacity style={styles.btnEnviar}>
            <Text style={styles.btnText}>ENTRAR</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.btnCadastro}>
              <Text style={styles.cadastroText}>Não possui cadastro?</Text>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Text style={styles.btnEsqueciSehna}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: height
  },
  title: {
    fontSize: 16,
    color: 'grey',
    marginTop: 15
  },
  btnEnviar: {
    width: '52%',
    backgroundColor: '#225051',
    padding: 20,
    borderRadius: 50,
    marginBottom: '16%',
    marginTop: '20%'
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  viewTitleBox: {
    alignSelf: 'flex-start',
  },
  mainText: {
    fontSize: 36,
    color: '#285556',
    fontWeight: 'bold',
  },
  viewTitle: {
    marginTop: 42,
    width: '80%',
    alignItems: 'center'
  },
  input: {
    borderColor: '#8a8a8a',
    borderBottomWidth: 2,
    padding: 8,
    fontSize: 18,
    width: '100%'
  },
  inputs: {
    width: '75%',
    marginTop: '40%'
  },
  btnCadastro: {
    width: '76%',
    borderWidth: 2,
    padding: 15,
    borderRadius: 50,
    borderColor: '#225051',
    marginBottom: 0
  },
  cadastroText: {
    textAlign: 'center',
    color: '#225051',
    fontSize: 16
  },
  btnEsqueciSehna: {
    marginTop: 18,
    color: '#225051',
    fontSize: 16,
  },
  viewBottom: {
    width: '100%',
    alignItems: 'center',
  }
});