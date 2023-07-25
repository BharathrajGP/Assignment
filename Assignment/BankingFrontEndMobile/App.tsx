// import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Screens/Login'
import Banking from './Screens/Banking'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigation/Login_Nav';

const App = () => {
  return (
    // <View>
    //   {/* <Login /> */}
    //   <Banking />
      
      
    //   {/* <MyStack /> */}
    // </View>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    // width: 100%,
    backgroundColor: 'purple',
    alignItems: 'center',
  },
})