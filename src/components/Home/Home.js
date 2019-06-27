import React, { useCallback } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import getUser from 'selectors/UserSelectors';

function Home(props) {
  const getMessage = useCallback(() => `${strings.homeMessage} ${props.user && props.user.name}`, []);

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

Home.propTypes = {
  user: PropTypes.object,
};

Home.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
