/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';
var Dimensions = require('Dimensions')
var React = require('react-native');
var Dimensions = Dimensions.get('window')
var Chat = require('./Chat');
var BernieManager = require('./BernieManager');
var Settings = require('./Settings');
var Main = require('./Main');

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
var NavExpandedHeight = Dimensions.height/5

var NavBar = React.createClass({
  getInitialState: function(){
    return{expanded: false,
       currentRoute: this.props.navigator.getCurrentRoutes()[0].name}
  },

  isNavBarExpanded: function(){
    this.setState({expanded: !this.state.expanded})
  },
  NavHeight: function(){
    if(this.state.expanded){
      return 0
    } else {
      return 0 - NavExpandedHeight
    }
  },
  navigateToChat: function(){
    this.setState({currentRoute: "Chat"})
    this.props.navigator.replace({
      name:'Chat',
      component: Chat,
    })
  },
  navigateToBernieManager: function(){
    this.setState({currentRoute: "BernieManager"})
    this.props.navigator.replace({
      name:'BernieManager',
      component: BernieManager,
    })
  },
  navigateToSettings: function(){
    this.setState({currentRoute: "Settings"})
    this.props.navigator.replace({
      name:'Settings',
      component: Settings,
    })
  },
  render: function () {
    return (
      <View style={{
        flexDirection: 'column',
        position: 'absolute',
        bottom: this.NavHeight(),
        left:0,}}>
        <NavBarTop
          isNavBarExpanded = {this.isNavBarExpanded}
          currentRoute = {this.state.currentRoute}/>
        <NavBarExpanded
          navigateToChat={this.navigateToChat}
          navigateToBernieManager={this.navigateToBernieManager}
          navigateToSettings={this.navigateToSettings} />
      </View>
    );
  }
});
var NavBarTop = React.createClass({
  _handleMenuButtonPress: function(){
    this.props.isNavBarExpanded();
  },
  render: function(){
    if (this.props.currentRoute === 'Chat'){
      return(
        <View style={styles.navBar}>
          <TouchableHighlight onPress={this._handleMenuButtonPress}>
            <Icon
              name='fontawesome|bars'
              size={40}
              color='#ffffff'
              style={styles.menuBar}/>
          </TouchableHighlight>
          <Text style={styles.menuText}>Example</Text>
          <Icon
            name='fontawesome|search'
            size={30}
            color='#ffffff'
            style={styles.menuBar}/>
        </View>
      )
    } else if(this.props.currentRoute === 'BernieManager'){
      return(
        <View style={styles.navBar}>
          <TouchableHighlight onPress={this._handleMenuButtonPress}>
            <Icon
              name='fontawesome|bars'
              size={40}
              color='#ffffff'
              style={styles.menuBar}/>
          </TouchableHighlight>
          <Icon
            name='fontawesome|search'
            size={30}
            color='#ffffff'
            style={styles.menuBar}/>
        </View>
      )
    } else if(this.props.currentRoute === 'Settings'){
      return(
        <View style={styles.navBar}>
          <TouchableHighlight onPress={this._handleMenuButtonPress}>
            <Icon
              name='fontawesome|bars'
              size={40}
              color='#ffffff'
              style={styles.menuBar}/>
          </TouchableHighlight>
          <Icon
            name='fontawesome|sign-out'
            size={30}
            color='#ffffff'
            style={styles.menuBar}/>
        </View>
      )
    }
  }
});


var NavBarExpanded = React.createClass({
  _handleChatButtonPress: function(){
    this.props.navigateToChat();
  },
  _handleBernieManagerButtonPress: function(){
    this.props.navigateToBernieManager();
  },
  _handleSettingsButtonPress: function(){
    this.props.navigateToSettings();
  },
  render: function(){
    return(
      <View style={styles.navBarExpanded}>
        <TouchableHighlight onPress={this._handleBernieManagerButtonPress}>
          <View style={styles.navBarExpandedItem}>
            <Icon
              name='fontawesome|user'
              size={50}
              color='#ffffff'
              style={styles.navBarExpandedIcon}/>
            <Text style={styles.navBarExpandedItemTitle}>Train Bernie</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._handleChatButtonPress}>
          <View style={styles.navBarExpandedItem}>
            <Icon
              name='fontawesome|comments'
              size={50}
              color='#ffffff'
              style={styles.navBarExpandedIcon}/>
            <Text style={styles.navBarExpandedItemTitle}>Chat</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._handleSettingsButtonPress}>
          <View style={styles.navBarExpandedItem}>
            <Icon
              name='fontawesome|cogs'
              size={50}
              color='#ffffff'
              style={styles.navBarExpandedIcon}/>
            <Text style={styles.navBarExpandedItemTitle}>Settings</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left:0,
  },
  navBar: {
    flexDirection: 'row',
    width: Dimensions.width,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex:1,
    backgroundColor:'rgba(255,0,0,0.6)',
    padding: 10,
  },
  navBarExpanded:{
    flexDirection: 'row',
    flex:4,
    backgroundColor:'rgba(34,34,34,0.9)',
    width: Dimensions.width,
    height: NavExpandedHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:10,
  },
  navBarExpandedIcon:{
    width:60,
    height:60,
  },
  navBarExpandedItem:{
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarExpandedItemTitle:{
    color:'white',
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
