import { ImageBackground,StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const EmplyeeLoginForDel = ({navigation}) => {
  return (
    <ImageBackground style={styles.backgroundStyle} source={{uri:'https://cdn.pixabay.com/photo/2017/12/17/14/12/bitcoin-3024279_1280.jpg'}}>
      <Title />
        
        <View style={styles.form}>
        
        <TextInput style={styles.input} placeholder='Employee ID' keyboardType='number-pad'></TextInput>
        <TextInput style={styles.input} placeholder='password' keyboardType='default' secureTextEntry></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("del_cos")} style={styles.button}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
            <Text>Cancel</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
  )
}

export default EmplyeeLoginForDel

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
        margin:5,
      },
      button:{
        padding:7,
        backgroundColor: 'green',
        borderRadius:7,
      }
})