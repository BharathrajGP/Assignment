import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Banking = ({navigation}) => {
  return (
    <View style={styles.full}>

        <View style={styles.head}><Text>
        <Text style={styles.name}><Image source={{uri:'https://cdn.vectorstock.com/i/1000x1000/72/97/bank-icon-vector-25177297.webp'}} style={styles.ic}></Image> Bank Of Mysore</Text>
        
        <View style={styles.head}>
        <TouchableOpacity  >
            <Text style={styles.innertext}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.innertext}>Withdrawal</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.innertext}>Check Balance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.innertext}>Log Out</Text>
        </TouchableOpacity></View>
        </Text>
        </View>

      <View style={styles.middle}>
      <ScrollView>
        {/* <Image source={{uri:'https://cdn.pixabay.com/photo/2017/12/17/14/12/bitcoin-3024279_1280.jpg'}} style={styles.bankimg}> 
        </Image> */}
        <View style={styles.middle1}>
        <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2017/12/17/14/12/bitcoin-3024279_1280.jpg'}} style={styles.bankimg}>
            <Text style={styles.content}>Hi, Welcome to Bank Of Mysore
            </Text>
            <Text style={styles.content2}>Feel like your wallet</Text>
        </ImageBackground>
        </View>
        <View style={styles.middle2}>
            <Text>Hello</Text>
        </View>
      </ScrollView>
      </View>

      <View style={styles.foot}>
        <TouchableOpacity>
        <Text><Image source={{uri:'https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png'}} style={styles.ic}></Image>bankofmysore007@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={{uri:'https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_640.png'}} style={styles.ic}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={{uri:'https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_640.png'}} style={styles.ic}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={{uri:'https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136_640.png'}} style={styles.ic}></Image>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Banking

const styles = StyleSheet.create({
    full:{
        // flex:3
    },
    name:{
        fontSize: 30,
        width:400,
        color: 'white',
        fontWeight: 'bold',
        margin:20,
    },
    middle:{
        height: '83.5%',
    },
    head: 
    {
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'purple',
        justifyContent:'space-between',
        flexDirection: 'row',
        padding:5,
    },
    foot: 
    {
        padding: 14,
        fontWeight: 'bold',
        backgroundColor: 'purple',
        justifyContent:'space-between',
        flexDirection: 'row',
        paddingBottom: 14,
        marginBottom:0,
    },
    innertext:{
        marginLeft:20,
        color:'cyan',
        marginHorizontal: 10,
    },
    ic:{
        height:30,
        width:30,
    },
    bankimg:{
        height: 700,
        width: 400,
        justifyContent: 'center',
        alignItems:'center'
    },
    middle1: {
       
    },
    middle2: {
        backgroundColor: 'white'
    },
    content:{
        fontSize: 30,
        // width:400,
        color: 'white',
        fontWeight: 'bold',
    },
    content2:{
        fontSize: 16,
        // width:400,
        color: 'white',
        fontWeight: 'bold',
        // margin:20,
    },
})