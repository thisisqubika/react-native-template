import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../../App';
import Button from '../common/Button';
import TextField from '../common/TextField';
import ShadowStyles from '../../helpers/ShadowStyles';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import { login } from '../../actions/UserActions';
import {
  getUser,
  getIsLoading,
  getError,
} from '../../selectors/UserSelectors';
import styles from './styles';

class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.user !== null) {
      App.startLoggedInApp();
    }
    return null;
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  passwordChanged = value => this.setState({ password: value });

  emailChanged = value => this.setState({ email: value });

  login = () => this.props.login(this.state.email, this.state.password);

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.formContainer, ShadowStyles.shadow]}>
          <Text style={TextStyles.fieldTitle}>
            {strings.email}
          </Text>
          <TextField
            placeholder={strings.email}
            onChangeText={this.emailChanged}
            value={this.state.email}
          />
          <Text style={TextStyles.fieldTitle}>
            {strings.password}
          </Text>
          <TextField
            placeholder={strings.password}
            value={this.state.password}
            onChangeText={this.passwordChanged}
            secureTextEntry
          />
          { this.props.error && <Text>{this.props.error}</Text> }
          <Button
            onPress={this.login}
            title={this.props.isLoading ? strings.loading : strings.login}
          />
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Login.defaultProps = {
  user: null,
  error: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
