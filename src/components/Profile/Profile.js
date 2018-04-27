import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import strings from '../../localization';
import TextStyles from '../../helpers/TextStyles';
import Colors from '../../helpers/Colors';
import Button from '../common/Button';
import { logout } from '../../actions/UserActions';
import App from '../../App';
import styles from './styles';

class Profile extends Component {
  static navigatorStyle = {
    title: 'Profile',
    navBarTextColor: Colors.white,
    navBarBackgroundColor: Colors.primary,
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.user === null) {
      App.startLoggedOutApp();
    }
    return null;
  }

  state = {};

  logout = () => this.props.logout();

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

Profile.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
