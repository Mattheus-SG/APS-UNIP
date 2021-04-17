import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.view1}>
            <Text style={styles.title}>LOGIN</Text>
        </View>
        <View style={styles.view2}>
            <Text style={styles.textInput}>Email: </Text>
            <TextInput  
            style={styles.input}
            placeholder=""
            />
            <Text style={styles.textInput}>Senha: </Text>
            <TextInput  
            style={styles.input}
            placeholder=""
            secureTextEntry={true}
            />
        </View>
        <View style={styles.view3}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    padding: 40,
  },
    title: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 38,
    fontWeight: "bold",
    color: '#225051'
  },
  view1: {
    flex: 1/2,
    width: '100%',
    marginBottom: 28
  },
  view2: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    marginBottom: '2%'
  },
  view3: {
    flex: 1,
    width: '100%',
    alignItems: "center",
  },
  textInput: {
    fontSize: 17,
    color: '#969696',
  },
  input: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#8a8a8a',
    fontSize: 18,
    marginBottom: 17
  },
  btnSubmit: {
    width: '67%',
    backgroundColor: '#225051',
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12
  },
  submitText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 18
  },
  btnCadastro: {
    borderWidth: 2,
    borderColor: '#225051',
    borderRadius: 50,
    padding: 16,
    width: '90%',
    alignItems: "center",
    marginTop: 30,
  },
  cadastroText: {
    color: '#225051',
    fontSize: 15
  },
  btnEsqueciSehna: {
    color: '#225051',
    fontSize: 15,
    marginTop: 16
  }

});

export default App;

