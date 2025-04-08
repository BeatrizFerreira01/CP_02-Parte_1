import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetailScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/imagem_3.jpg')} style={styles.imagem} />
      <Text style={styles.titulo}>O que é Situação Militar?</Text>
      <Text style={styles.texto}>
        A Situação Militar é a condição de estar regularizado com o serviço militar obrigatório no Brasil.
        Todo cidadão brasileiro do sexo masculino que completa 18 anos deve se alistar nas Forças Armadas.
      </Text>
      <Image source={require('../../assets/imagem_4.jpg')} style={styles.imagem} />
      <Text style={styles.texto}>
        O alistamento pode resultar em: incorporação, adiamento, isenção ou dispensa. 
        Ter a Situação Militar regularizada é essencial para acessar empregos públicos, tirar passaporte e realizar concursos.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e5f0e2',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d00',
    textAlign: 'center',
    marginVertical: 15,
  },
  texto: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
    marginBottom: 20,
  },
});
