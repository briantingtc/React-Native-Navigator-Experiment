/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var NavBar = require('./Navbar');
var MatchList = require('./MatchList');
var MatchChatHistory = require('./MatchChatHistory');
var MatchProfile = require('./MatchProfile');
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
    return{route: "MatchList"}
  },

  _renderScene: function(route,navigator){
    console.log(navigator.getCurrentRoutes())
    switch (route.name) {
      case "MatchList":
        return <MatchList navigator={navigator} />
        break;
      case "MatchMessages":
        return <MatchChatHistory navigator={navigator} person={route.person} />
        break;
      case "MatchProfile":
       return <MatchProfile navigator={navigator} person={person} />
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
          initialRoute={{name: 'MatchList'}}
          renderScene={this._renderScene}
          navigationBar={<NavBar/>}
        />
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
