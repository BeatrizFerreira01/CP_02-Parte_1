import { View, Text, Button, Linking, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/imagem_5.jpg')} style={styles.imagem} />
      <Text style={styles.titulo}>Desenvolvido por Beatriz Ferreira Cruz e Gabrielly Campos Macedo.</Text>
      <Image source={require('../../assets/imagem_6.jpg')} style={styles.imagem} />
      <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL('https://www.eb.mil.br/')}>
        <Text style={styles.textoBotao}>ACESSAR SITE DO EXÉRCITO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5f0e2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    width: 250,
    height: 200,
    borderRadius: 12,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d00',
    textAlign: 'center',
    marginVertical: 10,
  },
  botao: {
    backgroundColor: '#006400',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
