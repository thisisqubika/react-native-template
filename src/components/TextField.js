import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { spacing, typography } from '@/theme';

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: spacing.s,
    padding: spacing.xs,
  },
});

export function TextField({ style, ...rest }) {
  const { colors } = useTheme();

  return (
    <TextInput style={[{ color: colors.text }, typography.text, styles.input, style]} {...rest} />
  );
}

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};
