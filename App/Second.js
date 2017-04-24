import React, { Component } from 'react';
import {AppRegistry,PanResponder,StyleSheet,Text,View,Image,Animated,TouchableHighlight} from 'react-native';

export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1)
    }
    setInterval(() => {
          this.setState({ showText: !this.state.showText });
        }, 1000)
  }
    componentWillMount() {
      this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        // Set the initial value to the current state
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value})
        this.state.pan.setValue({x: 0, y: 0})
        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset();
        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
      }
    });
  }
  onButtonPress(){
    this.props.navigator.push({
      id: 'First'
    })
  }
  render() {
    let display = this.state.showText ? this.props.name : 'Drag the monkey!'
    let { pan } = this.state
    let { scale } = this.state
    let [translateX, translateY] = [pan.x, pan.y]
    let rotate = '0deg';
    let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.top}>
      <Text style = {styles.goBackText}>
        {display}
      </Text>
      </View>
      <View style={styles.container}>
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <Image style={styles.image} source={require('./monkey.jpg')} />
        </Animated.View>
      </View>
      <TouchableHighlight
            style = {styles.goBack}
            onPress = {this.onButtonPress.bind(this)}>
            <Text style = {styles.goBackText}>
              Go Back!
            </Text>
         </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCC00',
  },
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
   width: 100,
   height: 100,
   borderRadius: 50,
   borderWidth: 5,
   borderColor: 'red'
 },
 goBack: {
    backgroundColor: '#CCCC00',
    padding: 10
 },
 goBackText: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
   color: '#00CCCC'
 }
})

module.export = Second
