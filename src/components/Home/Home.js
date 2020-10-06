import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from 'components/Home/styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import { getUser } from 'selectors/UserSelectors';

function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {strings.home}
      </Text>
      <Text style={{ color: colors.text }}>
        {strings.homeMessage} {user?.name}
      </Text>
    </View>
  );
}

export default Home;
