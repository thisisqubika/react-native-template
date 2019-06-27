import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getUser from 'selectors/UserSelectors';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

function AuthHandler(props) {
  useEffect(() => {
    if (props.user !== null) {
      props.navigation.navigate('App');
    } else {
      props.navigation.navigate('Auth');
    }
  });

  return (
    <View style={styles.container} />
  );
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
