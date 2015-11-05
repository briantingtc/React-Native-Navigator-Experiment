/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
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
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var Main = require('./Main');
var TabBarItemIOS = TabBarIOS.Item;


var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var NavBar = require('./Navbar');
var Login = React.createClass({
  _handleNextButtonPress: function() {
    this.props.navigator.push({
      name:'Main',
      component: Main,
      navigationBar: <NavBar />,
    })
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 150, height: 45,marginLeft:50,marginTop:200,}}
          source={require('image!logo')}
        />
      <TouchableHighlight onPress={() => this._handleNextButtonPress()}>
        <View
          style={styles.signInWithFacebookButton}>
          <Icon
            name='fontawesome|facebook'
            size={28}
            color='#ffffff'
            style={styles.signInWithFacebookIcon}/>
          <Text style={styles.signInText}>
            {'Sign in with Facebook'}
          </Text>
        </View>
      </TouchableHighlight>

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
    alignItems: 'center',
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

module.exports = Login;
