import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import TextField from '../common/TextField';
import ErrorView from '../common/ErrorView';
import styles from './styles';

import ShadowStyles from 'helpers/ShadowStyles';
import TextStyles from 'helpers/TextStyles';
import errorsSelector from 'selectors/ErrorSelectors';
import { isLoadingSelector } from 'selectors/StatusSelectors';
import strings from 'localization';
import { login, actionTypes } from 'actions/UserActions';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => isLoadingSelector([actionTypes.LOGIN], state));
  const errors = useSelector(state => errorsSelector([actionTypes.LOGIN], state));

  const dispatch = useDispatch();
  const loginUser = useCallback(() => dispatch(login(email, password)), [email, password, dispatch]);
  const passwordChanged = useCallback(value => setPassword(value), []);
  const emailChanged = useCallback(value => setEmail(value), []);

  const { navigation } = props;
  navigation.setOptions({ headerShown: false });

  return (
    <View style={styles.container}>
      <View style={[styles.formContainer, ShadowStyles.shadow]}>
        <Text style={TextStyles.fieldTitle}>
          {strings.email}
        </Text>
        <TextField
          placeholder={strings.email}
          onChangeText={emailChanged}
          value={email}
        />
        <Text style={TextStyles.fieldTitle}>
          {strings.password}
        </Text>
        <TextField
          placeholder={strings.password}
          value={password}
          onChangeText={passwordChanged}
          secureTextEntry
        />
        <ErrorView errors={errors} />
        <Button
          onPress={loginUser}
          title={isLoading ? strings.loading : strings.login}
        />
      </View>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
