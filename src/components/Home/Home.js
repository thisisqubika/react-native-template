import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import styles from './styles';

class Home extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={TextStyles.lightTitle}>
          {strings.home}
        </Text>
        <Text>
          {strings.homeMessage}
        </Text>
      </View>
    );
  }
}

export default Home;
