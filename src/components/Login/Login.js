import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

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

function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([actionTypes.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([actionTypes.LOGIN], state),
    shallowEqual
  );

  const loginUser = () => {
    dispatch(login(email, password));
  };

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.formContainer,
          ShadowStyles.shadow,
          { backgroundColor: colors.primary },
        ]}
      >
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.email}
        </Text>
        <TextField
          accessibilityHint={strings.emailHint}
          accessibilityLabel={strings.email.toLowerCase()}
          onChangeText={handleEmailChange}
          placeholder={strings.email}
          style={{ color: colors.text }}
          value={email}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.password}
        </Text>
        <TextField
          secureTextEntry
          accessibilityHint={strings.passwordHint}
          accessibilityLabel={strings.password.toLowerCase()}
          onChangeText={handlePasswordChange}
          placeholder={strings.password}
          value={password}
          style={{ color: colors.text }}
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

export default Login;
