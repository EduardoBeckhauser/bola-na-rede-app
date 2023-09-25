import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import camisaService from '../../services/camisas';

export default function Categorias() {
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
      <View style={styles.header}>
        <Text style={styles.titulo}>Camisas</Text>
        
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {camisas.map((camisa) => (
          <TouchableOpacity key={camisa.id} style={styles.item}>
            <Image
              source={{ uri: camisa.capa.url }} 
              style={styles.imagem}
            />
            <Text style={styles.nome}>{camisa.capa.description}</Text>
            <Text style={styles.valor}>R${camisa.preco}</Text>
            <Text>Restam apenas {camisa.quantidade} camisas!</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 0,
  },
  header: {
    marginLeft: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  lista: {
    marginTop: 10,
    paddingLeft: 20,
  },
  item: {
    marginRight: 15,
    alignItems: 'center',
  },
  imagem: {
    width: 250,
    height: 290,
    borderRadius: 10,
  },
  categoriaTitulo: {
    fontSize: 16,
    marginTop: 10,
    color: '#999',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

});