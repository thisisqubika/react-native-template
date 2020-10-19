import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from 'actions/UserActions';
import Button from 'components/common/Button';
import styles from 'components/Profile/styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization';

function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
        {strings.profile}
      </Text>
      <Text style={{ color: colors.text }}>{strings.profileMessage}</Text>
      <Button title={strings.logout} onPress={logoutUser} />
    </View>
  );
}

export default Profile;
