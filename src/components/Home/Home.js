import React, { useCallback } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import getUser from 'selectors/UserSelectors';

const Home = () => {
  const user = useSelector(state => getUser(state));
  const getMessage = useCallback(() => `${strings.homeMessage} ${user && user.name}`, [user]);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {strings.home}
      </Text>
      <Text style={{ color: colors.text }}>
        {getMessage()}
      </Text>
    </View>
  );
};

export default Home;
