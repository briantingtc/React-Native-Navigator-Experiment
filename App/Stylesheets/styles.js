'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var Dimensions = Dimensions.get('window');

var {  StyleSheet, } = React;

var styles = StyleSheet.create({
  container: {
    height: 200,
  },
  row: {
    padding: 20,
  },
  scrollContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    borderWidth: 1,
    borderColor: 'white',
  },
  green: {
    backgroundColor: 'grey',
  },
  header: {
    paddingTop: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'grey',
    fontSize:30,
    fontFamily:'HelveticaNeue-Medium'
  },
});

module.exports = styles;
