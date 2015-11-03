/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var NavBar = require('./Navbar');
var Chat = require('./Chat');
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


var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var TabBarItemIOS = TabBarIOS.Item;

var Child = React.createClass({

  render: function () {
    return (
      <View style={styles.container}>
        <Chat />
      </View>
    );
  }
});


var styles = StyleSheet.create({
  icon:{

  },
  tabBar: {
    backgroundColor: 'red',
    flex: 1,
    color: 'red',
    tintColor: 'red',
    height:500,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: '#555555',
  },

  signInText: {
    color: 'white',
    marginLeft: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 15
  },
  signInWithFacebookButton: {
    backgroundColor: BrandColors.Facebook,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    padding: 5,
    borderRadius: 3,
    marginTop: 200,
  },
  signInWithFacebookIcon: {
    width: 28,
    height: 28,
    marginLeft: 5
  }
});

module.exports = Child;
