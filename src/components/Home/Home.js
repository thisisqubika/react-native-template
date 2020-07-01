import React from 'react';
import { View, Text } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import getUser from 'selectors/UserSelectors';

const Home = () => {
  const { colors } = useTheme();
  const user = useSelector(state => getUser(state), shallowEqual);

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
};

export default Home;
