import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import camisaService from '../services/camisas';
import { useState } from 'react';

export default function CamisaAdd({ navigation }) {
  const [camisa, setCamisa] = useState({ name: '' });

  async function addCamisa() {
    await camisaService.saveCamisa(camisa);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headlineMedium">
        Nova Camisa
      </Text>
      <TextInput
        label="Camisa"
        style={{ width: '90%', marginBottom: 10 }}
        onChangeText={(text) => setCamisa({ name: text })}
      />
      <Button icon="content-save" mode="elevated" onPress={() => addCamisa()}>
        Salvar
      </Button>
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
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
});