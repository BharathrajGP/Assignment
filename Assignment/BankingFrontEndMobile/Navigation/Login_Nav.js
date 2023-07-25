import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Banking from '../Screens/Banking';
import Reset_mpin from '../Screens/Reset_mpin';
import { NavigationContainer } from '@react-navigation/native';
import EmployeeLogin from '../Screens/EmployeeLogin';
import AddCustomer from '../Screens/AddCustomer';
import EmplyeeLoginForDel from '../Screens/EmplyeeLoginForDel';
import DeleteCustomer from '../Screens/DeleteCustomer';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="Banking" component={Banking} />
    //   <Stack.Screen name="Resetmpin" component={Reset_mpin} />
    // </Stack.Navigator>
    // </NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Banking" component={Banking} />
      <Stack.Screen name="Resetmpin" component={Reset_mpin} />
      <Stack.Screen name="Emp" component={EmployeeLogin} options={{headerShown: false}}/>
      <Stack.Screen name="new_cos" component={AddCustomer}/>
      <Stack.Screen name="EmpD" component={EmplyeeLoginForDel} options={{headerShown: false}}/>
      <Stack.Screen name="del_cos" component={DeleteCustomer}/>
    </Stack.Navigator>
  );
}

export default MyStack;