import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import strings from '../../localization';
import TextStyles from '../../helpers/TextStyles';
import Button from '../common/Button';
import { logout } from '../../actions/UserActions';
import getUser from '../../selectors/UserSelectors';
import styles from './styles';

class Profile extends Component {
  static navigationOptions = {
    title: strings.profile,
  };

  componentDidUpdate() {
    if (this.props.user === null) {
      this.props.navigation.navigate('Auth');
    }
    return null;
  }

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
  navigation: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
