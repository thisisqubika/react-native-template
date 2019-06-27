import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../common/Button';
import styles from './styles';

import strings from 'localization';
import TextStyles from 'helpers/TextStyles';
import { logout } from 'actions/UserActions';
import getUser from 'selectors/UserSelectors';

function Profile(props) {
  useEffect(() => {
    if (props.user === null) {
      props.navigation.navigate('Auth');
    }
  });

  const logoutUser = useCallback(() => props.logout(), []);

  return (
    <View style={styles.container}>
      <Text style={TextStyles.fieldTitle}> {strings.profile} </Text>
      <Text>
        {strings.profileMessage}
      </Text>
      <Button
        title={strings.logout}
        onPress={logoutUser}
      />
    </View>
  );
}

Profile.navigationOptions = {
  title: strings.profile,
};

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
