import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Navigator,Text,View} from 'react-native';

import First from './First'
import Second from './Second'

export default class App extends Component {

constructor(){
  super()
  this.navigatorRenderScene = this.navigatorRenderScene.bind(this)
}

  render() {
    return (
      <Navigator
      initialRoute = {{
        id: 'First'
      }}
      renderScene={
        this.navigatorRenderScene
      }
      />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator
    switch (route.id) {
      case 'First':
        return(<First navigator = {navigator} {...route.passProps}/>)
      case 'Second':
        return(<Second navigator = {navigator} {...route.passProps}/>)
        break;
      default:

    }
  }
}
