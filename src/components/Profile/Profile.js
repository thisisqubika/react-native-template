import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import strings from '../../localization';
import TextStyles from '../../helpers/TextStyles';
import Colors from '../../helpers/Colors';
import Button from '../common/Button';
import App from '../../App';
import styles from './styles';

class Profile extends Component {
  static navigatorStyle = {
    title: 'Profile',
    navBarTextColor: Colors.white,
    navBarBackgroundColor: Colors.primary,
  };

  logout = () => App.startLoggedOutApp();

  render() {
    return (
      <View style={styles.container}>
        <Text style={TextStyles.fieldTitle}> {strings.profile} </Text>
        <Text>
          {strings.profileMessage}
        </Text>
        <Button
          title={strings.logout}
          onPress={this.logout}
        />
      </View>
    );
  }
}

export default Profile;
