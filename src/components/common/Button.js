import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import TextStyles from 'helpers/TextStyles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
});

function Button({ style, textStyle, title, ...rest }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, { borderColor: colors.border }, style]}
    >
      <Text style={[{ color: colors.text }, TextStyles.fieldTitle, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default Button;
