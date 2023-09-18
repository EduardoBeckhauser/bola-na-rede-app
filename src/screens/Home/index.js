import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Endereco from '../../components/Home/Endereco';
import Input from '../../components/Input';
import Sugestoes from '../../components/Home/Sugestoes';
import Categorias from '../../components/Home/Categorias';
import Times from '../../components/Home/Times';

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Endereco />
      <Input placeholder="Busque por camisa ou conjunto" />
      <Sugestoes />
      <Categorias />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});