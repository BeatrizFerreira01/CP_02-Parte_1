import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AboutScreen from '../screens/AboutScreen';
import FormScreen from '../screens/FormScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'O que é Situação Militar' }} />
      <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Formulário' }} />
      <Stack.Screen name="List" component={ListScreen} options={{ title: 'Informações' }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
    </Stack.Navigator>
  );
}
