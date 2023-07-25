import { ImageBackground, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Reset_mpin = ({navigation}) => {
  return (
    <ImageBackground style={styles.backgroundStyle} source={{uri: 'https://media.istockphoto.com/id/820865690/photo/desperate-young-woman-trying-to-log-into-her-computer-forgot-password.jpg?s=2048x2048&w=is&k=20&c=WAMVEzxQwUQDgdqwEDPZ1quv1PbM547oJT0fPF7geoI='}}>
      <Title/>
      <Text>Reset_mpin</Text>
      <View style={styles.form}>
        
        <TextInput style={styles.input} placeholder='Customer ID' keyboardType='number-pad'></TextInput>
        <TextInput style={styles.input} placeholder='new mpin' keyboardType='number-pad'></TextInput>
        <TextInput style={styles.input} placeholder='confirm mpin' keyboardType='number-pad'></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
            <Text>Update mpin</Text>
        </TouchableOpacity>

        </View>
    </ImageBackground>
  )
}

export default Reset_mpin

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
    alignItems:'center'
  },
  button:{
    padding:7,
    backgroundColor: 'orange',
    borderRadius:7,
  },
})