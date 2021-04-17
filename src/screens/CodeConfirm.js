import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Icon from '@expo/vector-icons/AntDesign'

const CELL_COUNT = 4;
export default function App() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <TouchableOpacity>
                <Icon style={styles.icon} name="leftcircleo" size={38} />
            </TouchableOpacity>
            <Text style={styles.title}>CÓDIGO RECEBIDO</Text>
        </View>

        <View style={styles.view2}>
            <Text style={styles.textInput}>Digite o código recebido: </Text>
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
        </View>

        <View style={styles.view3}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.view4}>
            <TouchableOpacity style={styles.resend}>
                <Text style={styles.resendText}>Enviar o código novamente</Text>
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
  codeFieldRoot: {
    marginTop: 18,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: '21%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    marginBottom: '5%'
  },
  cellText: {
    color: '#000',
    fontSize: 38,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#225051',
    borderBottomWidth: 2,
  },
  view1: {
      flex: 1/4,
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
    marginLeft: '10%'
  },
  view2: {
      flex: 2/3,
      width: '100%',
      justifyContent: 'center',
      marginTop: '12%',
  },
  textInput: {
    fontSize: 17,
    color: '#969696',
    alignSelf: 'center',
    marginTop: '15%'
  },
  view3: {
      flex: 1/2,
      width: '100%',
      alignItems: 'center',
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
  view4: {
    flex: 1/6,
    width: '100%'
  },
  resend: {
      alignItems: 'center',
      width: '100%',
  },
  resendText: {
    color: '#225051',
    fontSize: 16,
  }
});