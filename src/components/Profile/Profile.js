import React, { useCallback } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import Button from '../common/Button';
import styles from './styles';
import strings from 'localization';
import TextStyles from 'helpers/TextStyles';
import { logout } from 'actions/UserActions';

function Profile() {
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
        {strings.profile}
      </Text>
      <Text style={{ color: colors.text }}>
        {strings.profileMessage}
      </Text>
      <Button
        title={strings.logout}
        onPress={logoutUser}
      />
    </View>
  );
}

export default Profile;
