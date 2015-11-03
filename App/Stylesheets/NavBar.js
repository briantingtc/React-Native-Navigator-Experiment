'use strict';

var Dimensions = require('Dimensions')
var React = require('react-native');
var {  StyleSheet,  } = React;

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex:1,
    backgroundColor:'rgba(255,0,0,0.5)',

    position: 'absolute',
    bottom:0,
    left:0,
    padding: 10,
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

module.exports = styles;
