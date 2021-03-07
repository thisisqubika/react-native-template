import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { strings } from '_localization';
import { styles } from '_screens/Home/Home.styles';
import { getUser } from '_selectors/UserSelectors';
import { TextStyles } from '_theme';

export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {strings.home.message} {user?.username}
      </Text>
      <Text style={[TextStyles.textField, { color: colors.text }]}>
        {strings.home.variant} {Config.BUILD_VARIANT}
      </Text>
    </View>
  );
}
