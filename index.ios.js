/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var Login = require('./App/Components/Login');
var Main = require('./App/Components/Main');

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
        return <Login navigator={navigator} />
        break;
      case "Main":
        return <Main navigator={navigator}/>
        break;
      default:
        return <Login navigator={navigator} />
        break;
    }
    console.log(route.name)
  },
  render: function () {
    return (
      <Navigator
        initialRoute={{name: 'Login'}}
        renderScene={this._renderScene}
      />
    );
  }
});



AppRegistry.registerComponent('bernie', () => Main);
