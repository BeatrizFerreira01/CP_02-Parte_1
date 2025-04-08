import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FormScreen from '../screens/FormScreen';
import ListScreen from '../screens/ListScreen';
import AboutScreen from '../screens/AboutScreen';
import { Ionicons } from '@expo/vector-icons'; // Ícones bonitos para as abas

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Informações') {
            iconName = 'information-circle';
          } else if (route.name === 'Formulário') {
            iconName = 'create';
          } else if (route.name === 'Sobre') {
            iconName = 'people';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#006400', // Verde escuro ativo
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="Informações" component={ListScreen} />
      <Tab.Screen name="Formulário" component={FormScreen} />
      <Tab.Screen name="Sobre" component={AboutScreen} />
    </Tab.Navigator>
  );
}
