import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './src/Feed/feed';
import TelaB from './src/TelaB/TelaB';


const Stack = createStackNavigator();


export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Pokemon"
        component={Feed}
        options={{
          headerTitleContainerStyle:{
            alignItems: 'center'
           }
        }}
        />
        <Stack.Screen name="TelaB" component={TelaB} />
    
       
      </Stack.Navigator>
  </NavigationContainer>
    
  )
}
