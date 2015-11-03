'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions')
var Dimensions = Dimensions.get('window')

var { ActivityIndicatorIOS, Text, Navigator, TouchableHighlight, AppRegistry, ListView, View, StyleSheet } = React;

var Chat = React.createClass({
  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          renderScene={this._renderScene}
          initialRoute={{id: 'home'}} />
      </View>
    );
  },

  _renderScene(route, navigator) {
    if (route.id === 'home') {
      return <CharacterList navigator={navigator} />
    } else if (route.id === 'character') {
      return <CharacterDetail navigator={navigator} person={route.person} />
    }
  }
});

var CharacterDetail = React.createClass({

  render() {
    let { person } = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
        <Text>{person.name}</Text>
        <Text>{person.mass}</Text>
        <Text>{person.eye_color}</Text>
      </View>
    )
  }

});

var CharacterList = React.createClass({
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
          hasLoaded: true,
          people: this.state.people.cloneWithRows(response.results)
        });
      });
  },

  render() {
    if (!this.state.hasLoaded) {
      return this._renderLoadingView();
    }

    return (
      <View style={{paddingTop: 20, flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Chats</Text>
        </View>
        <View style={{marginTop: 10,height: 1, width: Dimensions.width, backgroundColor: 'rgba(34,34,34,0.3)'}} />
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
        <ActivityIndicatorIOS />
      </View>
    );
  },

  _renderRow(rowData) {
    return (
      <TouchableHighlight style={styles.row} underlayColor="#ccc"
        onPress={() => { this.props.navigator.push({id: 'character', person: rowData}) }}>
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
    alignItems: 'center',
  },
  headerText: {
    color: 'grey',
    fontSize:30,
    fontFamily:'HelveticaNeue-Medium'
  },
});

module.exports = Chat
