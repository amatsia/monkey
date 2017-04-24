import React, { Component } from 'react';
import {AppRegistry,StyleSheet,TouchableHighlight,TextInput,Text,View,Image} from 'react-native';

export default class First extends Component {

  constructor(props) {
   super(props);
   this.state = { text: '' };
 }
 onButtonPress(input){
   this.props.navigator.push({
     id: 'Second',
     passProps: {
      	name: input
      }
   })
 }
 checkName(){
   if (this.state.text=='') {
    alert('Please enter your name!')
  } else {
    return this.onButtonPress(this.state.text)
  }
   }
  render() {
    return (
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('./monkey.jpg')}
          />
          <Text style={styles.welcome}>
            Welcome to the Monkey App!
          </Text>
          <Text style={styles.instructions}>
            Type your name and press Go! to start
          </Text>
          <TextInput
          style = {styles.input}
          placeholder = 'Your name here...'
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableHighlight
              style = {styles.submit}
              onPress = {() => this.checkName()}>
              <Text>
                 Go!
              </Text>
           </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#00CC00',
  },
  instructions: {
    textAlign: 'center',
    color: '#CC0000',
    marginBottom: 5,
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
   },
   submit: {
      backgroundColor: 'silver',
      padding: 10
   },
   submitTest: {
      backgroundColor: 'red',
      padding: 10
   },
   image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black'
  }
});

module.export = First
