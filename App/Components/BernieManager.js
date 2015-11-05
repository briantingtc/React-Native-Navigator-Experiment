'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var Dimensions = Dimensions.get('window');
var styles = require('../Stylesheets/styles');

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

var BernieManager = React.createClass({
  render: function(){
    return (
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Manage Bernie</Text>
          </View>
          <View style={{marginTop: 10,
                           height: 1,
                            width: Dimensions.width,
                  backgroundColor: 'rgba(34,34,34,0.3)'}} />
        </View>
    )
  }
});

module.exports= BernieManager;
