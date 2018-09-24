import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './components/navigation';
import Colors from './helpers/Colors';
import { store, persist } from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

class App extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    persist(() => {
      this.setState({ ready: true });
    });
  }

  renderEmpty = () => (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );

  render() {
    const { ready } = this.state;
    if (!ready) return this.renderEmpty();
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;

