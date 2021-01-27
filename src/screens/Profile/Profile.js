import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={[TextStyles.fieldTitle, styles.legend, { color: colors.text }]}
      >
        {strings.profile.message}
      </Text>
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </ScrollView>
  );
}

export default Profile;
