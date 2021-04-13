import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Icon from '@expo/vector-icons/AntDesign'
import { height } from './Login';

const CELL_COUNT = 4;
export default function App() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
      <View style={styles.viewTitle}>
        <View style={styles.viewTitleBox}>
          <TouchableOpacity>
            <Icon style={styles.icon} name="leftcircleo" size={38} />
          </TouchableOpacity>
          <Text style={styles.mainText}>CÓDIGO RECEBIDO</Text>
        </View>
      </View>
        <Text style={styles.title}>Digite o código recebido: </Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
          </View>
        )}
        />

        <TouchableOpacity style={styles.btnEnviar}>
          <Text style={styles.btnText}>ENVIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reenviarCode}><Text style={styles.reenviarCodeText}>Enviar o código novamente</Text></TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: height
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  codeFieldRoot: {
    marginTop: 18,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: '22%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#225051',
    borderBottomWidth: 2,
  },
  btnEnviar: {
    width: '50%',
    backgroundColor: '#225051',
    padding: 20,
    marginTop: '12%',
    borderRadius: 50
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
    marginTop: '10%',
    alignItems: 'center',
    marginBottom: '54%'
  },
  viewTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#225051',
    marginRight: 20
  },
  reenviarCode: {
    marginTop: '45%'
  },
  reenviarCodeText: {
    color: '#225051',
    fontSize: 15,
  }
});