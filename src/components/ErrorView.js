import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from '@/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function ErrorView({ error }) {
  const { colors } = useTheme();

  if (error === null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[typography.error, { color: colors.error }]}>{error}</Text>
    </View>
  );
}

ErrorView.propTypes = {
  error: PropTypes.string,
};
