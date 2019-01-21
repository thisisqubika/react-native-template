import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getUser from '../../selectors/UserSelectors';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

class AuthHandler extends Component {
  constructor(props) {
    super(props);
    this.navigateWithAuth();
  }

  navigateWithAuth = async () => {
    if (this.props.user !== null) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

AuthHandler.propTypes = {
  user: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

AuthHandler.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(AuthHandler);
