import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserError, getUserIsLoading, login } from '@/features/user/userSlice';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { shadow } from '@/theme';

export function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getUserError);
  const isLoading = useSelector(getUserIsLoading);

  const handleSubmit = () => {
    dispatch(login({ username, password }));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
        <TextField
          autoCapitalize="none"
          accessibilityHint={strings.login.usernameHint}
          accessibilityLabel={strings.login.username}
          onChangeText={setUsername}
          placeholder={strings.login.username}
          value={username}
        />
        <TextField
          secureTextEntry
          accessibilityHint={strings.login.passwordHint}
          accessibilityLabel={strings.login.password}
          autoCapitalize="none"
          onChangeText={setPassword}
          placeholder={strings.login.password}
          textContentType="password"
          value={password}
        />
        <ErrorView error={error} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.common.loading : strings.login.button}
        />
      </View>
    </View>
  );
}
