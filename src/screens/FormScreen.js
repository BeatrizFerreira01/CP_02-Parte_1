import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function FormScreen() {
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  async function buscarCEP() {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        alert('CEP não encontrado');
        return;
      }
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      alert('Erro ao buscar CEP');
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu CEP:</Text>
      <TextInput
        value={cep}
        onChangeText={setCep}
        placeholder="Ex: 89010025"
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botao} onPress={buscarCEP}>
        <Text style={styles.textoBotao}>BUSCAR CIDADE</Text>
      </TouchableOpacity>

      {cidade ? (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>Cidade: {cidade}</Text>
          <Text style={styles.textoResultado}>Estado: {estado}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5f0e2',
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#004d00',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#006400',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#006400',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
  },
  textoResultado: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});
