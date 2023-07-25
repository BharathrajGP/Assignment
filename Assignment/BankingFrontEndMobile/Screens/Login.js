import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Login = ({navigation}) => {
  
  return (
      <ImageBackground style={styles.backgroundStyle} source={{uri:'https://cdn.pixabay.com/photo/2017/12/17/14/12/bitcoin-3024279_1280.jpg'}}>
      <Title />
        {/* <input type='text' placeholder='Customer id'></input>
        <input type='number' placeholder='m pin'></input> */}
        
        <View style={styles.form}>
        
        <TextInput style={styles.input} placeholder='Customer ID' keyboardType='number-pad'></TextInput>
        <TextInput style={styles.input} placeholder='mpin' keyboardType='number-pad'></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("Banking")} style={styles.button}>
            <Text>Login</Text>
        </TouchableOpacity>

        <View>
      <TouchableOpacity onPress={() => navigation.navigate("Resetmpin")}>
            <Text style={styles.text}>forgot mpin?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Emp")} >
            <Text style={styles.text}>Add Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("EmpD")}>
            <Text style={styles.text}>Delete Customer</Text>
        </TouchableOpacity>
      </View>
        </View>
      </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        color: 'cyan',
        width: 150,
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: 'bold',
        margin: 10,
      },
      backgroundStyle : {
        alignItems: 'center',
        // flex: 3,
        // justifyContent: 'center',
        // height: 1960,
        // width: 1080,
      },
      form:{
        borderColor:'red',
        borderWidth: 5,
        padding:50,
        marginBottom: 300,
        marginTop: 200,
        alignItems:'center',
      },
      text: {
        color: 'white',
        width: 150,
        fontSize: 17,
        fontStyle: 'italic',
        // fontWeight: 'bold',
        margin:5,
      },
      button:{
        padding:7,
        backgroundColor: 'green',
        borderRadius:7,
      }
})