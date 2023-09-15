import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button, List } from 'react-native-paper';

import camisaService from '../services/camisas';
import { useEffect, useState } from 'react';

export default function CamisaAdd({ navigation }) {
  const [camisas, setCamisas] = useState([]);

  const getCamisas = async () => {
    const data = await camisaService.getAllCamisas();
    setCamisas(data);
  };

  useEffect(async () => {
    getCamisas();
  }, []);

  const updateCamisas = async () => {
    await getCamisas();
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Gêneros de Filmes</Text>
      <>
        {camisas.map((camisa) => (
          <List.Item key={camisa.id} title={camisa.name} />
        ))}
      </>
      <View style={styles.buttons}>
        <Button icon="reload" mode="elevated" onPress={() => updateCamisas()}>
          Atualizar
        </Button>
        <Button
          icon="plus-box"
          mode="elevated"
          onPress={() => navigation.navigate('CamisaAdd')}
        >
          Adicionar
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
});