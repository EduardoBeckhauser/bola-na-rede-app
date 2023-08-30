import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

export default function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    async function carregarTimes() {
      const response = await api.get('times');
      setTimes(response.data);
    }
    carregarTimes();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Times</Text>
      </View>
      <ScrollView style={styles.lista}>
        {times.map((time) => (
          <TouchableOpacity style={styles.item} key={time.id}>
            <Image
              source={{ uri: time.time_url }} 
              style={styles.imagem}
            />
            <View style={styles.info}>
              <Text style={styles.timeTitulo}>
                {' '}
                {time.title}{' '}
              </Text>
              <View style={styles.descricao}>
                <MaterialIcons name="star" size={20} color="#FF7C01" />
                <Text style={styles.estrela}>
                  {time.star || 'Novo!'}
                </Text>
                <Text style={styles.categorias}> {time.categories}</Text>
                <Text style={styles.distancia}> {time.distance}</Text>
              </View>
              <Text style={styles.atraso}> {time.delay} </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginLeft: 20,
    marginRight: 0,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  lista: {
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
    marginTop: 5,
    marginRight: 15,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
  },
  restauranteTitulo: {
    fontWeight: 'bold',
    color: '#333',
  },
  descricao: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },
  estrela: {
    fontSize: 14,
    color: '#999',
  },
  categorias: {
    fontSize: 14,
    color: '#999',
  },
  distancia: {
    fontSize: 14,
    color: '#999',
  },
  atraso: {
    marginTop: 15,
    fontSize: 14,
    color: '#999',
  },
});