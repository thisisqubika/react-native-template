import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TextStyles } from '@/theme';

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 15,
    paddingVertical: 5,
  },
});

export function TextField({ style, ...rest }) {
  const { colors } = useTheme();

  return (
    <TextInput
      style={[{ color: colors.text }, TextStyles.text, styles.input, style]}
      underlineColorAndroid="transparent"
      {...rest}
    />
  );
}

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};
