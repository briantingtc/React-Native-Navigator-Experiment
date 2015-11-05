/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var NavBar = require('./Navbar');
var Chat = require('./Chat');
var BernieManager = require('./BernieManager');
var Settings = require('./Settings');
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
  Image,
  Navigator
  } = React;


var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var Main = React.createClass({
  getInitialState: function(){
    return{route: "Chat"}
  },

  _renderScene: function(route,navigator){
    switch (route.name) {
      case "Chat":
        return <Chat navigator={navigator}/>
        break;
      case "BernieManager":
        return <BernieManager navigator={navigator}/>
        break;
      case "Settings":
        return <Settings navigator={navigator}/>
      default:
        return <Settings navigator={navigator}/>
        break;
    }
  },

  render: function () {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Chat'}}
          renderScene={this._renderScene}
          navigationBar={<NavBar/>}
        />
      </View>
    );
  }
});

var BernieManager = React.createClass({
  render: function(){
    return (
      <View style={{paddingTop: 20, flex: 0.08}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Manage Bernie</Text>
        </View>
        <View style={{marginTop: 10,height: 1, width: Dimensions.width, backgroundColor: 'rgba(34,34,34,0.3)'}} />
      </View>
    )
  }
});
var Settings = React.createClass({
  render: function(){
    return (
      <View style={{paddingTop: 20, flex: 0.08}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style={{marginTop: 10,height: 1, width: Dimensions.width, backgroundColor: 'rgba(34,34,34,0.3)'}} />
      </View>
    )
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

  header: {
    alignItems: 'center',
  },
  headerText: {
    color: 'grey',
    fontSize:30,
    fontFamily:'HelveticaNeue-Medium'
  },
});

module.exports = Main;
