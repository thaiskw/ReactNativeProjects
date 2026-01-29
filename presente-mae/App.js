import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import MemoriasScreen from './src/screens/MemoriasScreen';
import SobreVoceScreen from './src/screens/SobreVoceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Memorias"
          component={MemoriasScreen}
          options={{ headerShown: true, title: 'Memórias Importantes!' }}
        />
        <Stack.Screen
          name="SobreVoce"
          component={SobreVoceScreen}
          options={{ headerShown: true, title: 'Tudo sobre você!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
