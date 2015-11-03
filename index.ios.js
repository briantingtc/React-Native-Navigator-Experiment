/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var Bernie = require('./App/Components/Main');
var Child = require('./App/Components/Child');
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
    if (route.name==='Login'){
      return <Bernie navigator={navigator} />
    } else if (route.name==='Child') {
      return <Child navigator={navigator} />
    }
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



AppRegistry.registerComponent('bernie', () => bernie);
