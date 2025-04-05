import { View, Text, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../../assets/imagens/logo.png')} style={{ width: 200, height: 200 }} />
      <Text>Bem-vindo ao nosso App Social!</Text>
      <Button title="Ver Lista" onPress={() => navigation.navigate('List')} />
    </View>
  );
}
