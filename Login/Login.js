import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Login extends Component{
	render() {
    return (

    	
    	<View style={styles.container}>
    		<View style={styles.logoContainer}>
    	
       			
 				<Image style={styles.logo} 
 				source={require('./alfamart.png')}
        		/>
        		<Text style={styles.ww}>WEREWOLF IS COMING!</Text>
        	</View>
 		</View>
    	
    	);
    }
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: "red",
		textAlign: 'center'
	},
	logoContainer:{
		alignItems:'center',
		flexGrow:1,
		justifyContent:'center',
		marginTop:300
	},
	ww:{
		fontSize:19,
		
		
	}

	


	
});