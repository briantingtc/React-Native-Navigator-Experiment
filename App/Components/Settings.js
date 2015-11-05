'use strict';

var React = require('react-native');
var styles = require('../Stylesheets/styles');
var Dimensions = require('Dimensions');
var Dimensions = Dimensions.get('window');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Animated,
  Image
  } = React;

var Settings = React.createClass({
  render: function(){
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style={{marginTop: 10,height: 1, width: Dimensions.width, backgroundColor: 'rgba(34,34,34,0.3)'}} />
      </View>
    )
  }
});

module.exports = Settings;
