import React, { useState } from 'react';
import { StyleSheet, Image, Text, Pressable, View } from 'react-native';
import { BatText } from './BatInputCopy'; // ajuste o caminho conforme sua estrutura
import batPassGen from '../services/batPassGen';

export function BatLogo() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    const passGen = batPassGen();
    setPass(passGen);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BATPASS GENERATOR</Text>

      <Pressable onPress={handleGenerateButton}>
        <Image
          source={require('../../assets/batLogo.png')}
          style={styles.batLogo}
        />
      </Pressable>

      <BatText pass={pass} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'yellow',
    padding: 3,
    borderRadius: 0,
    textAlign: 'center',
    marginBottom: 10,
  },
  batLogo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
});
