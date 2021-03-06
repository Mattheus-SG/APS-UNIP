import React from "react";
import { StyleSheet, View } from "react-native";

import Pop_up from './src/screens/Alerts/teste_popup';
import Login from './src/screens/Login';
import Login2 from './src/screens/LoginWithLogo';
import EsqueceuSenha from './src/screens/EsqueceuSenha';
import CodeConfirm from './src/screens/CodeConfirm';
import Cadastro from './src/screens/Cadastro';


const App = () => {
  return (
    <View style={styles.container}>
      <Login2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
