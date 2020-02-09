import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartGameScreen from './screens/StartGameScreen';
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import EndGameScreen from "./screens/EndGameScreen";
import COLORS from "./constants/Colors"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={StartGameScreen} options={header}/>
          <Stack.Screen name="Game" component={GameScreen} options={{...header, title: "Try to guess the color!"}}/>
          <Stack.Screen name="End" component={EndGameScreen} options={{...header, title: "Game Over"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});

const header = {  
  title: "Color Guessing Game.",
  headerStyle: {height: 80, backgroundColor: COLORS.accent},
  headerTitleStyle: {fontSize: 18, color: COLORS.secondary},
  headerTitleAlign: "center"
};
