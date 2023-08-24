import React from 'react';
import { Login, Receipe } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <stack.Navigator 
       screenOptions={{
            headerShown: false,
      }}
        initialRouteName="Login">
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Tabs} />
        <stack.Screen name="Receipe" component={Receipe} />
       </stack.Navigator>
      </NavigationContainer>
  );
};

export default app;

