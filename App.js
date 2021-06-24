import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import data from './local-db';
import Phones from './phonicbutton'
import { TouchableHighlightBase } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     input: '',
     chunk : [],
     phone : []
                  
   };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            centerComponent={{ text: 'Munky Chunky', style: { color: '#fff' } }}
          />
          <Image source={{uri : 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}} 
           style={{width:100 , height:100 ,alignSelf :'center' }}></Image>
          <TextInput
            type="text"
            placeholder="This is an Input"
            style={{ background: 'red' }}
            value={this.state.input}
            onChangeText={(text) => {
              this.setState({ input: text });
            }}
          />

          <TouchableOpacity

            onPress={() => {
              var word =  this.state.input.toLowerCase().trim()
              data[word]?(
              //var chunk = data [word].chunks
              //var phone = data [word].phones
              
              this.setState({chunk : data [word].chunks,
                             phone : data [word].phones,
              })):alert("Word is not available for now")
            
              

            }}
          > Button </TouchableOpacity>
          <View>
         {this.state.chunk.map((chunk,index) => {
           return (
             <Phones soundChunk = {this.state.phone[index]}  wordChunk={this.state.chunk[index]} indexNumber={index}/>
           )
         })}
           </View>   
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
});
