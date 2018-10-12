import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,Button,Image,TouchableOpacity,Alert } from 'react-native';

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source ={require('./alfamart.png')} style={{width: 100, height: 100}}/>
        <Text style={styles.ww}>WEREWOLF IS COMING!</Text>   
      <TextInput
        style = {styles.inputBox}
        placeholder = "Your Werewolf's name"
      />
        <TextInput
         style = {styles.inputBox}
        placeholder = "Password"
        secureTextEntry = {true}
      />
      <Button
         onPress = {() => {this.props.navigation.navigate('Judul')}}
         style = {styles.button}
         title = " Login  "
         color = "#FFD071"
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#71D0FF',
  },

  inputBox : {
    width : 250,
    fontSize : 13,
    color : 'black'
  },
  button : {
    width : 250,
    height : 40,
    alignItems : 'center',
    backgroundColor : '#3B5998',
    marginVertical : 10,
    paddingHorizontal : 60,
  flexDirection : 'row',
  justifyContent : 'space-between'
  },
  ww:{
    fontSize:19,
    
    
  }
});