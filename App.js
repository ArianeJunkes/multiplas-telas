import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Acao from './screens/Acao';
import Drama from './screens/Drama';
import Ficcao from './screens/Ficcao';
import Livros from './screens/Livros';
import Romance from './screens/Romance';
import Terror from './screens/Terror';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Acao" component={Acao} />
          <Stack.Screen name="Drama" component={Drama} />
          <Stack.Screen name="Ficcao" component={Ficcao} />
          <Stack.Screen name="Livros" component={Livros} />
          <Stack.Screen name="Terror" component={Terror} />
          <Stack.Screen name="Romance" component={Romance} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
