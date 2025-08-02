import React from 'react';
import { StyleSheet, TextInput, Pressable, Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

interface BatTextProps {
  pass: string;
}

export function BatText({ pass }: BatTextProps) {
  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Your Batpass"
        style={styles.input}
        value={pass}
      />

      <Pressable style={styles.btnContainer} 
      onPress={handleCopy}>
        <Text style={styles.btn}>C</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#f5fcff6c',
    paddingVertical: 5,
    flex: 1,
    color: 'black',
    textAlign: 'center',
    borderRadius: 5,
  },
  btnContainer: {
    marginLeft: 10,
    backgroundColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  btn: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
