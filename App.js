import React from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";

import Pop_up from './src/screens/teste_popup';
import Login from './src/screens/Login';
import EsqueceuSenha from './src/screens/EsqueceuSenha';
import CodeConfirm from './src/screens/CodeConfirm';
import Teste from './src/screens/Login2';

const App = () => {
  return (
    <View style={styles.centeredView}>
      <Pop_up />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;