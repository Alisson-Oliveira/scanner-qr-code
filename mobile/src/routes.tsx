import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Panel from './pages/Panel';
import ContactMe from './pages/ContactMe';
import ReaderQr from './pages/ReaderQr';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ 
        headerShown: false,
      }}>
        <Screen 
          name="Panel" 
          component={Panel}
          options={{ 
            headerShown: true,
            title: 'Use Qr Code', 
            headerTitleAlign: 'center' 
          }}
        />
        <Screen 
          name="ContactMe" 
          component={ContactMe}
          options={{ 
            headerShown: true,
            title: 'Contact Me', 
            headerTitleAlign: 'center' 
          }}
        />
        <Screen 
          name="ReaderQr" 
          component={ReaderQr}
        />
      </Navigator>
    </NavigationContainer>    
  );
}