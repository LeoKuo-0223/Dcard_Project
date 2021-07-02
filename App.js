/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './android/homestack/homestack';

export default class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Navigator />
    );
  }

}










// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   item: {
//     backgroundColor: 'white',
//     justifyContent: 'flex-end',
//     padding: 20,
//     borderBottomColor: 'lightgray',
//     borderBottomWidth: 1,
//   },
//   touch: {
//     color: 'black',
//   },
//   stretch: {
//     width: 200,
//     height: 200,
//     resizeMode: 'stretch'
//   },
//   button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   hidebutton: {
//     position: 'absolute',
//     bottom: 0,
//     width: 500,
//     backgroundColor: 'grey',
//     alignItems: 'center'
//   },
//   hidebutton2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })




