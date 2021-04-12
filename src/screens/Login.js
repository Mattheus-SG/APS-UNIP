import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native';

export let height = Dimensions.get('window').height;
export default function App() {
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.viewLoginText}>
          <Text style={styles.loginText}>LOGIN</Text>
        </View>


        <View style={styles.viewloginInput}>
          <Text style={styles.textInput}>Email:</Text>
          <TextInput
            style={styles.input}
          />

          <Text style={styles.textInput2}>Senha: </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.btns}>
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>ENTRAR</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 50,
    width: '100%',
    height: height

  },
  loginText: {
    color: '#225051',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: '55%'
  },
  viewloginInput: {
    marginBottom: 30
  },
  textInput: {
    fontSize: 16,
    color: '#969696'
  },
  textInput2: {
    fontSize: 16,
    color: '#969696',
    marginTop: 30
  },
  input: {
    borderColor: '#8a8a8a',
    borderBottomWidth: 2,
    padding: 7,
    fontSize: 18
  },
  btns: {
    alignItems: 'center',
    marginTop: 70
  },
  btnSubmit: {
    backgroundColor: '#225051',
    width: '62%',
    padding: 20,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 55
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnCadastro: {
    width: '90%',
    borderWidth: 2,
    padding: 14,
    borderRadius: 50,
    borderColor: '#225051'
  },
  cadastroText: {
    textAlign: 'center',
    color: '#225051',
    fontSize: 16
  },
  btnEsqueciSehna: {
    marginTop: 18,
    color: '#225051',
    fontSize: 15
  }
});

