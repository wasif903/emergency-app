import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';






export default function App() {


  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Welcome" component={Welcome} />
    //     <Tab.Screen name="login" component={Login} />
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="signup" component={Signup} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <StackNavigation />
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
