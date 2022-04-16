// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import Splash from './component/Splash';
import HomeScreen from './component/HomeScreen';
import Show from './component/Show';
import Profile from './component/Profile'
import Option from './component/Option';
function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Show" component={Show} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Option" component={Option} options={{headerShown:false}}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;