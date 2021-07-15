import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/home/Home';
import OnBoarding from './src/views/onBoarding/OnBoarding';

import LangProvider, { LangModeProvider } from './src/lang/LangProvider';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <LangModeProvider>
      <LangProvider>
        {/* <Home /> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'OnBoarding'}>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
          </Stack.Navigator>
        </NavigationContainer>
      </LangProvider>
    </LangModeProvider>
  );
}
