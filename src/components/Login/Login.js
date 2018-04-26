import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import TextStyles from '../../helpers/TextStyles';
import TextField from '../common/TextField';
import ShadowStyles from '../../helpers/ShadowStyles';
import Button from '../common/Button';
import styles from './styles';
import App from '../../App';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  passwordChanged = value => this.setState({ password: value });

  emailChanged = value => this.setState({ email: value });

  login = () => App.startLoggedInApp();

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.formContainer, ShadowStyles.shadow]}>
          <Text style={TextStyles.fieldTitle}>
            Email
          </Text>
          <TextField
            placeholder="Email"
            onChangeText={this.emailChanged}
            value={this.state.email}
          />
          <Text style={TextStyles.fieldTitle}>
            Password
          </Text>
          <TextField
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.passwordChanged}
            secureTextEntry
          />
          <Button
            onPress={this.login}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

export default Login;
