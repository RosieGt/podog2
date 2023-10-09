import React from 'react';
import { StatusBar  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { setStatusBarStyle } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38a69d" barStylearStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  
  
  );
}

