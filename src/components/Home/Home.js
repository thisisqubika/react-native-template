import React, { useCallback } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import getUser from 'selectors/UserSelectors';

function Home() {
  const user = useSelector(state => getUser(state));
  const getMessage = useCallback(() => `${strings.homeMessage} ${user && user.name}`, [user]);

  return (
    <View style={styles.container}>
      <Text style={TextStyles.lightTitle}>
        {strings.home}
      </Text>
      <Text>
        {getMessage()}
      </Text>
    </View>
  );
}

Home.navigationOptions = {
  title: strings.home,
};

export default Home;
