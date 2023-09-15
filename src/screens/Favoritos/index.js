import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Camisa() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.nome}>Camisa Vasco da Gama III 2021</Text>
        <Text style={styles.valor}>R$300,00</Text>
        <Text style={styles.significado}>
          Esta é a camisa de terceiro uniforme do Vasco da Gama para a temporada de 2021.
        </Text>
        <Image
          source={{
            uri:
              'https://d2r9epyceweg5n.cloudfront.net/stores/001/774/384/products/camisa-vasco-da-gama-third-21-22-kappa-torcedor-preta-masculina-11-d43ba1698af273e24d16384926168224-480-0.png',
          }}
          style={styles.imagem}
        />
        
          <Text style={styles.nome}>Camisa Vasco da Gama I 2021</Text>
        <Text style={styles.valor}>R$250,00</Text>
        <Text style={styles.significado}>
          A camisa principal do Vasco da Gama para a temporada de 2021.
        </Text>
        <Image
          source={{
            uri:
              'https://1.bp.blogspot.com/-sHgluzm2VdQ/YBa3KBfa05I/AAAAAAAAXM0/tqzvC39SMt0wAFUgwv82GidcYnZwZ5tPQCLcBGAsYHQ/s420/Vasco%2Bda%2BGama%2B2020%2B-%2B2021%2B2.png',
          }}
          style={styles.imagem}
        />
      
      <Text style={styles.nome}>Camisa Vasco da Gama II 2021</Text>
        <Text style={styles.valor}>R$250,00</Text>
        <Text style={styles.significado}>
          O segundo uniforme do Vasco da Gama para a temporada de 2021.
        </Text>

        <Image
          source={{
            uri:
              'https://acdn.mitiendanube.com/stores/002/183/167/products/camisa-vasco-2022-23-i-preta-kappa1-860b7c850d8a855b3f16572789478395-480-0.png',
          }}
          style={styles.imagem}
        />
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
    marginBottom: 10,
  },
  significado: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
