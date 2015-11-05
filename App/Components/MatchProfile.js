var styles = require('../Stylesheets/styles');
var Dimensions = require('Dimensions');
var Dimensions = Dimensions.get('window');
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

var MatchProfile = React.createClass({
  render() {
    let { person } = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{person.name}</Text>
          </View>
          <View style={{marginTop: 10,height: 1, width: Dimensions.width, backgroundColor: 'rgba(34,34,34,0.3)'}} />
        </View>
        <View style={styles.mainContent}>

        </View>
        <Text>{person.name}</Text>
        <Text>{person.mass}</Text>
        <Text>{person.eye_color}</Text>
      </View>
    )
  }

});

module.exports = MatchProfile;
