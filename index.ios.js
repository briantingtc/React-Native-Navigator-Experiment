/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var Bernie = require('./App/Components/Main');
var Child = require('./App/Components/Child');
var NavBar = require('./App/Components/Navbar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Animated,
  Image,
  Navigator
  } = React;


var bernie = React.createClass({
  _renderScene: function(route, navigator){
    switch (route.name) {
      case "Login":
        return <Bernie navigator={navigator} />
        break;
      case "Child":
        return <Child navigator={navigator}
                      />
        break;
      default:
        return <Bernie navigator={navigator} />
        break;
    }
    console.log(route.name)
  },
  render: function () {
    return (
      <Navigator
        initialRoute={{name: 'Login'}}
        renderScene={this._renderScene}
        navigationBar={<NavBar />}
    />
    );
  }
});



AppRegistry.registerComponent('bernie', () => bernie);
