import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Emoticons, * as emoticons from 'react-native-emoticons';
import Emoticons, * as emoticons from './components/emoticons';

export default class App extends React.Component {
  _onEmoticonPress () {

  }
  _onBackspacePress() {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Emoticons
            onEmoticonPress={this._onEmoticonPress.bind(this)}
            show={true}
            onBackspacePress={this._onBackspacePress.bind(this)}
            concise={true}
            showPlusBar={false}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
