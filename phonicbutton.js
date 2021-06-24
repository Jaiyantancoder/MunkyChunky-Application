import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
  } from 'react-native';
import * as Speech from 'expo-speech'; 
import color from 'color';

export default class Phones extends React.Component{
constructor(props){
    super(props)
    this.state = {pressedButtonindex : ''}
}

  render () {
      
const playSound = (soundChunk) => {
   
    Speech.speak(soundChunk);
}
    return (
        <View>
           <TouchableOpacity 
           style={this.state.pressedButtonindex === this.props.indexNumber ? {backgroundColor:"red"} : {backgroundColor:"black"}}
           onPress={()=>{
               this.setState({pressedButtonindex: this.props.indexNumber})
               playSound(this.props.soundChunk)
           }}> 
           <Text  style={{color : "white"}} >
               {this.props.wordChunk}
           </Text>
           </TouchableOpacity> 
        </View>
    )
}
}
