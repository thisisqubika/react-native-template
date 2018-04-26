import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import TextStyles from '../../helpers/TextStyles';
import styles from './styles';

class Home extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={TextStyles.lightTitle}>
          Home!
        </Text>
        <Text>
          As you can see, this tab does not display the navBar
        </Text>
      </View>
    );
  }
}

export default Home;
