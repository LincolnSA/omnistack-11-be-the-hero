import React from 'react';
import { StyleSheet, View } from 'react-native';
/* 
  yarn add intl: instalação

  importando pacote de modificação de moeda para ser 
  usado no react-native

*/
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Incidents from './src/pages/Incidents';
import Detail from './src/pages/Detail';

export default function App() {
  return (
    <View style={styles.container}>
      <Incidents />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccccccaa"
  }
});



