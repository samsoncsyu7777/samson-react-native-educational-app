import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SamsonAcademic from "./screens/SamsonAcademic";
import Question from "./screens/Question";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <RootStack.Navigator>
        <RootStack.Screen name="Samson Academic" component={SamsonAcademic}/>
        <RootStack.Screen name="Question" component={Question}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
