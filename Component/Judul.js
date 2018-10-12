import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';

export default class Judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.container}>
			<Image source ={require('./holla.jpg')} style={{width: 200, height: 200}}/> 
			<Text style = {warna.salma}> My Biodata!! </Text>
			<Text style = {salon.rizka} > Nama : Rizka Salma Adelia</Text>
			<Text style = {salon.rizka} > Kelas : XI RPL 1 </Text>
			<Text style = {salon.rizka} > SMK TELKOM Purwokerto</Text>
			   <Text style = {{ marginBottom : 100}}></Text>
			   <Button title = " Next " color = "#FFD071" onPress = {() => {this.redirect()}}/>
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
	}
});
const warna = {
	salma  : {
		color : "#000",
		fontSize : 25,
		fontWeight : 'bold',
	}
}

const salon = {
	rizka : {
		color : "#FFffff",
		fontSize : 20,
	}
}