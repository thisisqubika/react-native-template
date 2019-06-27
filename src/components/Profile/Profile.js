import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../common/Button';
import styles from './styles';

import strings from 'localization';
import TextStyles from 'helpers/TextStyles';
import { logout } from 'actions/UserActions';
import getUser from 'selectors/UserSelectors';

function Profile(props) {
  const user = useSelector(state => getUser(state));
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);

  useEffect(() => {
    if (user === null) {
      props.navigation.navigate('Auth');
    }
  });

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
  navigation: PropTypes.object.isRequired,
};

export default Profile;
