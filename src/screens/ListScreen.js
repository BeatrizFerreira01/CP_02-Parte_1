import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const dados = [
  { id: '1', titulo: 'Alistamento Obrigatório', descricao: 'Homens ao completar 18 anos devem se alistar.' },
  { id: '2', titulo: 'Dispensa', descricao: 'Alguns podem ser dispensados por motivos específicos.' },
  { id: '3', titulo: 'Isenção', descricao: 'Pessoas com problemas de saúde podem pedir isenção.' },
];

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={require('../../assets/imagem_1.jpg')} style={styles.imagem} />
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5f0e2',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#006400',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d00',
  },
  descricao: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});
