import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '_actions/UserActions';
import { Button } from '_components';
import strings from '_localization';
import styles from '_screens/Profile/Profile.styles';
import { TextStyles } from '_theme';

function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text
        style={[TextStyles.fieldTitle, styles.title, { color: colors.text }]}
      >
        {strings.profile.message}
      </Text>
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}

export default Profile;
