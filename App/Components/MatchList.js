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
  ListView,
  Image
  } = React;

var MatchList = React.createClass({
  getInitialState() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    return { people: dataSource };
  },

  componentDidMount() {
    fetch('https://swapi.co/api/people').
      then((response) => response.json()).
      then((response) => {
        this.setState({
          people: this.state.people.cloneWithRows(response.results)
        });
      });
  },

  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Chats</Text>
          </View>
          <View style={{marginTop: 10,height: 1, width: Dimensions.width, backgroundColor: 'rgba(34,34,34,0.3)'}} />
        </View>
        <ListView
          renderSeparator={this._renderSeparator}
          dataSource={this.state.people}
          renderRow={this._renderRow} />
      </View>
    )
  },

  _renderLoadingView() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Chats</Text>
          </View>
          <View style={{marginTop: 10,height: 1, width: Dimensions.width, backgroundColor: 'rgba(34,34,34,0.3)'}} />
        </View>
        <ActivityIndicatorIOS />
      </View>
    );
  },

  _renderRow(rowData) {
    return (
      <TouchableHighlight style={styles.row} underlayColor="#ccc"
        onPress={() => { this.props.navigator.push({name: 'MatchMessages', person: rowData}) }}>
        <View style={styles.chatPerson}>
          <View>

          </View>
          <View>
            <Text>{rowData.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  },

  _renderSeparator() {
    return (
      <View style={{marginLeft: 25, height: 1, width: Dimensions.width - 50, backgroundColor: 'rgba(34,34,34,0.1)'}} />
    )
  }
});

module.exports = MatchList;
