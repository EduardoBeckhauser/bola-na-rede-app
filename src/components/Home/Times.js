import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Camisa() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <Image
          source={{
            uri: 'https://acdn.mitiendanube.com/stores/001/865/527/products/camisa-titular-do-botafogo-2023-2024-reebok-1-removebg-preview1-9b3e8ff96a7bb975ea16923340767564-480-0.png',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Camisa do Botafogo</Text>
        <Text style={styles.valor}>R$300,00</Text>

        <Image
          source={{
            uri: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/090/372/products/corinthians1-456e64fac189e2cacf16555617061510-640-0.png',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Camisa do Corinthians</Text>
        <Text style={styles.valor}>R$200,00</Text>
      
        <Image
          source={{
            uri: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/596/products/19f097a4-removebg-preview1-a6333acd36f39f57df16526594317350-640-0.webp',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Camisa do Fluminense</Text>
        <Text style={styles.valor}>R$ 99,99</Text>
        
        <Image
          source={{
            uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/101/082/products/d9b8149f1-5baa5a8c746ce96ceb16520435654205-1024-1024-removebg-preview1-c265513449a353f3bb16620688441387-640-0.png',
          }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Camisa do Flamengo</Text>
        <Text style={styles.valor}>R$ 59,99</Text>
    
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 10,
  },
  quantidadeCarrinho: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 50,
    padding: 5,
    marginLeft: -10,
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
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
  botao: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  valorTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
