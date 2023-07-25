import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
        
      <Text style={styles.text}>
      <Image source={{uri:'https://cdn.vectorstock.com/i/1000x1000/72/97/bank-icon-vector-25177297.webp'}} style={styles.ic}></Image> Bank Of Mysore</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    text: 
    {
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'purple',
        fontSize: 30,
        width:400,
        color: 'white'
    },
    ic:{
        height:30,
        width:30,
    }
})