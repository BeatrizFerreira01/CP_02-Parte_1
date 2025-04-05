import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviar() {
    console.log('Nome:', nome, 'Mensagem:', mensagem);
    alert('Formulário enviado!');
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Seu Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10 }} />
      
      <Text>Mensagem:</Text>
      <TextInput value={mensagem} onChangeText={setMensagem} style={{ borderWidth: 1, marginBottom: 10 }} />
      
      <Button title="Enviar" onPress={enviar} />
    </View>
  );
}
