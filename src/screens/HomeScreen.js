import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/imagem_1.jpg')} style={styles.imagem} />
      <Text style={styles.titulo}>Bem-vindo ao app Situação Militar BR!</Text>
      <Image source={require('../../assets/imagem_2.jpg')} style={styles.imagem} />
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.textoBotao}>ENTENDA O QUE É A SITUAÇÃO MILITAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5f0e2',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 300,
    height: 180,
    borderRadius: 12,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d00',
    textAlign: 'center',
    marginVertical: 15,
  },
  botao: {
    backgroundColor: '#006400',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
