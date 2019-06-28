import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
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
  const user = useSelector(state => getUser(state));

  useEffect(() => {
    if (user !== null) {
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
  navigation: PropTypes.object.isRequired,
};

export default AuthHandler;
