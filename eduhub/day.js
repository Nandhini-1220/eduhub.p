import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DayOneScreen from './src/screens/DayOneScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DayOne">
        <Stack.Screen name="DayOne" component={DayOneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
