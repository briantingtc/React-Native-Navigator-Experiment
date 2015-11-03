/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';
var Dimensions = require('Dimensions')
var React = require('react-native');
var Dimensions = Dimensions.get('window')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
  } = React;

var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var NavBar = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Icon
          name='fontawesome|bars'
          size={40}
          color='#ffffff'
          style={styles.menuBar}/>
        <Text style={styles.menuText}>Example</Text>
        <Icon
          name='fontawesome|search'
          size={30}
          color='#ffffff'
          style={styles.menuBar}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex:1,
    backgroundColor:'rgba(255,0,0,0.5)',
    height: Dimensions.height/10,
    width: Dimensions.width,
    position: 'absolute',
    bottom:0,
    left:0,
    padding: 10,
  },
  menuBar: {
    width: 28,
    height: 28,
  },
  menuText: {
    fontFamily: 'HelveticaNeue-Medium',
    color: 'white',
    fontSize: 20,
  }
});

module.exports = NavBar;
