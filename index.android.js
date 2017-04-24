  import React, { Component } from 'react';
  import { AppRegistry} from 'react-native';
  import App from './App/App'

  export default class monkey extends Component {
    render() {
      return (
        <App />
      );
    }
  }
AppRegistry.registerComponent('monkey', () => monkey);
