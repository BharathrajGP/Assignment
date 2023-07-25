//rnfes
import {ImageBackground,StyleSheet, Text, TouchableOpacity, View,TextInput, ScrollView } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const AddCustomer = ({navigation}) => {
  return (
    <ImageBackground style={styles.backgroundStyle} source={{uri:'https://cdn.pixabay.com/photo/2017/12/17/14/12/bitcoin-3024279_1280.jpg'}}>
    <Title />
      <ScrollView>
      <View style={styles.form}>
      <Text>Insert New Customer</Text>
      <TextInput style={styles.input} placeholder='Customer ID' keyboardType='number-pad'></TextInput>
      <TextInput style={styles.input} placeholder='Enter Name' keyboardType='default'></TextInput>
      <TextInput style={styles.input} placeholder='Phone number' keyboardType='numeric'></TextInput>
      <TextInput style={styles.input} placeholder='mpin' keyboardType='number-pad'></TextInput>
      <TextInput style={styles.input} placeholder='UPI pin' keyboardType='number-pad'></TextInput>
      <TextInput style={styles.input} placeholder='Balance' keyboardType='number-pad'></TextInput>
      <TextInput style={styles.input} placeholder='Account Number' keyboardType='number-pad'></TextInput>
      <TextInput style={styles.input} placeholder='Modified By'></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
          <Text>Insert Details</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default AddCustomer

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